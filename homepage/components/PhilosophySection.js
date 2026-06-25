'use client'
import styles from '../styles/PhilosophySection.module.css'
import ScrollReveal from './ScrollReveal'

// 4点星SVG
function Sparkle({ size = 16, color = '#ffffff', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={style} aria-hidden>
      <path d="M10 0 L11.8 8.2 L20 10 L11.8 11.8 L10 20 L8.2 11.8 L0 10 L8.2 8.2 Z" fill={color} />
    </svg>
  )
}

export default function PhilosophySection() {
  return (
    <section id="philosophy" className={styles.section}>

      {/* キラキラ装飾（左側） */}
      <Sparkle size={22} style={{ position:'absolute', top:'8%',   left:'45%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.7)" />
      <Sparkle size={14} style={{ position:'absolute', top:'18%',  left:'72%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.5)" />
      <Sparkle size={18} style={{ position:'absolute', top:'40%',  left:'30%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.6)" />
      <Sparkle size={12} style={{ position:'absolute', top:'60%',  left:'60%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.4)" />
      <Sparkle size={20} style={{ position:'absolute', top:'75%',  left:'80%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.5)" />
      <Sparkle size={16} style={{ position:'absolute', top:'85%',  left:'15%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.6)" />
      <Sparkle size={10} style={{ position:'absolute', top:'25%',  left:'88%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.4)" />
      {/* キラキラ装飾（右側） */}
      <Sparkle size={19} style={{ position:'absolute', top:'10%',  right:'6%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.6)" />
      <Sparkle size={13} style={{ position:'absolute', top:'38%',  right:'4%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.4)" />
      <Sparkle size={16} style={{ position:'absolute', top:'55%',  right:'12%',zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.5)" />
      <Sparkle size={11} style={{ position:'absolute', top:'80%',  right:'7%', zIndex:2, opacity:0.5 }} color="rgba(255,255,255,0.4)" />

      {/* デコレーション画像 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hoshi.png"  alt="" className={styles.hoshi1} aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hoshi3.png" alt="" className={styles.hoshi2} aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hoshi4.png" alt="" className={styles.hoshi3} aria-hidden="true" />

      <div className={styles.inner}>
        <ScrollReveal>
          <div className={styles.titleBlock}>
            <p className={styles.labelEn}>Philosophy</p>
            <h2 className={styles.heading}>考え方・哲学</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div>
            <p className={styles.body}>
              変わり続ける世界のなかで、<br />
              私たちは変わらないものに目を向けます。<br /><br />

              人の価値観や信念。<br />
              人生を形づくる物語。<br />
              人と人との関係性。<br />
              時代を超えて受け継がれる文化や美意識。<br /><br />

              私たちは対話と探求を通じて、<br />
              その奥にある本質に触れようとします。<br /><br />

              答えを決めつけるのではなく、<br />
              問い続けること。<br /><br />

              それが、私たちの探求であり価値提供です。<br />
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
