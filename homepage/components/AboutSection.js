import styles from '../styles/Section.module.css'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.section} ${styles.bgDark}`}>
      <div className={styles.inner}>
        <p className={styles.labelJa}>私たちについて</p>
        <h2 className={styles.heading}>About</h2>
        <p >
          conconは、キャラクタービジネスを中心にコンテンツ開発・ライセンス事業・コラボレーション企画を行う会社です。
          かわいいキャラクターを通して、人々の生活に笑顔を届けます。
        </p>
        <Link href="/about" className={styles.btn}>View more</Link>
      </div>
    </section>
  )
}
