import { z } from "zod";
import { BASE_URL } from "./config";
import { validateResponse } from "./validateResponse";

export const CategorySchema = z.object({
  id: z.number(),
  title: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${BASE_URL}/categories`);
  const validate = await validateResponse(res);
  const data = await validate.json();
  
  return CategorySchema.array().parse(data);
};
