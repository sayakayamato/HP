import styles from '../styles/PersonalSection.module.css'
import Image from 'next/image'

/* ↓ SNSのURLを書き換えてください */
const snsLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://x.com/yamato6439?s=21&t=b4H-0WDMj8MtvGTPnXtTGw',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/yamato_382382?igsh=OTFsN3J2bmd4aGZ0&utm_source=qr',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'note',
    href: 'https://note.com/sayaka_yamato',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
  },
  
]

export default function PersonalSection() {
  return (
    <section id="personal" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleBlock}>
          <p className={styles.labelEn}>Personal</p>
          <h2 className={styles.heading}>Who is yamato?</h2>
        </div>
        <div className={styles.card}>
          {/* アバター画像エリア */}
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              <Image src="/images/yamatoImage2.png" alt="avatar" fill style={{ objectFit: 'cover' }} />
              <span className={styles.avatarFallback}></span>
            </div>
          </div>
          {/* テキスト */}
          <div className={styles.content}>
            <div className={styles.nameRow}>
              <h3 className={styles.name}>大和 咲弥花</h3>
              <span className={styles.nameRoman}>Sayaka Yamato</span>
            </div>
            <p className={styles.role}>Freelance Project Partner</p>
            <p className={styles.bio}>
              {/* ↓ 自己紹介を書いてください */}
              東京在住のフリーランスです。
              人間の内面理解に興味があり、<br />精神性×テクノロジーとしてXR企業に務め、その後組織における人間理解として人事職に携わりました。
              <br />
              新しいものも受け入れつつ、変わらない本質を探求する、そんなコンテンツ作りがしたいと思っています！
            </p>
            <ul className={styles.skillList}>
              <li className={styles.skill}>#お散歩</li>
              <li className={styles.skill}>#お酒</li>
              <li className={styles.skill}>#コーヒー</li>
              <li className={styles.skill}>#スイーツ</li>
              <li className={styles.skill}>#美術館・アート</li>
              <li className={styles.skill}>#クラシック・ジャズ</li>
            </ul>
            {/* SNSアイコン */}
            <div className={styles.snsRow}>
              {snsLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.snsIcon}
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
