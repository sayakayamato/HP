import styles from '../styles/NewsSection.module.css'
import sectionStyles from '../styles/Section.module.css'
import Link from 'next/link'

/* ダミーニュースデータ（実際はAPIやCMSから取得） */
const newsList = [
  { id: 1, date: '2026.03.01', tag: 'NEWS', title: '新キャラクターのグッズ発売のお知らせ' },
  { id: 2, date: '2026.02.15', tag: 'COLLAB', title: '〇〇カフェとのコラボレーション決定！' },
  { id: 3, date: '2026.01.20', tag: 'NEWS', title: '2026年春夏コレクション発売開始' },
]

export default function NewsSection() {
  return (
    <section id="news" className={`${sectionStyles.section} ${styles.newsSection}`}>

      <div className={styles.titleArea}>
        <p className={sectionStyles.labelJa}>最新情報</p>
        <h2 className={sectionStyles.heading}>News</h2>
      </div>

      <ul className={styles.newsList}>
        {newsList.map((item) => (
          <li key={item.id} className={styles.newsItem}>
            <Link href={`/news/${item.id}`} className={styles.newsLink}>
              <span className={styles.date}>{item.date}</span>
              <span className={styles.tag}>{item.tag}</span>
              <span className={styles.title}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.btnWrap}>
        <Link href="/news" className={sectionStyles.btn}>View more</Link>
      </div>

    </section>
  )
}
