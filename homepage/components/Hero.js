import styles from '../styles/Hero.module.css'
import Image from 'next/image'

/*
  ★ 散らばるステッカー素材の差し替え方 ★
  1. public/images/stickers/ に背景透過PNG（例: sticker-star.png）を置く
  2. 各 sticker の src を "/images/stickers/sticker-star.png" に変更するだけ！
  emoji プレースホルダーは差し替えるまでの仮表示です。
*/
// pos: 位置をインラインで指定（cls が同じでも分散して配置できる）
const stickers = [
  { id: 1, src: '/images/cloud.svg', cls: 'stickerTopLeft',      rotate: -20, size: 320, pos: { top: '12%',    left:  '6%'  } },
  { id: 2, src: '/images/hurasuco.png', cls: 'stickerTopLeft',      rotate:  10, size: 150, pos: { top:  '8%',    left: '38%'  } },
  { id: 3, src: '/images/light.png', cls: 'stickerTopLeft',      rotate:  15, size: 120, pos: { top: '14%',    right: '7%'  } },
  { id: 4, src: '/images/earth.png', cls: 'stickerTopLeft',      rotate: -12, size: 100, pos: { top: '42%',    left:  '4%'  } },
  { id: 5, src: '/images/cloud.svg', cls: 'stickerTopLeft',      rotate:  18, size: 52, pos: { top: '40%',    right: '5%'  } },
  { id: 6, src: '/images/cloud.svg', cls: 'stickerTopLeft',      rotate: -25, size: 76, pos: { bottom: '14%', left:  '8%'  } },
  { id: 7, src: '/images/cloud.svg', cls: 'stickerTopLeft',      rotate:   8, size: 60, pos: { bottom:  '8%', left: '44%'  } },
  { id: 8, src: '/images/cloud.svg', cls: 'stickerTopLeft',      rotate: -10, size: 210, pos: { bottom: '16%', right: '9%'  } },
]

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* 浮遊カラードット（背景） */}
      <div className={`${styles.floatDot} ${styles.dot1}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot2}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot3}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot4}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot5}`} aria-hidden="true" />

      {/* ===== 散らばるステッカー ===== */}
      {stickers.map((s) => (
        <div
          key={s.id}
          className={`${styles.sticker} ${styles[s.cls]}`}
          style={{ '--rotate': `${s.rotate}deg`, '--size': `${s.size}px`, ...s.pos }}
          aria-hidden="true"
        >
          
            {/* ▼ 実際の画像に差し替えるときはここを↓に変える */}
            <Image src={s.src} alt="" width={s.size} height={s.size} />
         
          {/* <span className={styles.stickerEmoji}>{s.content}</span> */}
        </div>
      ))}

      {/* ===== メインコンテンツ ===== */}
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>We are</p>
        <h1 className={styles.logoText}>ゆるにたんらぼ</h1>
        <p className={styles.subtitle}>ゆるにたんらぼについて</p>
      </div>

    </section>
  )
}
