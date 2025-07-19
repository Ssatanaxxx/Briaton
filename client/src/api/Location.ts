import z from "zod";

export const LocationSchema = z.object({
  id: z.number(),
  NameCity: z.string(),
});

export type Location = z.infer<typeof LocationSchema>;

export const City: Location[] = [
  {
    id: 0,
    NameCity: "Москва",
  },
  {
    id: 1,
    NameCity: "Санкт-Петербург",
  },
  {
    id: 2,
    NameCity: "Оренбург",
  },
  {
    id: 3,
    NameCity: "Волгоград",
  },
];
