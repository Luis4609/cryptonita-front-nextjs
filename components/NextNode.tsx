import React from "react";
import styles from "../styles/Home.module.css";

interface LayoutProps {
  title: String;
  text: String;
  link: string;
}

function NextNode(props: LayoutProps) {
  return (
    <a href={props.link} className={styles.card}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.text}</p>
    </a>
  );
}

export default NextNode;
