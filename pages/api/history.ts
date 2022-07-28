import type { NextApiRequest, NextApiResponse } from "next";
import { HistoryData } from "../../types/history";

export default function CampeonatosApi(
  req: NextApiRequest,
  res: NextApiResponse<HistoryData[]>
) {
  res.status(200).json([
    {
      priceUsd: "31767.4510776570737740",
      time: 1626393600000,
      date: "2021-07-16T00:00:00.000Z",
    },
    {
      priceUsd: "31578.7491280294143390",
      time: 1626480000000,
      date: "2021-07-17T00:00:00.000Z",
    },
    {
      priceUsd: "31780.4256114760650145",
      time: 1626566400000,
      date: "2021-07-18T00:00:00.000Z",
    },
    {
      priceUsd: "31202.7083689063426998",
      time: 1626652800000,
      date: "2021-07-19T00:00:00.000Z",
    },
    {
      priceUsd: "29860.3778762241285044",
      time: 1626739200000,
      date: "2021-07-20T00:00:00.000Z",
    },
    {
      priceUsd: "31205.6782645773143650",
      time: 1626825600000,
      date: "2021-07-21T00:00:00.000Z",
    },
    {
      priceUsd: "32152.8386991367116436",
      time: 1626912000000,
      date: "2021-07-22T00:00:00.000Z",
    },
    {
      priceUsd: "32499.4842888011862787",
      time: 1626998400000,
      date: "2021-07-23T00:00:00.000Z",
    },
    {
      priceUsd: "33891.4848306204984384",
      time: 1627084800000,
      date: "2021-07-24T00:00:00.000Z",
    },
    {
      priceUsd: "34416.5635553966374018",
      time: 1627171200000,
      date: "2021-07-25T00:00:00.000Z",
    },
  ]);
}
