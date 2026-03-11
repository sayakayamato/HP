import styles from '../styles/Section.module.css'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className={`${styles.section} ${styles.bgDark}`}>
      <div className={styles.inner}>
        <p className={styles.labelJa}>お問い合わせ</p>
        <h2 className={styles.heading}>Contact</h2>
        <p className={styles.body}>
          コラボレーションのご相談・メディア取材・その他のお問い合わせはこちらからお気軽にどうぞ。
        </p>
        <Link href="/contact" className={styles.btn}>View more</Link>
      </div>
    </section>
  )
}
