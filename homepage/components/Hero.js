'use client'

import styles from '../styles/Hero.module.css'
import Image from 'next/image'

// 4点星SVG
function Sparkle({ size = 16, color = '#ffffff', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={style} aria-hidden>
      <path d="M10 0 L11.8 8.2 L20 10 L11.8 11.8 L10 20 L8.2 11.8 L0 10 L8.2 8.2 Z" fill={color} />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* キラキラ装飾 */}
      <Sparkle size={28} style={{ position:'absolute', top:'12%',  left:'7%',  zIndex:4 }} color="rgba(255,255,255,0.6)" />
      <Sparkle size={18} style={{ position:'absolute', top:'20%',  left:'18%', zIndex:4 }} color="rgba(255,255,255,0.5)" />
      <Sparkle size={22} style={{ position:'absolute', top:'8%',   left:'38%', zIndex:4 }} color="rgba(255,255,255,0.4)" />
      <Sparkle size={14} style={{ position:'absolute', top:'32%',  left:'55%', zIndex:4 }} color="rgba(255,255,255,0.4)" />
      <Sparkle size={20} style={{ position:'absolute', top:'55%',  left:'9%',  zIndex:4 }} color="rgba(255,255,255,0.4)" />
      <Sparkle size={13} style={{ position:'absolute', top:'62%',  right:'20%',zIndex:4 }} color="rgba(255,255,255,0.4)" />

　　　　{/* yamato_to 画像 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/yamatologo2025.png"
        alt=""
        className={`${styles.yamatoImg} ${styles.heroEnter} ${styles.heroEnterD3}`}
      />
      
      {/* テキスト＋浮遊オブジェクト横並び */}
      <div className={styles.heroRow}>
        <p className={`${styles.heroTextLeft} ${styles.heroEnter} ${styles.heroEnterD1}`}>
          変わり続ける時代に、
        </p>

        <div className={styles.floatingWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sunadokei_big.png"
            alt=""
            className={styles.floatingImg}
          />
        </div>

        <p className={`${styles.heroTextRight} ${styles.heroEnter} ${styles.heroEnterD2}`}>
          変わらない問いを。
        </p>
      </div>

      {/* スクロールヒント */}
      <p className={`${styles.scrollHint} ${styles.heroEnter} ${styles.heroEnterD2}`}>▼ scroll</p>

    </section>
  )
}
