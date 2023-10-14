import { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.body;
    const result = await prisma.result.findMany({
      where: {
        uid: {
          equals: id,
        },
      },
    });
    res.status(200).json({ data: result[0] });
  } catch (error) {
    res.status(500).json({ error });
  }
}
