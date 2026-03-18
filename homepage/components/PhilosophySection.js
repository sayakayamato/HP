import styles from '../styles/PhilosophySection.module.css'

export default function PhilosophySection() {
  return (
    <section id="philosophy" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleBlock}>
          <p className={styles.labelEn}>Philosophy</p>
          <h2 className={styles.heading}>考え方・ポリシー</h2>
        </div>
        <div className={styles.card}>
          {/* ↓ 自分の考え方・ポリシーを書いてください */}
          <p className={styles.body}>
            クライアントの課題を深く理解し、デザインと技術の両面から最適な解決策を提案することを大切にしています。
            単なる制作にとどまらず、プロジェクトの目的・ユーザーの体験・ビジネスの成果まで考え抜いたアウトプットを届けます。
          </p>
          <ul className={styles.tagList}>
            <li className={styles.tag}>UI / UX デザイン</li>
            <li className={styles.tag}>フロントエンド開発</li>
            <li className={styles.tag}>ブランディング</li>
            <li className={styles.tag}>丁寧なコミュニケーション</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
