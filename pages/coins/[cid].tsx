import { useRouter } from "next/router";

import type { NextPage } from "next";

import { Typography, Container } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/sidebar";
import CoinCard from "../../components/CoinCard";

import useFetchCoin from "../../hooks/UseFetchCoin";

const CoinPage: NextPage = () => {
  console.count("Rerender coinPage");

  // Next router to get the Param of the url
  const router = useRouter();
  const { cid } = router.query;

  //Custom hook to fetch coin data by id
  const { coin } = useFetchCoin(cid);

  console.log(`%cId: crypto ${cid}`, "color: red;");
  console.table(coin);

  if (!coin) return <p>Loading...</p>;

  return (
    <Container>
      <Typography variant="h2" color="primary">
        Título: {coin?.name}
      </Typography>
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
