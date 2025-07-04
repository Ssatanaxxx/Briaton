import { z } from 'zod';
import { API_URL } from '../api/api';

export const CatalogMenuSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    href: z.string(),
  })
);

export type CatalogMenuItem = z.infer<typeof CatalogMenuSchema>[0];

export const getCatalogMenu = async (): Promise<CatalogMenuItem[]> => {
  const response = await fetch(`${API_URL}/catalogMenu`);
  const data = await response.json();
  return CatalogMenuSchema.parse(data);
};