'use client'

import { useState } from 'react'
import styles from '../styles/CreationsSection.module.css'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

/* ===== プラットフォームアイコン ===== */
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

/* ===== Podcastデータ ===== */
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
  },
  {
    id: 4,
    image: '',
    author: '',
    title: 'Coming Soon',
    desc: '',
    platforms: [],
    link: '#',
    comingSoon: true,
  },
  {
    id: 5,
    image: '',
    author: '',
    title: 'Coming Soon',
    desc: '',
    platforms: [],
    link: '#',
    comingSoon: true,
  },
]

/* ===== 自主企画データ ===== */
const works = [
  {
    id: 1,
    image: '/images/proffleImage.png',
    category: '自主Product',
    title: 'Profful',
    desc: '行動から自分を理解するプロダクト企画',
    detail: '自分のことに気づくきっかけと行動変容を促すためのアプリケーションです。',
    link: 'https://apps.apple.com/jp/app/profful-%E8%87%AA%E5%B7%B1%E5%88%86%E6%9E%90%E3%81%A7%E8%82%B2%E3%81%A4%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB/id6757071720',
  },
]

export default function CreationsSection() {
  const [selected, setSelected] = useState(null)
  const closeModal = () => setSelected(null)

  return (
    <section id="creations" className={styles.section}>
      <div className={styles.inner}>

        {/* ===== セクションタイトル ===== */}
        <ScrollReveal>
          <div className={styles.titleBlock}>
            <p className={styles.labelEn}>Creations</p>
            <h2 className={styles.heading}>クリエイション</h2>
          </div>
        </ScrollReveal>

        {/* ===== Podcast サブセクション ===== */}
        <ScrollReveal delay={80}>
          <div className={styles.subBlock}>
            <p className={styles.subLabel}>Podcast レーベル</p>
            <div className={styles.podcastGrid}>
              {podcasts.map((p) => (
                <a
                  key={p.id}
                  href={p.comingSoon ? undefined : p.link}
                  target={p.comingSoon ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`${styles.podcastCard} ${p.comingSoon ? styles.cardComingSoon : ''}`}
                >
                  <div className={styles.podThumb}>
                    {p.image
                      ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <span className={styles.thumbPlaceholder}>🎙️</span>
                    }
                    {p.comingSoon && (
                      <div className={styles.comingSoonOverlay}>
                        <span>🔒</span>
                        <span className={styles.comingSoonLabel}>Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.podBody}>
                    {p.author && <p className={styles.author}>{p.author}</p>}
                    <h3 className={styles.podTitle}>{p.title}</h3>
                    {p.platforms && (
                      <div className={styles.platforms}>
                        {p.platforms.includes('spotify') && <SpotifyIcon />}
                        {p.platforms.includes('apple')   && <AppleIcon />}
                      </div>
                    )}
                    <p className={styles.podDesc}>{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ===== 自主企画 サブセクション ===== */}
        <ScrollReveal delay={120}>
          <div className={styles.subBlock}>
            <p className={styles.subLabel}>プロダクト</p>
            <div className={styles.worksGrid}>
              {works.map((w) => (
                <div
                  key={w.id}
                  className={`${styles.worksCard} ${w.comingSoon ? styles.cardComingSoon : ''}`}
                  onClick={() => !w.comingSoon && setSelected(w)}
                >
                  {w.comingSoon && (
                    <div className={styles.comingSoonOverlay}>
                      <span>🔒</span>
                      <span className={styles.comingSoonLabel}>Coming Soon</span>
                    </div>
                  )}
                  <div className={styles.worksThumb}>
                    {w.image
                      ? <img src={w.image} alt={w.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <span className={styles.thumbPlaceholder}>IMAGE</span>
                    }
                    {w.category && <span className={styles.category}>{w.category}</span>}
                  </div>
                  <div className={styles.worksBody}>
                    <h3 className={styles.worksTitle}>{w.title}</h3>
                    <p className={styles.worksDesc}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* ===== モーダル ===== */}
      {selected && (
        <div className={styles.overlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>✕</button>
            <div className={styles.modalThumb}>
              {selected.image
                ? <Image src={selected.image} alt={selected.title} fill style={{ objectFit: 'cover' }} />
                : <span className={styles.thumbPlaceholder}>IMAGE</span>
              }
            </div>
            <div className={styles.modalBody}>
              {selected.category && <span className={styles.modalCategory}>{selected.category}</span>}
              <h2 className={styles.modalTitle}>{selected.title}</h2>
              <p className={styles.modalDesc}>{selected.desc}</p>
              {selected.detail && <div className={styles.modalDetail}>{selected.detail}</div>}
              {selected.link && selected.link !== '#' && (
                <a href={selected.link} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                  詳細を見る →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
