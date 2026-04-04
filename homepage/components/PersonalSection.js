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
  // {
  //   name: 'GitHub',
  //   href: 'https://github.com/',
  //   icon: (
  //     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  //       <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  //     </svg>
  //   ),
  // },
]

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
              <Image src="/images/IMG_2284_2.jpg" alt="avatar" fill style={{ objectFit: 'cover' }} />
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
              人間の内面理解に興味があり、精神性×テクノロジーとしてXR企業に務め、その後組織における人間理解として人事職に携わりました。
              <br />
              今は個人で、人を内面からサポートしたり、それぞれの価値観やこだわりを大切にできるような活動がしたいと思っています。
              たまにジャズバーで働いています。
            </p>
            <ul className={styles.skillList}>
              <li className={styles.skill}>#お散歩</li>
              <li className={styles.skill}>#お酒</li>
              <li className={styles.skill}>#コーヒー</li>
              <li className={styles.skill}>#スイーツ</li>
              <li className={styles.skill}>#美術館・アート</li>
              <li className={styles.skill}>#クラシック・ジャズ</li>
              <li className={styles.skill}>#占い</li>
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
