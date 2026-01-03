import { z } from "zod";
import { BASE_URL } from "./config";
import { validateResponse } from "./validateResponse";

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

export const getCart = async (): Promise<CartItem[]> => {
  const res = await fetch(`${BASE_URL}/cart`);
  const validate = await validateResponse(res);
  const data = await validate.json();

  return CartItemSchema.array().parse(data);
};

// Добавить в корзину
export const addToCart = async (
  item: AddToCartRequest
): Promise<CartItem[]> => {
  const validateData = AddToCartSchema.parse(item);

  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validateData),
  });

  const validate = await validateResponse(res);
  const data = await validate.json();

  return CartItemSchema.array().parse(data);
};
