import Head from "next/head";
import styles from "./layout.module.css";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>CryptoNita</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </>
  );
}
