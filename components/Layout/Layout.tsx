import Head from 'next/head'
import styles from './layout.module.css'
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>CryptoNita APP</title>
      </Head>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </>
  );
}
