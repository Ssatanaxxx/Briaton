import { z } from "zod";

export const OrderItemSchema = z.object({
  productId: z.number().int().positive(),
  quantity: z.number().int().positive().min(1),
  price: z.number().positive(),
});

// OrderCreate схема (для отправки на бэкенд)
export const OrderCreateSchema = z.object({
  userId: z.number().int().positive(),
  items: z.array(OrderItemSchema).min(1, "Корзина не может быть пустой"),
});

// Order схема (ответ от бэкенда)
export const OrderSchema = z.object({
  id: z.number().int().positive(),
  userId: z.number().int().positive(),
  items: z.array(OrderItemSchema),
  totalPrice: z.number().positive(),
  status: z.enum(["pending", "confirmed", "delivered", "cancelled"]),
  createdAt: z.string().datetime(),
});

// Типы TypeScript
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type OrderCreate = z.infer<typeof OrderCreateSchema>;
export type Order = z.infer<typeof OrderSchema>;
