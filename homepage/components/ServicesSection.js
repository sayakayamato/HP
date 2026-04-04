import styles from '../styles/ServicesSection.module.css'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    id: 1,
    icon: null,
    title: 'クリエイティブ・マーケティング',
    items: [
      '企画・ディレクション・デリバリー（XRが強いです）',
      'バナー作成',
      '動画編集',
      'Webページ制作',
      'ライティング',
      'イベント対応',
      // 'グッズ制作(レジン)',
    ],
  },
  {
    id: 2,
    icon: null,
    title: '人事領域',
    items: [
      '採用アシスタント',
    ],
  },
  {
    id: 3,
    icon: null,
    title: '被写体・リポーター',
    items: [
      '写真・動画の被写体',
      'インタビュアー',
    ],
  },
]

const skills = [
  'HTML / CSS', 'JavaScript', 'React / Next.js',
  'Unity', 'C#', 'Figma',
  'Illustrator', 'Photoshop', 'Premiere Pro',
]

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>

        <ScrollReveal>
          <div className={styles.titleBlock}>
            <p className={styles.labelEn}>Services</p>
            <h2 className={styles.heading}>提供できること</h2>
          </div>
        </ScrollReveal>

        {/* サービスカード */}
        <ScrollReveal delay={120}>
          <div className={styles.grid}>
            {services.map((s) => (
              <div key={s.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{s.icon}</span>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                </div>
                <ul className={styles.list}>
                  {s.items.map((item, i) => (
                    <li key={i} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* スキルタグ */}
        <ScrollReveal delay={200}>
          <div className={styles.skillBlock}>
            <p className={styles.skillLabel}>Skills</p>
            <div className={styles.tagList}>
              {skills.map((skill) => (
                <span key={skill} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
