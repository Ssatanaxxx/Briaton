import { z } from "zod";

export const FilterStoreShema = z.object({
  sortBy: z.enum(["price-min", "price-max", "rating-max"]),
  searchQuery: z.string().default(""),
});

export type Filters = z.infer<typeof FilterStoreShema>;
