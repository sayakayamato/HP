'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import styles from '../styles/HeroSlider.module.css'

const DIAG = 80 // 斜めの幅（px）

export default function HeroSlider() {
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const containerRef = useRef(null)

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(5, Math.min(95, p)))
  }, [])

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX) }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX) }}
      onTouchEnd={() => { dragging.current = false }}
    >

      {/* 左パネル */}
      <div
        className={`${styles.panel} ${styles.left}`}
        style={{
          clipPath: `polygon(0 0, calc(${pos}% + ${DIAG}px) 0, calc(${pos}% - ${DIAG}px) 100%, 0 100%)`
        }}
      >
        <div className={styles.imageWrap}>
          <Image src="/images/hero.png" alt="hero" fill style={{ objectFit: 'contain', objectPosition: 'center' }} priority />
        </div>
        <div className={styles.leftText}>
          <p className={styles.eyebrow}>Hello, I'm</p>
          <h1 className={styles.name}>YOUR NAME</h1>
          <p className={styles.tagline}>デザイン × 開発で、<br />あなたのビジョンを形にします。</p>
        </div>
      </div>

      {/* 右パネル */}
      <div
        className={`${styles.panel} ${styles.right}`}
        style={{
          clipPath: `polygon(calc(${pos}% + ${DIAG}px) 0, 100% 0, 100% 100%, calc(${pos}% - ${DIAG}px) 100%)`
        }}
      >
        <div className={styles.imageWrap}>
          <Image src="/images/hero_right.png" alt="hero right" fill style={{ objectFit: 'contain', objectPosition: 'center' }} priority />
        </div>
        <div className={styles.rightText}>
          <p className={styles.eyebrow}>FREELANCE</p>
          <h1 className={styles.name}>YOUR NAME</h1>
          <p className={styles.tagline}>想像を、<br />現実にします。</p>
        </div>
      </div>

      {/* 斜めの仕切りバー */}
      <div
        className={styles.divider}
        style={{ left: `${pos}%` }}
        onMouseDown={() => { dragging.current = true }}
        onTouchStart={() => { dragging.current = true }}
      />

    </div>
  )
}
