import { useRouter } from "next/router";
import { useState } from "react";
import { Coin, Data } from "../../types/coin";
import { InferGetStaticPropsType } from "next/types";
import styles from "../../styles/Home.module.css";
import { Grid, Card, Typography, CardContent } from "@mui/material";

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
