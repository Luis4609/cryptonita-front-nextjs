import Link from "next/link";

import { Box, Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/system";
import CoinCard from "../../components/CoinCard";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/sidebar";

import type { GetStaticProps, NextPage } from "next";
import { Coin, CoinData } from "../../types/coin";

// const API_URL: string = "https://api.coincap.io/v2/assets/";

const API_URL: string = "http://localhost:8080/coins/all";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(API_URL);
  const data: Coin = await res.json();

  return {
    props: { coinsinfo: data.data },
  };
};

const theme = createTheme({
  palette: {
    mode: "dark",
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

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CoinsPage: NextPage<CoinData> = ({ coinsinfo }) => {
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.mode,
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
        {/* Pagination component */}
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
    // </ThemeProvider>
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
