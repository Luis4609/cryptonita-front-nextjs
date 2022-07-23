// import { NextPage } from "next";
// import { useRouter } from "next/router";
// import { Coin } from "../../types/coin";
// import { Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import styles from "../../styles/Home.module.css";

// const API_URL: string = "https://api.coincap.io/v2/assets/";

// const CoinData: NextPage = () => {
//   const router = useRouter();
//   const { cid } = router.query;

//   const [coin, setCoin] = useState();

//   useEffect(() => {
//     fetch(API_URL + cid)
//       .then((res) => res.json())
//       .then((data) => setCoin(data));
//   }, []);

//   if (!coin) return <h1>Loading...</h1>;

//   return (
//     <main className={styles.main}>
//       <h1 className={styles.title}>Historic Data</h1>
//       {/* <Chart></Chart> */}
//       <Typography>{coin}</Typography>
//       {/* <Typography>{coin.rank}</Typography>

//       <Typography>{coin.marketCapUsd}</Typography> */}
//     </main>
//   );
// };

// export async function getStaticProps() {
//   const res = await fetch(API_URL + "bitcoin");
//   const data: Coin = await res.json();

//   return {
//     props: { coin: data }, // will be passed to the page component as props
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: Array<string | { params: { [key: string]: string } }>,
//     fallback: true
//   }
// }

// export default CoinData;

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";

const CoinData = () => {
  const router = useRouter();
  const { cid } = router.query;

  const [coin, setCoin] = useState();

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/" + cid)
      .then((res) => res.json())
      .then((data) => setCoin(data.data));
  }, []);

  return (
    <Container>
      <Typography variant="h2" color="secondary">
        Título: {coin?.rank}
      </Typography>
      <p>Post: {cid}</p>
    </Container>
  );
};

export default CoinData;
