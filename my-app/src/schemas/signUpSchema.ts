import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, "username must be atlest 2 cheractors")
    .max(20, "username must not be more then 20 charactors")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/g,
      "username must not contain special cheractor"
    ),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be atlist 6 cherectors" }),
});
