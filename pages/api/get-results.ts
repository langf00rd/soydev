import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Result } from "~/interface";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await prisma.result.findMany();
    const sortedResults = results.sort(
      (a: Result, b: Result) => b.percentage - a.percentage
    );
    const sortedResultsWithRanks = sortedResults.map((o: Result, i: number) =>
      Object.assign(o, { rank: i + 1 })
    );

    res.json({ results: sortedResultsWithRanks });
  } catch (error) {
    res.status(500).json({ error });
  }
}
