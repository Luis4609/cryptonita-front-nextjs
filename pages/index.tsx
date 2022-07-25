import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import NextNode from "../components/NextNode";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/sidebar";

const Home: NextPage = () => {
  return (
      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">CryptoNita</a>
        </h1>

        <div className={styles.grid}>
          <NextNode
            title={"Documentation"}
            text={"Hola buenas"}
            link={"infodata"}
          ></NextNode>
          <NextNode
            title={"GitHub Backend"}
            text={"Repo for the CryptoNita backend."}
            link={"https://github.com/Luis4609/cryptonita-backend"}
          ></NextNode>
          <NextNode
            title={"Update news"}
            text={"Hola buenas"}
            link={"Update news page"}
          ></NextNode>
          <NextNode
            title={"Posts Page"}
            text={"See the posts list, retrieve from Json Placeholder"}
            link={"posts"}
          ></NextNode>
          <NextNode
            title={"Coins Page"}
            text={"Documentation for the Card component from MUI."}
            link={"coins"}
          ></NextNode>
        </div>
      </div>
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
