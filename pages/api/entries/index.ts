import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Entry, IEntry } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IEntry[]
  | IEntry;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getEntries(res);

    default:
      return res.status(400).json({ message: "Invalid Endpoint" });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: "ascending" });

  res.status(200).json(entries);

  await db.disconnect();
};
