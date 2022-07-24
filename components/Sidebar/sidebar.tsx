import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/socket">
        <a>Go to real time data</a>
      </Link>
      <Link href="/coins">
        <a>Coins Page</a>
      </Link>
    </nav>
  )
}