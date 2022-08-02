import { Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";


type New = {
  id: number;
  title: string;
  description: string;
}

const NewInfo: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;

  const [newinfo, setNewInfo] = useState();

  return (<Typography>New: {cid}</Typography>);
};

export default NewInfo;
