import styles from '../styles/ProductsSection.module.css'
import sectionStyles from '../styles/Section.module.css'
import Link from 'next/link'

/* ブランドデータ（実際の情報に差し替えてください） */
const brands = [
  {
    id: 'tokyo-lollipop',
    logo: '🍭',          // 実際は <Image src="/images/tl-logo.png" /> に差し替え
    name: 'TOKYO LOLLIPOP',
    description: 'レトロでキュートなキャラクターたちが大人のポップな世界を彩ります。グッズ展開やコラボレーションを積極的に行っています。',
    href: '/products/tokyo-lollipop',
  },
  {
    id: 'kaisha-daruma',
    logo: '🎎',
    name: 'カイシャダルマ',
    description: '会社・仕事・玉・社会人をテーマにした、ゆるくてリアルな共感系キャラクターです。オフィスグッズなどに展開中。',
    href: '/products/kaisha-daruma',
  },
  {
    id: 'coming-soon',
    logo: null,
    name: 'coming soon...',
    description: '',
    href: '#',
    isComingSoon: true,
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className={`${sectionStyles.section} ${styles.productsSection}`}>

      {/* セクションタイトル */}
      <div className={styles.titleArea}>
        <p className={sectionStyles.labelJa}>製品について</p>
        <h2 className={sectionStyles.heading}>Products</h2>
      </div>

      {/* ブランドカード一覧 */}
      <div className={styles.cardList}>
        {brands.map((brand) => (
          <div key={brand.id} className={`${styles.card} ${brand.isComingSoon ? styles.cardComingSoon : ''}`}>

            {/* ロゴエリア */}
            <div className={styles.logoArea}>
              {brand.isComingSoon ? (
                /* coming soonはシルエット風 */
                <>
                  <div className={styles.silhouette} />
                  <div className={styles.silhouette} />
                </>
              ) : (
                <span className={styles.logoEmoji}>{brand.logo}</span>
              )}
            </div>

            {/* テキスト */}
            <div className={styles.cardBody}>
              <h3 className={styles.brandName}>{brand.name}</h3>
              {brand.description && (
                <p className={styles.brandDesc}>{brand.description}</p>
              )}
            </div>

            {/* ボタン */}
            <Link href={brand.href} className={sectionStyles.btn}>
              View more
            </Link>

          </div>
        ))}
      </div>

    </section>
  )
}
