import { getAuth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/prisma";
import { resultSchema } from "~/lib/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);
  const user = userId ? await clerkClient.users.getUser(userId) : null;

  if (!userId || !user) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  try {
    console.log(req.body);
    const validation = resultSchema.safeParse(req.body);
    const body = resultSchema.parse(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.error.issues });
    } else {
      // get doc from db
      let doc = await prisma.result.findMany({
        where: {
          uid: {
            equals: user.id,
          },
        },
      });

      const data = {
        percentage: body.percentage,
        createdAt: body.createdAt,
        checklist: body.checklist,
        role: body.role,
        name: user.firstName as string,
        photo: user.imageUrl,
        uid: user.id,
      };

      // when doc does not exist create the doc in db
      if (!doc[0]) {
        await prisma.result.create({
          data: { ...data },
        });
      } else {
        // if doc exists, update the doc with the request body
        console.log("updating");
        await prisma.result.update({
          where: {
            id: doc[0].id,
            OR: [
              {
                uid: { equals: user.id },
              },
            ],
          },
          data: data,
        });
      }
      res.status(200).json({ message: "database updated with entry" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
