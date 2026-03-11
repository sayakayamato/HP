import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* 背景：有機的ブロブパターン（青×ピンク×白） */}
      <div className={styles.blobBg} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blobBlue1}`} />
        <div className={`${styles.blob} ${styles.blobBlue2}`} />
        <div className={`${styles.blob} ${styles.blobBlue3}`} />
        <div className={`${styles.blob} ${styles.blobPink1}`} />
        <div className={`${styles.blob} ${styles.blobPink2}`} />
        <div className={`${styles.blob} ${styles.blobPink3}`} />
      </div>

      {/* CONCONロゴ＋キャラクターエリア */}
      <div className={styles.heroContent}>
        <h1 className={styles.logoText}>CONCON</h1>

        {/* キャラクターイラスト（実際は画像に差し替え） */}
        <div className={styles.characterArea}>
          <div className={styles.characterPlaceholder}>
            {/* <Image src="/images/character.png" alt="CONCONキャラクター" width={200} height={200} /> */}
            <span className={styles.charEmoji}>🌀</span>
          </div>
        </div>
      </div>

    </section>
  )
}
