import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { NextPage } from "next";
import Link from "next/link";
import CoinCard from "../../components/CoinCard";
import { Coin, CoinData } from "../../types/coin";

export const getStaticProps = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets/");
  const data: Coin = await res.json();

  return {
    props: { coinsinfo: data.data },
  };
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CoinsPage: NextPage = ({ coinsinfo }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h3">Lista de monedas</Typography>
      <Grid container spacing={2}>
        {coinsinfo?.map((coin: CoinData) => (
          <Link
            href={`/coins/${encodeURIComponent(coin.id)}`}
            key={coin.id}
            passHref
          >
            <Grid item xs={4}>
              <Item>
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
              </Item>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default CoinsPage;
