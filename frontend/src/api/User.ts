import { z } from "zod";
import { validateResponse } from "./validateResponse";
import { BASE_URL } from "./config";

export const UserSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  phone: z.string(),
  address: z.string(),
  createdAt: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const RegisterSchema = z.object({
  fullName: z.string(),
  phone: z.string(),
  address: z.string(),
});

export type RegisterData = z.infer<typeof RegisterSchema>;

export const registerUser = async (users: RegisterData): Promise<User> => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  });
  const validate = await validateResponse(res);
  const data = await validate.json();

  return UserSchema.parse(data);
};
