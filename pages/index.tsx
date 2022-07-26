import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/sidebar";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">CryptoNita</a>
      </h1>
    </>
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
