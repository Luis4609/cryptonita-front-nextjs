import { Box, Grid, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/system";
import { styled } from "@mui/material/styles";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import CoinCard from "../../components/CoinCard";
import { Coin, CoinData } from "../../types/coin";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/sidebar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const API_URL: string = "https://api.coincap.io/v2/assets/";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(API_URL);
  const data: Coin = await res.json();

  return {
    props: { coinsinfo: data.data },
  };
};

const theme = createTheme({
  palette: {
    background: {
      paper: "#3A2D80",
    },
    text: {
      primary: "#A763F6",
      secondary: "#46505A",
      light: "#FFFFFF",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#6957E7",
    },
    goingUp: {
      primary: "#009626",
      secondary: "#e33010",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CoinsPage: NextPage<CoinData> = ({ coinsinfo }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
      <Stack spacing={2}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          size="large"
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
};

export default CoinsPage;

CoinsPage.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
