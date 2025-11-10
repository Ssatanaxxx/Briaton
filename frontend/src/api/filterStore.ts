import { z } from "zod";

export const FilterStoreSchema = z.object({
  sortBy: z.enum(["price-asc", "price-desc", "popular"]),
  searchQuery: z.string().default(""),
});

export type FilterStore = z.infer<typeof FilterStoreSchema>;
