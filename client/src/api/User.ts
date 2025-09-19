import z from "zod";
import { validateResponse } from "./validateResponse";

export const UserSchema = z.object({
  id: z.string(), 
  username: z.string(),
  email: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const RegisterSchema = z.object({
  username: z.string().min(2, "Имя слишком короткое"),
  email: z.string().email("Неверный формат email"),
  password: z.string().min(6, "Пароль слишком короткий"),
});

export type RegisterData = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.string().email("Неверный формат email"),
  password: z.string().min(1, "Введите пароль"),
});

export type LoginData = z.infer<typeof LoginSchema>;

export async function registerUser(data: RegisterData): Promise<User> {
  const response = await fetch("/api/auth/register", { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return UserSchema.parse(await validateResponse(response));
}

export async function loginUser(data: LoginData): Promise<void> {
  const response = await fetch("/api/auth/login", { 
    method: "POST", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  await validateResponse(response);
}

export async function fetchCurrentUser(): Promise<User> {
  const response = await fetch("/api/auth/me");
  return UserSchema.parse(await validateResponse(response));
}

export async function logoutUser(): Promise<void> {
  await fetch("/api/auth/logout", {
    method: "POST",
  });
}