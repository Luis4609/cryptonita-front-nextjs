import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";
import { CoinData } from "../../types/coin";

import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/sidebar";

const CoinPage: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;

  const [coin, setCoin] = useState<CoinData>();

  console.log(cid);

  useEffect(() => {
    fetch("http://localhost:8080/coins/" + cid)
      .then((res) => res.json())
      .then((data) => setCoin(data.data))
      .catch((message) => console.log(message));
  });

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
