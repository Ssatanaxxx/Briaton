import z from "zod";
import { validateResponse } from "./validateResponse";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.number(),
  deliveryAddress: z.string()
});

export type User = z.infer<typeof UserSchema>;

export async function fetUser(id: string): Promise<User> {
  const response = await fetch(`/api/user/${id}`);
  const data = await response.json();
  return UserSchema.parse(data);
}

// Вход в аккаунт

export async function login(
  name: string,
  email: string,
  phone: number,
  deliveryAddress: string
): Promise<User> {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, deliveryAddress }),
  });

  const data = await validateResponse(response);
  return UserSchema.parse(data);
}

export async function fetchMe(): Promise<User> {
  const response = await fetch("/api/users/me");
  const response_1 = await validateResponse(response);
  const data = await response_1.json();
  return UserSchema.parse(data);
}
