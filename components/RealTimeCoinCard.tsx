import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import styles from "../styles/Home.module.css";

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

interface IPriceCoin {
  name: string;
  price: string | number;
  diffPercent: number;
  actualStyle: string;
}

export default function RealTimeCard(props: IPriceCoin) {
  console.log(`Props: ${props.actualStyle}`);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          width: "35%",
          margin: 4,
        }}
      >
        <Box sx={{ color: "text.light" }}>{props.name}</Box>
        <Box
          sx={{ color: props.actualStyle, fontSize: 34, fontWeight: "medium" }}
        >
          {props.price}
        </Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14,
          }}
        >
          {props.diffPercent.toFixed(3)}
        </Box>
        <Box sx={{ color: "text.primary", display: "inline", fontSize: 14 }}>
          vs. today
        </Box>
      </Box>
    </ThemeProvider>
  );
}
