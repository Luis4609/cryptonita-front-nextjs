import { useState } from "react";
import { useRouter } from "next/router";
import { InferGetStaticPropsType } from "next/types";
import { Coin } from "../../types/coin";
import { Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";

const API_URL: string = "https://api.coincap.io/v2/assets/";

const CoinData = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { cid } = router.query;

  const [coin, setCoin] = useState(data);

  if (!coin) return <h1>Loading...</h1>;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Historic Data</h1>
      {/* <Chart></Chart> */}
      <Typography>{coin.data.id}</Typography>
      <Typography>{coin.data.rank}</Typography>

      <Typography>{coin.data.marketCapUsd}</Typography>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch(API_URL + "bitcoin");
  const data: Coin = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default CoinData;
