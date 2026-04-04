'use client'

import { useState } from 'react'
import styles from '../styles/ClientWorksSection.module.css'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

/* ↓ 業務委託・請け負った仕事のデータを追加してください */
const works = [
  {
    id: 1,
    image: '/images/marketing_img.jpg',
    category: 'マーケティング',
    title: 'マーケティング支援(継続中)',
    desc: 'バナー制作やメールマガジン、プレスリリース等ライティング業務',
    detail: 'HR系企業のマーケティング領域を継続して担当しています。',
    link: '#',
  },
  {
    id: 2,
    image: '/images/VR1.jpg',
    category: 'クリエイティブ',
    title: 'XRプロジェクト参加',
    desc: 'コンテンツ・システムテスト、運用提案等',
    detail: 'XRプロジェクトのディレクターとして務めていた経験から、コンテンツやシステムのテストや、運用提案などを担当しました。',
    link: '#',
  },
  
]

export default function ClientWorksSection() {
  const [selected, setSelected] = useState(null)

  const openModal = (work) => setSelected(work)
  const closeModal = () => setSelected(null)

  return (
    <section id="client-works" className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal>
          <div className={styles.titleBlock}>
            <p className={styles.labelEn}>Works</p>
            <h2 className={styles.heading}>実績</h2>
            <p className={styles.sub}>業務委託・請け負ったお仕事</p>
          </div>
        </ScrollReveal>

        {works.length === 0 ? (
          <p className={styles.empty}>準備中です。</p>
        ) : (
          <ScrollReveal delay={120}>
          <div className={styles.grid}>
            {works.map((w) => (
              <div key={w.id} className={styles.card} onClick={() => openModal(w)}>
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
        )}
      </div>

      {/* モーダル */}
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
