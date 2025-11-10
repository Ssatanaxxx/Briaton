import z from "zod";
import { BASE_URL } from "./config";
import { validateResponse } from "./validateResponse";

const ProductSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(2),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  quantity: z.number().int().nonnegative(),
  imageUrl: z.string(),
  isPromo: z.boolean().default(false),
  category: z.enum(["ceiling", "wall", "floor", "spot", "bundle"]),
  createdAt: z.string().datetime().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  const validate = await validateResponse(res);
  const data = await validate.json();
  
  return ProductSchema.array().parse(data);
};

export const getProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  const validate = await validateResponse(res);
  const data = await validate.json();
  return ProductSchema.parse(data);
};
