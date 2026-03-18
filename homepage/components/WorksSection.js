import styles from '../styles/WorksSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

/* ↓ 実績データを差し替えてください */
const works = [
  {
    id: 1,
    image: null,
    category: 'Web Design',
    title: 'プロジェクト名 A',
    desc:  'クライアントのブランドを活かしたWebサイトのデザイン・開発。',
    href:  '#',
  },
  {
    id: 2,
    image: null,
    category: 'Development',
    title: 'プロジェクト名 B',
    desc:  'Next.jsを使ったECサイトのフロントエンド実装。',
    href:  '#',
  },
  {
    id: 3,
    image: null,
    category: 'Branding',
    title: 'プロジェクト名 C',
    desc:  'ロゴデザインからブランドガイドライン作成まで一貫して担当。',
    href:  '#',
  },
]

export default function WorksSection() {
  return (
    <section id="works" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleBlock}>
          <p className={styles.labelEn}>Works</p>
          <h2 className={styles.heading}>制作実績</h2>
        </div>
        <div className={styles.grid}>
          {works.map((w) => (
            <Link key={w.id} href={w.href} className={styles.card}>
              {/* サムネイル */}
              <div className={styles.thumb}>
                {w.image
                  ? <Image src={w.image} alt={w.title} fill style={{ objectFit: 'cover' }} />
                  : <span className={styles.thumbPlaceholder}>IMAGE</span>
                }
                <span className={styles.category}>{w.category}</span>
              </div>
              {/* テキスト */}
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{w.title}</h3>
                <p className={styles.desc}>{w.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
