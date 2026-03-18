import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>YOUR NAME</p>
        <nav className={styles.nav}>
          <Link href="#philosophy" className={styles.link}>About</Link>
          <Link href="#works"      className={styles.link}>Works</Link>
          <Link href="#personal"   className={styles.link}>Personal</Link>
          <Link href="#contact"    className={styles.link}>Contact</Link>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} YOUR NAME. All rights reserved.</p>
      </div>
    </footer>
  )
}
