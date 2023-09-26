import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await prisma.result.findMany();
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error });
  }
}
