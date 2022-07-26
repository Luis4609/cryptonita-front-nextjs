import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";
import { CoinData } from "../../types/coin";

import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/sidebar";
import CoinCard from "../../components/CoinCard";

// Custom hook for fetch coin by id data
function useFetchCoin(id: string | string[] | undefined) {
  const [coin, setCoin] = useState<CoinData>();
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/" + id)
      .then((res) => res.json())
      .then((data) => setCoin(data.data))
      .catch((message) => setErrorMessage(message));
  });

  return { coin, errorMessage };
}

const CoinPage: NextPage = () => {

  console.count('Rerender coinPage')

  const router = useRouter();
  const { cid } = router.query;

  const [coin, setCoin] = useState<CoinData>();

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/" + cid)
      .then((res) => res.json())
      .then((data) => setCoin(data.data))
      .catch((message) => console.log(message));
  });

  // const { coin } = useFetchCoin(cid);

  if (!coin) return <p>Loading...</p>;
  
  return (
    <Container>
      <Typography variant="h2" color="primary">
        Título: {coin?.name}
      </Typography>
      <Typography variant="h4" color="secondary">
        Ranking: {coin?.rank}
      </Typography>
      <a href={coin?.explorer}>Go to:</a>
      <CoinCard
        id={coin.id}
        rank={coin.rank}
        symbol={coin.symbol}
        name={coin.name}
        supply={coin.supply}
        maxSupply={coin.maxSupply}
        marketCapUsd={coin.marketCapUsd}
        volumeUsd24Hr={coin.volumeUsd24Hr}
        priceUsd={coin.priceUsd}
        changePercent24Hr={coin.changePercent24Hr}
        vwap24Hr={coin.vwap24Hr}
        explorer={coin.explorer}
      ></CoinCard>
    </Container>
  );
};

export default CoinPage;

CoinPage.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
