import { z } from "zod";

export const LusterSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.object({
    new: z.number(),
    old: z.number(),
  }),
  image: z.string(),
  availability: z.object({
    moscow: z.number(),
    orenburg: z.number(),
    saintPetersburg: z.number(),
  }),
  type: z.array(z.string()),
  rating: z.number(),
  goodsOfDay: z.boolean(),
});

export type Luster = z.infer<typeof LusterSchema>;

export const LusterSchemaList = z.array(LusterSchema);

export type LusterList = z.infer<typeof LusterSchemaList>;

export const CatalogMenuShema = z.object({
  id: z.number(),
  title: z.string(),
  href: z.string(),
});

export type CatalogMenu = z.infer<typeof CatalogMenuShema>;
export type CatalogMenuItem = z.infer<typeof CatalogMenuShema>;

export const MainMenuSchema = z.object({
  id: z.number(),
  title: z.string(),
  href: z.string(),
});

export type MainMenu = z.infer<typeof MainMenuSchema>;
export const MainMenuListSchema = z.array(MainMenuSchema);
export type MainMenuList = z.infer<typeof MainMenuListSchema>;

export const FAQSchema = z.object({
  id: z.number(),
  title: z.string(),
  textOne: z.string(),
  textTwo: z.string(),
  href: z.string(),
});

export type FAQ = z.infer<typeof FAQSchema>;

export const FAQListSchema = z.array(FAQSchema);
export type FAQList = z.infer<typeof FAQListSchema>;
