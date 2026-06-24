'use client'

import styles from '../styles/PodcastSection.module.css'
import ScrollReveal from './ScrollReveal'

/* プラットフォームアイコン（SVG） */
function SpotifyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#1DB954"/>
      <path d="M17.25 16.2c-.2.33-.63.44-.96.23-2.63-1.61-5.94-1.97-9.84-1.08-.38.09-.76-.14-.85-.52-.09-.38.14-.76.52-.85 4.27-.97 7.93-.55 10.89 1.26.33.2.44.63.24.96zm1.16-2.58c-.25.4-.77.53-1.17.28-3.01-1.85-7.59-2.39-11.15-1.3-.46.14-.95-.12-1.09-.58-.14-.46.12-.95.58-1.09 4.06-1.23 9.1-.64 12.55 1.52.4.25.53.78.28 1.17zm.1-2.68C15.14 9.04 9.31 8.84 6.02 9.84c-.55.17-1.14-.14-1.31-.69-.17-.55.14-1.14.69-1.31 3.77-1.15 10.05-.93 14.01 1.54.5.3.66.94.36 1.44-.3.49-.94.65-1.44.35l-.07-.03z" fill="white"/>
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#8B3BE7"/>
      <path d="M12 4a8 8 0 100 16A8 8 0 0012 4zm0 3a2 2 0 110 4 2 2 0 010-4zm0 9.5c-2.5 0-4.71-1.28-6-3.22.03-2 4-3.08 6-3.08 1.99 0 5.97 1.08 6 3.08A7.16 7.16 0 0112 16.5z" fill="white"/>
    </svg>
  )
}

/* ↓ Podcastデータを差し替えてください */
const podcasts = [
  {
    id: 1,
    image: '/images/yuru.png',
    author: '出演者：やまと',
    title: 'ゆるっと人間探求',
    desc: '番組の概要・テーマをここに記載してください。どんな内容の番組なのかを説明する文章です。',
    platforms: ['spotify', 'apple'],
    link: '#',
  },
  {
    id: 2,
    image: '/images/kigyo.png',
    author: '出演者：やまと',
    title: '起業の失敗学',
    desc: '番組の概要・テーマをここに記載してください。どんな内容の番組なのかを説明する文章です。',
    platforms: ['spotify'],
    link: '#',
  },
  {
    id: 3,
    image: '/images/classic.png',
    author: '出演者：やまと',
    title: 'クラシックる？',
    desc: '番組の概要・テーマをここに記載してください。どんな内容の番組なのかを説明する文章です。',
    platforms: ['spotify', 'apple'],
    link: '#',
    comingSoon: false,
  },
  {
    id: 4,
    image: '/images/classic.png',
    author: '出演者：やまと',
    title: 'クラシックる？',
    desc: '番組の概要・テーマをここに記載してください。どんな内容の番組なのかを説明する文章です。',
    platforms: ['spotify', 'apple'],
    link: '#',
    comingSoon: true,
  },
  {
    id: 5,
    image: '/images/classic.png',
    author: '出演者：やまと',
    title: 'クラシックる？',
    desc: '番組の概要・テーマをここに記載してください。どんな内容の番組なのかを説明する文章です。',
    platforms: ['spotify', 'apple'],
    link: '#',
    comingSoon: true,
  },
]

export default function PodcastSection() {
  return (
    <section id="podcast" className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal>
          <div className={styles.titleBlock}>
            <p className={styles.labelEn}>Podcast</p>
            <h2 className={styles.heading}>Podcastレーベル</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className={styles.grid}>
            {podcasts.map((p) => (
              <a
                key={p.id}
                href={p.comingSoon ? undefined : p.link}
                target={p.comingSoon ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`${styles.card} ${p.comingSoon ? styles.cardComingSoon : ''}`}
              >
                {/* サムネイル 1:1 */}
                <div className={styles.thumb}>
                  {p.image
                    ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <span className={styles.thumbPlaceholder}>🎙️</span>
                  }
                  {p.comingSoon && (
                    <div className={styles.comingSoonOverlay}>
                      <span style={{ fontSize: '24px' }}>🔒</span>
                      <span className={styles.comingSoonLabel}>Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* テキストエリア */}
                <div className={styles.cardBody}>
                  {p.author && <p className={styles.author}>{p.author}</p>}
                  <h3 className={styles.title}>{p.title}</h3>
                  {p.platforms && p.platforms.length > 0 && (
                    <div className={styles.platforms}>
                      {p.platforms.includes('spotify') && <SpotifyIcon />}
                      {p.platforms.includes('apple')   && <AppleIcon />}
                    </div>
                  )}
                  <p className={styles.desc}>{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
