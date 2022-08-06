// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";

type Data = {
  ok: boolean;
  msg: string;
  method: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //avoid deleteing production db
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({
      method: req.method || "N/A",
      ok: false,
      msg: "cannot seed on production mode",
    });
  }
  //db connection
  await db.connect();
  await db.disconnect();

  //normal response
  res
    .status(200)
    .json({ method: req.method || "N/A", ok: true, msg: "todo ok" });
}
