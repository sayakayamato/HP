import styles from '../styles/PersonalSection.module.css'
import Image from 'next/image'

export default function PersonalSection() {
  return (
    <section id="personal" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleBlock}>
          <p className={styles.labelEn}>Personal</p>
          <h2 className={styles.heading}>プロフィール</h2>
        </div>
        <div className={styles.card}>
          {/* アバター画像エリア */}
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              {/* <Image src="/images/avatar.jpg" alt="avatar" fill style={{ objectFit: 'cover' }} /> */}
              <span className={styles.avatarFallback}>😊</span>
            </div>
          </div>
          {/* テキスト */}
          <div className={styles.content}>
            <h3 className={styles.name}>YOUR NAME</h3>
            <p className={styles.role}>Freelance Designer / Developer</p>
            <p className={styles.bio}>
              {/* ↓ 自己紹介を書いてください */}
              東京在住のフリーランスデザイナー・エンジニアです。
              UIデザインからフロントエンド開発まで一人で担当できます。
              好きなものはコーヒー、デザイン、旅行。
            </p>
            <ul className={styles.skillList}>
              <li className={styles.skill}>Figma</li>
              <li className={styles.skill}>React / Next.js</li>
              <li className={styles.skill}>TypeScript</li>
              <li className={styles.skill}>CSS / Tailwind</li>
              <li className={styles.skill}>Illustrator</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
