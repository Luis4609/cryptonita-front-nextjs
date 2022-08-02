// Custom hook for fetch coin by id data

import { useState, useEffect } from "react";
import { CoinData } from "../types/coin";

export default function useFetchCoin(cid: string | string[] | undefined) {
  const [coin, setCoin] = useState<CoinData>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/" + cid)
      .then((res) => res.json())
      .then((data) => setCoin(data.data))
      .catch((message) => setErrorMessage(message));
  }, [cid]);

  console.debug(cid);

  return { coin, errorMessage };
}
