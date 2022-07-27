import * as React from "react";

import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

//Web-vitals
export function reportWebVitals(metric: NextWebVitalsMetric): void {
  if (metric.label === "web-vital") {
    console.table(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }

  switch (metric.name) {
    case "Next.js-hydration":
      // handle hydration results
      console.log(
        `%cMetric value for Hydration: ${metric.startTime.toFixed(3)}`,
        "color: green;"
      );
      break;
    case "Next.js-route-change-to-render":
      // handle route-change to render results
      console.log(metric.startTime);
      break;
    case "Next.js-render":
      // handle render results
      console.log(metric.name);
      break;
    default:
      break;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: any) => page);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return getLayout(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
