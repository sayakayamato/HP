import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* 浮遊カラードット */}
      <div className={`${styles.floatDot} ${styles.dot1}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot2}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot3}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot4}`} aria-hidden="true" />
      <div className={`${styles.floatDot} ${styles.dot5}`} aria-hidden="true" />

      {/* コンテンツ */}
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>We are</p>
        <h1 className={styles.logoText}>ゆるにたん</h1>
        <p className={styles.subtitle}>コンコン株式会社について</p>

        {/* キャラクター（画像は public/images/ に配置して差し替え） */}
        <div className={styles.characterArea}>
          <div className={styles.characterPlaceholder}>
            <span className={styles.charEmoji}>🌀</span>
          </div>
        </div>
      </div>

    </section>
  )
}
