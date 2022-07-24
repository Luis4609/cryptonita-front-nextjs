import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  console.log("body: ", body);

  // Both of these are required.
  if (!body.first || !body.last) {
    return res.status(400).json({ data: "First or last name not found" });
  }

  // Found the name.
   // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.last}` });
}
