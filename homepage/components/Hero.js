import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const stickers = [
  { id: 1, src: '/images/cloud.svg',    cls: 'stickerTopLeft',      rotate: -20, size:  64, pos: { top: '12%',    left:  '6%'  } },
  { id: 2, src: '/images/hurasuco.png', cls: 'stickerTopLeft',      rotate:  10, size: 150, pos: { top:  '8%',    left: '38%'  } },
  { id: 3, src: '/images/light.png',    cls: 'stickerTopLeft',      rotate:  15, size: 120, pos: { top: '14%',    right: '7%'  } },
  { id: 4, src: '/images/earth.png',    cls: 'stickerTopLeft',      rotate: -12, size: 100, pos: { top: '42%',    left:  '4%'  } },
  { id: 5, src: '/images/cloud.svg',    cls: 'stickerTopLeft',      rotate:  18, size:  52, pos: { top: '40%',    right: '5%'  } },
  { id: 6, src: '/images/cloud.svg',    cls: 'stickerTopLeft',      rotate: -25, size:  76, pos: { bottom: '14%', left:  '8%'  } },
  { id: 7, src: '/images/cloud.svg',    cls: 'stickerTopLeft',      rotate:   8, size:  60, pos: { bottom:  '8%', left: '44%'  } },
  { id: 8, src: '/images/cloud.svg',    cls: 'stickerTopLeft',      rotate: -10, size: 210, pos: { bottom: '16%', right: '9%'  } },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* <div className={`${styles.floatDot} ${styles.dot1}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot2}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot3}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot4}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot5}`} aria-hidden="true" /> */}

      {/* {stickers.map((s) => (
        <div
          key={s.id}
          className={`${styles.sticker} ${styles[s.cls]}`}
          style={{ '--rotate': `${s.rotate}deg`, '--size': `${s.size}px`, ...s.pos }}
          aria-hidden="true"
        >
          <Image src={s.src} alt="" width={s.size} height={s.size} />
        </div>
      ))} */}

      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>Hello, I'm</p>

        {/* 分割円の顔写真 */}
        <div className={styles.heroImgWrap}>
          <div className={styles.imgTop} />
          <div className={styles.imgBottom} />
          
        </div>

        {/* ↓ 自分の名前に変更してください */}
        <h1 className={styles.logoText}>YOUR NAME</h1>
        <p className={styles.tagline}>
          デザイン × 開発で、あなたのビジョンを形にします。
        </p>
        <p className={styles.scrollHint}>▼ scroll</p>
      </div>
    </section>
  )
}
