import styles from '../styles/ContactSection.module.css'

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleBlock}>
          <p className={styles.labelEn}>Contact</p>
          <h2 className={styles.heading}>お問い合わせ</h2>
          <p className={styles.sub}>お仕事のご依頼・ご相談はお気軽にどうぞ。</p>
        </div>
        <div className={styles.card}>
          {/* お問い合わせフォーム */}
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">お名前</label>
              <input id="name" type="text" className={styles.input} placeholder="山田 太郎" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">メールアドレス</label>
              <input id="email" type="email" className={styles.input} placeholder="hello@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">メッセージ</label>
              <textarea id="message" className={styles.textarea} rows={5} placeholder="ご依頼の内容をお書きください。" />
            </div>
            <button type="submit" className={styles.btn}>送信する</button>
          </form>
        </div>
      </div>
    </section>
  )
}
