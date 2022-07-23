import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";
import { CoinData } from "../../types/coin";

const CoinPage: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;

  const [coin, setCoin] = useState();

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/" + cid)
      .then((res) => res.json())
      .then((data) => setCoin(data.data));
  });

  return (
    <Container>
      <Typography variant="h2" color="primary">
        Título: {coin?.name}
      </Typography>
      <Typography variant="h4" color="secondary">
        Ranking: {coin?.rank}
      </Typography>
      <a href={coin?.explorer} variant="body">Go to:</a>
    </Container>
  );
};

export default CoinPage;
