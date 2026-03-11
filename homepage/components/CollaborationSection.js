import styles from '../styles/Section.module.css'
import Link from 'next/link'

export default function CollaborationSection() {
  return (
    <section id="collaboration" className={`${styles.section} ${styles.bgPattern}`}>
      <div className={styles.inner}>
        <p className={styles.labelJa}>コラボ企画</p>
        <h2 className={styles.heading}>Collaboration</h2>
        <p className={styles.body}>
          コッポンのキャラと一緒に食事、コラボ商品、コラボカフェ、
          アパレル商品などのコラボレーション企画も行っています。
          お気軽にお問い合わせください。
        </p>
        <Link href="/collaboration" className={styles.btn}>View more</Link>
      </div>
    </section>
  )
}
