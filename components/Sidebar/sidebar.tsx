import Link from "next/link";
import styles from "./sidebar.module.css";
import { Input } from "@mui/material";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Input placeholder="Search..." color="primary" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/socket">
        <a>Go to real time data</a>
      </Link>
      <Link href="/coins">
        <a>Coins Page</a>
      </Link>
      <Link href="/news">
        <a>News Page</a>
      </Link>
    </nav>
  );
}
