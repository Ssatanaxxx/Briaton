import { z } from "zod";

export const FilterStoreSchema = z.object({
  sortBy: z.enum(["price-asc", "price-desc", "popular"]),
  searchQuery: z.string().default(""),
});

export type storeOption = z.infer<typeof FilterStoreSchema>;
