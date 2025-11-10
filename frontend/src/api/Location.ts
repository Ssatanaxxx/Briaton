import z from "zod";
import { BASE_URL } from "./config";
import { validateResponse } from "./validateResponse";

export const LocationSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type Location = z.infer<typeof LocationSchema>;

export const fetchCities = async (): Promise<Location[]> => {
  const res = await fetch(`${BASE_URL}/locations`);
  const validate = await validateResponse(res);
  const data = await validate.json();

  return LocationSchema.array().parse(data);
};
