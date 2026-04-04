'use client'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'About',    href: '#philosophy' },
  { label: 'Works',    href: '#works'       },
  { label: 'Personal', href: '#personal'    },
  // { label: 'Contact',  href: '#contact'     },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>SAYAKA YAMATO</Link>
        <nav className={styles.nav}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={styles.navLink}>{item.label}</Link>
          ))}
        </nav>
        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー">
          <span className={styles.bar} /><span className={styles.bar} /><span className={styles.bar} />
        </button>
      </div>
      {menuOpen && (
        <nav className={styles.drawer}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      )}
    </header>
  )
}
