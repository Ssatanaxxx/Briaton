import { ProductCategory } from "../../../hooks/useProductFilterStore";

export const PRODUCT_CATEGORIES: {
  id: ProductCategory;
  label: string;
  className: string;
}[] = [
  { 
    id: 'ceiling', 
    label: 'Потолочные', 
    className: 'custom-checkbox--ceiling' 
  },
  { 
    id: 'wall', 
    label: 'Настенные', 
    className: 'custom-checkbox--wall' 
  },
  { 
    id: 'floor', 
    label: 'Напольные', 
    className: 'custom-checkbox--floor' 
  },
  { 
    id: 'spot', 
    label: 'Точечные', 
    className: 'custom-checkbox--spot' 
  },
  { 
    id: 'bundle', 
    label: 'Комплекты', 
    className: 'custom-checkbox--bundle' 
  }
];