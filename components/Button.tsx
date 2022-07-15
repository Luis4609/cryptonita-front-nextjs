import * as React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

interface LayoutProps {
  text: string;
  url: string;
}

function ButtonLink(props: LayoutProps) {
  return (
    <Link href={props.url}>
      <Button variant="contained">{props.text}</Button>
    </Link>
  );
}

export default ButtonLink;
