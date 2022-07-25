import * as React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { NewsType } from "../types/news";

function NewsCard(props: NewsType) {
  return (
    <Box sx={{ minWidth: 275, margin: 3 }}>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar aria-label="recipe">{props.icon}</Avatar>}
          title={props.title}
          subheader={props.feedDate}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ID: {props.id}
          </Typography>
          <Typography variant="h6">{props.source}</Typography>
          <Typography variant="h4">{props.title}</Typography>
          <img src={props.imgUrl} alt="Image or this news" />
          <Typography>Market Cap: {props.description}</Typography>
          {props.coins.map((coin) => (
            <>
              <Typography>{coin.coinKeyWords}</Typography>
              <Typography>{coin.coinPercent}</Typography>
              <Typography>{coin.coinTitleKeyWords}</Typography>
              <Typography>{coin.coinNameKeyWords}</Typography>
              <Typography>{coin.coinIdKeyWords}</Typography>
            </>
          ))}
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={props.link}>Learn more</a>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default NewsCard;
