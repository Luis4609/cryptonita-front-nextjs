import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import { CoinData } from "../types/coin";

export default function CoinCard(props: CoinData) {
  if (!props) return <h1>Loading...</h1>;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              ID: {props.id}
            </Typography>
            <Typography variant="h5" component="div">
              Rank: {props.rank}
            </Typography>
            <Typography variant="h4">{props.symbol}</Typography>
            <Typography variant="h4">{props.name}</Typography>
            <Typography>Supply: {props.supply}</Typography>
            <Typography>Max supply: {props.maxSupply}</Typography>
            <Typography>Market Cap: {props.marketCapUsd}</Typography>
            <Typography variant="body2">
              Volume in USD in the last 24Hr: {props.volumeUsd24Hr}
            </Typography>
            <Typography variant="body2">
              Price in USD{props.priceUsd}
            </Typography>
            <Typography variant="body2">
              Percent of change in the past 24Hr{props.changePercent24Hr}
            </Typography>
            <Typography variant="body2">Vwap 24Hr: {props.vwap24Hr}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">
            <a href={props.explorer}>Learn more</a>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
