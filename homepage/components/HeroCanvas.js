'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas({ frontImage = '/images/hero.png', backImage = '/images/hero_back.png' }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    // --- シーン・カメラ・レンダラー ---
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0) // 背景を完全透明に
    mount.appendChild(renderer.domElement)

    // --- テクスチャ読み込み ---
    const loader = new THREE.TextureLoader()
    const frontTex = loader.load(frontImage)
    frontTex.premultiplyAlpha = false
    const backTex = loader.load(backImage)
    backTex.premultiplyAlpha = false

    // --- ジオメトリ（板） ---
    const geometry = new THREE.PlaneGeometry(2, 2)

    // 表面マテリアル（透過対応）
    const frontMat = new THREE.MeshBasicMaterial({
      map: frontTex,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      side: THREE.FrontSide,
    })

    // 裏面マテリアル（透過対応）
    const backMat = new THREE.MeshBasicMaterial({
      map: backTex,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      side: THREE.BackSide,
    })

    // 表と裏を別々のメッシュで重ねる
    const frontMesh = new THREE.Mesh(geometry, frontMat)
    const backMesh = new THREE.Mesh(geometry, backMat)
    const group = new THREE.Group()
    group.add(frontMesh)
    group.add(backMesh)
    scene.add(group)

    // --- ドラッグ操作 ---
    let isDragging = false
    let prevX = 0
    let prevY = 0
    let rotX = 0
    let rotY = 0
    let velX = 0
    let velY = 0

    const onPointerDown = (e) => {
      isDragging = true
      prevX = e.clientX ?? e.touches?.[0]?.clientX
      prevY = e.clientY ?? e.touches?.[0]?.clientY
      velX = 0
      velY = 0
    }

    const onPointerMove = (e) => {
      if (!isDragging) return
      const x = e.clientX ?? e.touches?.[0]?.clientX
      const y = e.clientY ?? e.touches?.[0]?.clientY
      const dx = x - prevX
      const dy = y - prevY
      velX = dx * 0.01
      velY = dy * 0.01
      rotY += dx * 0.01
      rotX += dy * 0.01
      prevX = x
      prevY = y
    }

    const onPointerUp = () => { isDragging = false }

    mount.addEventListener('mousedown', onPointerDown)
    mount.addEventListener('mousemove', onPointerMove)
    mount.addEventListener('mouseup', onPointerUp)
    mount.addEventListener('mouseleave', onPointerUp)
    mount.addEventListener('touchstart', onPointerDown, { passive: true })
    mount.addEventListener('touchmove', onPointerMove, { passive: true })
    mount.addEventListener('touchend', onPointerUp)

    // --- アニメーションループ ---
    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)

      if (!isDragging) {
        // 慣性
        velX *= 0.92
        velY *= 0.92
        rotY += velX
        rotX += velY
        // 自動でゆっくり回転
        rotY += 0.003
      }

      group.rotation.y = rotY
      group.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotX)) // 縦は制限

      renderer.render(scene, camera)
    }
    animate()

    // --- リサイズ対応 ---
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      mount.removeEventListener('mousedown', onPointerDown)
      mount.removeEventListener('mousemove', onPointerMove)
      mount.removeEventListener('mouseup', onPointerUp)
      mount.removeEventListener('mouseleave', onPointerUp)
      mount.removeEventListener('touchstart', onPointerDown)
      mount.removeEventListener('touchmove', onPointerMove)
      mount.removeEventListener('touchend', onPointerUp)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [frontImage, backImage])

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        cursor: 'grab',
      }}
    />
  )
}
