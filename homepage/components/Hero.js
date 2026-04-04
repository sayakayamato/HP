import styles from '../styles/Hero.module.css'
import Image from 'next/image'

// 4点星SVG
function Sparkle({ size = 16, color = '#ffffff', style = {}, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={style} className={className} aria-hidden>
      <path d="M10 0 L11.8 8.2 L20 10 L11.8 11.8 L10 20 L8.2 11.8 L0 10 L8.2 8.2 Z" fill={color} />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero_image.png"
        alt="hero"
        fill
        className={`${styles.heroImg} ${styles.heroImgFade}`}
        priority
      />

      {/* キラキラ装飾 */}
      <Sparkle size={28} className={styles.sparkle} style={{ position:'absolute', top:'12%',  left:'7%',  zIndex:1, '--sparkle-dur':'3.0s', '--sparkle-delay':'0s'   }} />
      <Sparkle size={18} className={styles.sparkle} style={{ position:'absolute', top:'20%',  left:'18%', zIndex:1, '--sparkle-dur':'2.4s', '--sparkle-delay':'0.5s' }} />
      <Sparkle size={22} className={styles.sparkle} style={{ position:'absolute', top:'8%',   left:'38%', zIndex:1, '--sparkle-dur':'2.8s', '--sparkle-delay':'1.0s' }} />
      <Sparkle size={14} className={styles.sparkle} style={{ position:'absolute', top:'32%',  left:'55%', zIndex:1, '--sparkle-dur':'3.2s', '--sparkle-delay':'0.3s' }} />
      <Sparkle size={26} className={styles.sparkle} style={{ position:'absolute', top:'10%',  right:'12%',zIndex:1, '--sparkle-dur':'2.6s', '--sparkle-delay':'1.5s' }} />
      <Sparkle size={16} className={styles.sparkle} style={{ position:'absolute', top:'35%',  right:'8%', zIndex:1, '--sparkle-dur':'3.4s', '--sparkle-delay':'0.8s' }} />
      <Sparkle size={20} className={styles.sparkle} style={{ position:'absolute', top:'55%',  left:'9%',  zIndex:1, '--sparkle-dur':'2.9s', '--sparkle-delay':'0.2s' }} />
      <Sparkle size={13} className={styles.sparkle} style={{ position:'absolute', top:'62%',  right:'20%',zIndex:1, '--sparkle-dur':'3.1s', '--sparkle-delay':'1.2s' }} />
      <Sparkle size={22} className={styles.sparkle} style={{ position:'absolute', bottom:'22%',left:'26%',zIndex:1, '--sparkle-dur':'2.7s', '--sparkle-delay':'0.7s' }} />
      <Sparkle size={15} className={styles.sparkle} style={{ position:'absolute', bottom:'26%',right:'16%',zIndex:1,'--sparkle-dur':'3.3s', '--sparkle-delay':'1.8s' }} />

      <div className={styles.heroContent}>
        <p className={`${styles.eyebrow} ${styles.heroEnter} ${styles.heroEnterD1}`}>Hello, I'm</p>
        <div className={`${styles.titleImg} ${styles.heroEnter} ${styles.heroEnterD2}`}>
          <Image src="/images/heroTitle2.png" alt="SAYAKA YAMATO" width={500} height={200} style={{ width: '100%', height: 'auto' }} priority />
        </div>

        <p className={`${styles.scrollHint} ${styles.heroEnter} ${styles.heroEnterD3}`}>▼ scroll</p>
      </div>

    </section>
  )
}
