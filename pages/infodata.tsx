import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { InferGetStaticPropsType } from "next/types";
import { useState } from "react";
import { Coin } from "../types/coin";

const API_URL: string = "https://api.coincap.io/v2/assets/bitcoin";

export default function infodata({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [coin, setCoin] = useState(data);

  if (!coin) return <h1>Loading...</h1>;

  return (
    <Container>
      <Typography variant="h2">Coin Data</Typography>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ID: {coin.data.id}
          </Typography>
          <Typography variant="h5" component="div">
            Rank: {coin.data.rank}
          </Typography>
          <Typography variant="h6">{coin.data.symbol}</Typography>
          <Typography variant="h4">{coin.data.name}</Typography>
          <Typography>Supply: {coin.data.supply}</Typography>
          <Typography>Max supply: {coin.data.maxSupply}</Typography>
          <Typography>Market Cap: {coin.data.marketCapUsd}</Typography>
          <Typography variant="body2">
            Volume in USD in the last 24Hr: {coin.data.volumeUsd24Hr}
          </Typography>
          <Typography variant="body2">
            Price in USD{coin.data.priceUsd}
          </Typography>
          <Typography variant="body2">
            Percent of change in the past 24Hr{coin.data.changePercent24Hr}
          </Typography>
          <Typography variant="body2">
            Vwap 24Hr: {coin.data.vwap24Hr}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={coin.data.explorer}>Learn more</a>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch(API_URL);
  const data: Coin = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
