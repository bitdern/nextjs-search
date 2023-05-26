import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q: query } = req.query;
  console.log("AT THE TRAP SPOT", query);

  res.status(200).json({ message: "Hiya Hiya" });
}
