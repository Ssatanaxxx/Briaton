import { z } from "zod";
import { BASE_URL } from "./config";
import { validateResponse } from "./validateResponse";

export const FAQSchema = z.object({
  id: z.number(),
  question: z.string(),
  answer: z.array(z.string()),
});

export type FAQ = z.infer<typeof FAQSchema>;

export const getFAQ = async (): Promise<FAQ[]> => {
  const res = await fetch(`${BASE_URL}/faq`);
  const validate = await validateResponse(res);
  const data = await validate.json();
  return FAQSchema.array().parse(data);
};
