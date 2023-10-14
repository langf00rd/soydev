import { z } from "zod";
export const resultSchema = z.object({
  createdAt: z.string(),
  percentage: z.number(),
  checklist: z.array(z.string()),
  role: z.string(),
});
