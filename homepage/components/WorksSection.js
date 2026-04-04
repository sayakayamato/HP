'use client'

import { useState } from 'react'
import styles from '../styles/WorksSection.module.css'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

/* ↓ 実績データを差し替えてください */
const works = [
  {
    id: 1,
    image: '/images/yurunitan.jpg',
    category: '自主Media',
    title: 'ゆるにたんらぼ',
    desc:  '性格、人間心理などの発信活動',
    detail: '自分や相手を知るきっかけになるような発信をしています。人間心理や性格分析、お悩み相談など。',
    link: 'https://www.tiktok.com/@yurunitan_lab?is_from_webapp=1&sender_device=pc',
  },
  {
    id: 2,
    image: '/images/proffleImage.png',
    category: '自主Product',
    title: 'Profful',
    desc:  '行動から自分を理解するプロダクト企画',
    detail: '自分のことに気づくきっかけと行動変容を促すためのアプリケーションです。',
    link: 'https://apps.apple.com/jp/app/profful-%E8%87%AA%E5%B7%B1%E5%88%86%E6%9E%90%E3%81%A7%E8%82%B2%E3%81%A4%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB/id6757071720',
  },
  {
    id: 3,
    image: '/images/teshigoto.png',
    category: '自主Media',
    title: '手しごとインタビュー',
    desc:  'リポーターとして、主にものづくり産業のインタビューをします。',
    detail: 'ゆるにたんの延長で、個人で商売を行う方・ものづくりを行う方を中心にインタビューを行い、価値観や美学を伝えるコンテンツを制作しています。',
    link: '#',
    comingSoon: true,
  },
  {
    id: 4,
    image: '/images/flower.png',
    category: 'クラフト',
    title: 'クラフトフラワーグッズ',
    desc:  '花を用いたアクセサリーや雑貨などを個人で制作しています。',
    detail: '',
    link: '#',
    comingSoon: true,
  },
]

export default function WorksSection() {
  const [selected, setSelected] = useState(null)

  const openModal = (work) => setSelected(work)
  const closeModal = () => setSelected(null)

  return (
    <section id="works" className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal>
          <div className={styles.titleBlock}>
            <p className={styles.labelEn}>Works</p>
            <h2 className={styles.heading}>自主企画</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
        <div className={styles.grid}>
          {works.map((w) => (
            <div
              key={w.id}
              className={`${styles.card} ${w.comingSoon ? styles.cardComingSoon : ''}`}
              onClick={() => !w.comingSoon && openModal(w)}
            >
              {/* Coming Soon オーバーレイ */}
              {w.comingSoon && (
                <div className={styles.comingSoonOverlay}>
                  <span style={{ fontSize: '28px' }}>🔒</span>
                  <span className={styles.comingSoonLabel}>Coming Soon</span>
                </div>
              )}
              <div className={styles.thumb}>
                {w.image
                  ? <img src={w.image} alt={w.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <span className={styles.thumbPlaceholder}>IMAGE</span>
                }
                {w.category && <span className={styles.category}>{w.category}</span>}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{w.title}</h3>
                <p className={styles.desc}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>

      {/* モーダル */}
      {selected && (
        <div className={styles.overlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>✕</button>

            {/* モーダル内サムネイル */}
            <div className={styles.modalThumb}>
              {selected.image
                ? <Image src={selected.image} alt={selected.title} fill style={{ objectFit: 'cover' }} />
                : <span className={styles.thumbPlaceholder}>IMAGE</span>
              }
            </div>

            {/* モーダル内テキスト */}
            <div className={styles.modalBody}>
              {selected.category && <span className={styles.modalCategory}>{selected.category}</span>}
              <h2 className={styles.modalTitle}>{selected.title}</h2>
              <p className={styles.modalDesc}>{selected.desc}</p>
              {selected.detail && (
                <div
                  className={styles.modalDetail}
                  dangerouslySetInnerHTML={{ __html: selected.detail }}
                />
              )}
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
