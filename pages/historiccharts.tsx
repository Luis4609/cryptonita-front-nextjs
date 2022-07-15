import { useState, useEffect } from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import { HistoryData } from "./api/history";
import styles from "../styles/Home.module.css";
import Chart from "../components/Charts";

function historiccharts() {
//   const [historics, setHistorics] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/history")
//       .then((res) => res.json())
//       .then((data) => setHistorics(data));
//   }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Historic Data
      </h1>
      <Chart></Chart>
    </main>
  );
}

export default historiccharts;
