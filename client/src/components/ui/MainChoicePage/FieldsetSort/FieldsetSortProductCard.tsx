import IconCheck from "../../../../assets/sprite/icon-check.svg?react";
import { useProductFilterStore } from "../../../../hooks/useProductFilterStore";
import type { ProductCategory } from "../../../../hooks/useProductFilterStore";

const PRODUCT_CATEGORIES: {
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

export const FieldsetSortProduct = () => {
  const categories = useProductFilterStore((state) => state.categories);
  const toggleCategory = useProductFilterStore((state) => state.toggleCategory);

  return (
    <fieldset className="catalog-form__fieldset">
      <legend className="catalog-form__legend">Категории</legend>
      <ul className="catalog-form__list-col">
        {PRODUCT_CATEGORIES.map((category) => (
          <li key={category.id} className="catalog-form__item-col">
            <div className={`custom-checkbox ${category.className}`}>
              <input
                className="visually-hidden custom-checkbox__field"
                id={category.id}
                type="checkbox"
                checked={categories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
              />
              <label className="custom-checkbox__label" htmlFor={category.id}>
                <span className="custom-checkbox__name">{category.label}</span>
                <IconCheck 
                  className="custom-checkbox__icon" 
                  width="10" 
                  height="10" 
                  aria-hidden="true" 
                />
              </label>
            </div>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};