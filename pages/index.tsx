import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Typography className={styles.title}>
        Welcome to <a href="">CryptoNita</a>
      </Typography>

      <Link href="login">
        <Typography>Login</Typography>
      </Link>
      <Link href="register">
        <Typography>Register</Typography>
      </Link>
    </main>
  );
};

export default Home;

Home.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
