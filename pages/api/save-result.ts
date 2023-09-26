import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const prisma = new PrismaClient();

const resultSchema = z.object({
  uid: z.string(),
  createdAt: z.string(),
  percentage: z.number(),
  role: z.string(),
  fullName: z.string(),
  photo: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const validation = resultSchema.safeParse(req.body);
    const body = resultSchema.parse(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.error.issues });
    } else {
      console.log(body);
      let doc = await prisma.result.findMany({
        where: {
          uid: {
            equals: body.uid,
          },
        },
      });
      if (!doc[0]) {
        console.log("creating");
        await prisma.result.create({
          data: {
            uid: body.uid,
            percentage: body.percentage,
            createdAt: body.createdAt,
            role: body.role,
            fullName: body.fullName,
            photo: body.photo,
          },
        });
      } else {
        console.log("updating");
        await prisma.result.update({
          where: {
            id: doc[0].id,
            OR: [
              {
                uid: { equals: body.uid },
              },
            ],
          },
          data: {
            percentage: body.percentage,
            createdAt: body.createdAt,
            role: body.role,
            fullName: body.fullName,
            photo: body.photo,
          },
        });
      }
      res.json({ message: "db updated" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
