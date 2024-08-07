import { db } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Task = {
  id: number;
  title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { rows } = await db.query<Task>("SELECT * FROM tasks");

  res.status(200).json(rows);
}
