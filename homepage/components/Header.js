'use client'

import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>

        {/* ロゴ */}
        <Link href="/" className={styles.logo}>
          yurunitan project
        </Link>

        {/* ハンバーガーボタン */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* ドロワーメニュー */}
      {menuOpen && (
        <nav className={styles.drawer}>
          <Link href="#about"        className={styles.drawerLink} onClick={() => setMenuOpen(false)}>私たちについて</Link>
          <Link href="#products"     className={styles.drawerLink} onClick={() => setMenuOpen(false)}>製品について</Link>
          <Link href="#collaboration"className={styles.drawerLink} onClick={() => setMenuOpen(false)}>コラボ企画</Link>
          <Link href="#contact"      className={styles.drawerLink} onClick={() => setMenuOpen(false)}>お問い合わせ</Link>
        </nav>
      )}
    </header>
  )
}
