import z from "zod";

import ItemImage1 from "../assets/item-1.png";
import ItemImage2 from "../assets/item-2.png";
import ItemImage3 from "../assets/item-3.png";
import ItemImage4 from "../assets/item-4.png";
import ItemImage5 from "../assets/item-5.png";
import ItemImage6 from "../assets/item-6.png";
import ItemImage7 from "../assets/item-7.png";
import ItemImage8 from "../assets/item-8.png";
import ItemImage9 from "../assets/item-9.png";
import ItemImage10 from "../assets/item-10.png";
import ItemImage11 from "../assets/item-11.png";
import ItemImage12 from "../assets/item-12.png";
import ItemImage13 from "../assets/item-13.png";
import ItemImage14 from "../assets/item-14.png";
import ItemImage15 from "../assets/item-15.png";
import ItemImage16 from "../assets/item-16.png";

const ProductSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(2),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  quantity: z.number().int().nonnegative(),
  imageUrl: z.union([z.string(), z.any()]),
  isPromo: z.boolean().default(false),
  category: z.enum(["ceiling", "wall", "floor", "spot", "bundle"]).optional(),
});

export type Product = z.infer<typeof ProductSchema>;

const createProduct = (
  data: Omit<Product, "id" | "isPromo">,
  id: number
): Product => {
  const isPromo = data.originalPrice !== undefined;

  return ProductSchema.parse({
    ...data,
    id,
    isPromo,
  });
};

export const PRODUCT: Product[] = [
  createProduct(
    {
      name: "Хрустальная люстра 'Ornella' A4059PL-4AB",
      price: 18990,
      originalPrice: 25400,
      quantity: 12,
      imageUrl: ItemImage1,
      category: "ceiling",
    },
    0
  ),
  createProduct(
    {
      name: "Подвесной светильник 'Milano' с матовым стеклом",
      price: 12490,
      quantity: 24,
      imageUrl: ItemImage2,
      category: "ceiling",
    },
    1
  ),
  createProduct(
    {
      name: "Люстра 'Venice' золотая с 6 рожками",
      price: 22450,
      originalPrice: 28900,
      quantity: 8,
      imageUrl: ItemImage3,
      category: "ceiling",
    },
    2
  ),
  createProduct(
    {
      name: "Бра 'Florence' с хлопковым абажуром",
      price: 5690,
      originalPrice: 7890,
      quantity: 36,
      imageUrl: ItemImage4,
      category: "wall",
    },
    3
  ),
  createProduct(
    {
      name: "Светильник 'Ravenna' в стиле лофт",
      price: 8790,
      quantity: 17,
      imageUrl: ItemImage5,
      category: "wall",
    },
    4
  ),
  createProduct(
    {
      name: "Торшер 'Barcelona' с сенсорным управлением",
      price: 14500,
      originalPrice: 18900,
      quantity: 9,
      imageUrl: ItemImage6,
      category: "floor",
    },
    5
  ),
  createProduct(
    {
      name: "Торшер 'Modena' с USB-разъемами",
      price: 12990,
      quantity: 14,
      imageUrl: ItemImage7,
      category: "floor",
    },
    6
  ),
  createProduct(
    {
      name: "Спот 'Torino' поворотный золотой",
      price: 3290,
      originalPrice: 4590,
      quantity: 42,
      imageUrl: ItemImage8,
      category: "spot",
    },
    7
  ),
  createProduct(
    {
      name: "Встраиваемый светильник 'Genova'",
      price: 2790,
      quantity: 58,
      imageUrl: ItemImage9,
      category: "spot",
    },
    8
  ),
  createProduct(
    {
      name: "Комплект 'Toscana' (люстра + 2 бра)",
      price: 31990,
      originalPrice: 42900,
      quantity: 5,
      imageUrl: ItemImage10,
      category: "bundle",
    },
    9
  ),
  createProduct(
    {
      name: "Умная лампа 'SmartGlow' RGB",
      price: 2490,
      originalPrice: 3490,
      quantity: 63,
      imageUrl: ItemImage11,
    },
    10
  ),
  createProduct(
    {
      name: "Люстра Ornella",
      price: 2490,
      originalPrice: 3490,
      quantity: 63,
      imageUrl: ItemImage12,
    },
    11
  ),
  createProduct(
    {
      name: "Люстра Ornella",
      price: 6540,
      originalPrice: 14300,
      quantity: 158,
      imageUrl: ItemImage13,
      category: "ceiling",
    },
    12
  ),
  createProduct(
    {
      name: "Люстра Ornella",
      price: 6540,
      originalPrice: 14300,
      quantity: 158,
      imageUrl: ItemImage14,
      category: "ceiling",
    },
    13
  ),
  createProduct(
    {
      name: "Люстра Ornella",
      price: 6540,
      originalPrice: 14300,
      quantity: 158,
      imageUrl: ItemImage15,
      category: "ceiling",
    },
    14
  ),
  createProduct(
    {
      name: "Люстра Ornella",
      price: 6540,
      originalPrice: 14300,
      quantity: 158,
      imageUrl: ItemImage16,
      category: "ceiling",
    },
    15
  ),
];
