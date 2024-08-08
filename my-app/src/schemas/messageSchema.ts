import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content at leat of 10 charector" })
    .max(300, "content no more the 300 cheractors"),
});
