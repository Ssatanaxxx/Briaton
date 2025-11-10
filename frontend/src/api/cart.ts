import { z } from "zod";
import { BASE_URL } from "./config";

export const CartItemSchema = z.object({
  id: z.number().int().positive(),
  productId: z.number().int().positive(),
  quantity: z.number().int().positive().min(1),
  addedAt: z.string().datetime().optional(),
});

export const AddToCartSchema = z.object({
  productId: z.number().int().positive(),
  quantity: z.number().int().positive().min(1).default(1),
});

export type CartItem = z.infer<typeof CartItemSchema>;
export type AddToCartRequest = z.infer<typeof AddToCartSchema>;

// Получить корзину
export const getCart = async (): Promise<CartItem[]> => {
  console.log("🛒 GET /cart - Загружаем корзину...");
  const res = await fetch(`${BASE_URL}/cart`);

  if (!res.ok) {
    throw new Error(`Ошибка загрузки корзины: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  console.log("📦 Данные корзины:", data);

  // JSON Server возвращает { carts: CartItem[] }
  if (data.carts) {
    return CartItemSchema.array().parse(data.carts);
  }

  return CartItemSchema.array().parse(data);
};

// Добавить в корзину
export const addToCart = async (item: AddToCartRequest): Promise<void> => {
  console.log("➕ POST /cart - Добавляем в корзину:", item);

  const validatedData = AddToCartSchema.parse(item);

  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedData),
  });

  console.log("📨 Ответ добавления:", res.status, res.statusText);

  if (!res.ok) {
    let errorMessage = `Ошибка добавления: ${res.status} ${res.statusText}`;

    try {
      const errorText = await res.text();
      if (errorText) {
        errorMessage += ` - ${errorText}`;
      }
    } catch {
      // Не удалось прочитать тело ошибки
    }

    console.error("❌ Ошибка добавления:", errorMessage);
    throw new Error(errorMessage);
  }

  console.log("✅ Товар успешно добавлен в корзину");

  // Пробуем прочитать ответ
  try {
    const responseData = await res.json();
    console.log("📦 Ответ сервера:", responseData);
  } catch (error) {
    console.log("📦 Ответ сервера пустой или не JSON");
  }
};

// Удаление не поддерживается API, поэтому будем обнулять количество
// или создавать новый запрос с quantity: 0
