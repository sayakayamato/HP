import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const footerLinks = [
  { label: '私たちについて', href: '/about' },
  { label: 'コラボ企画',     href: '/collaboration' },
  { label: 'すべてのニュース', href: '/news' },
  { label: 'お問い合わせ',   href: '/contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* 会社名 */}
        <p className={styles.company}>concon株式会社</p>

        {/* ナビリンク */}
        <nav className={styles.nav}>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* コピーライト */}
        <p className={styles.copy}>
          © {new Date().getFullYear()} concon Inc. All Rights Reserved.
        </p>

      </div>
    </footer>
  )
}
