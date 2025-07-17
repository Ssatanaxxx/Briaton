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

export const ProductsSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  sell: z.number(),
  quantity: z.number(),
  imageUrl: z.any(),
});

export type Products = z.infer<typeof ProductsSchema>;

export const PRODUCT: Products[] = [
  {
    id: 0,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 14300,
    sell: 6540,
    quantity: 158,
    imageUrl: ItemImage1,
  },
  {
    id: 1,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage2,
  },
  {
    id: 2,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 15300,
    sell: 8540,
    quantity: 118,
    imageUrl: ItemImage3,
  },
  {
    id: 3,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage4,
  },
  {
    id: 4,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage5,
  },
  {
    id: 5,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage6,
  },
  {
    id: 6,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage7,
  },
  {
    id: 7,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage8,
  },
  {
    id: 8,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage9,
  },
  {
    id: 9,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage10,
  },
  {
    id: 10,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage11,
  },
  {
    id: 11,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage12,
  },
  {
    id: 12,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage13,
  },
  {
    id: 13,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage14,
  },
  {
    id: 14,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage15,
  },
  {
    id: 15,
    name: "Потолочная люстра Ornella A4059PL-4AB (Artelamp)",
    price: 12300,
    sell: 8540,
    quantity: 463,
    imageUrl: ItemImage16,
  },
];
