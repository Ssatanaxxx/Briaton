import { memo } from "react";
import { useProductFilterStore } from "../../hooks/useProductFilterStore";
import { LuFilterX } from "react-icons/lu";
import "./ProductFilters.css";

const STATUS_OPTIONS = [
  { id: "instock", value: "in-stock", label: "В наличии" },
  { id: "all-item", value: "all", label: "Все" },
] as const;

// Фиксированные категории
const CATEGORY_OPTIONS = [
  { id: "ceiling", label: "Люстры" },
  { id: "wall", label: "Светильники" },
  { id: "floor", label: "Торшеры" },
  { id: "spot", label: "Споты" },
  { id: "bundle", label: "Комплекты" },
] as const;

export const ProductFilters = memo(() => {
  const {
    categories: selectedCategories,
    status,
    searchQuery,
    toggleCategory,
    setStatus,
    setSearchQuery,
    resetFilters,
  } = useProductFilterStore();

  return (
    <div className="product-filters">
      {/* Заголовок и сброс */}
      <div className="product-filters__header">
        <h3 className="product-filters__title">Фильтры</h3>
        <button
          className="product-filters__reset"
          type="button"
          onClick={resetFilters}
        >
          <LuFilterX width={20} height={20} aria-hidden="true" />
          <span>Сбросить всё</span>
        </button>
      </div>

      {/* Поиск */}
      <div className="product-filters__section">
        <label htmlFor="search" className="product-filters__label">
          Поиск
        </label>
        <input
          id="search"
          type="text"
          placeholder="Название товара..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="product-filters__search"
        />
      </div>

      {/* Категории */}
      <fieldset className="product-filters__section">
        <legend className="product-filters__legend">Категории</legend>
        <div className="product-filters__categories">
          {CATEGORY_OPTIONS.map((category) => (
            <div key={category.id} className="product-filters__category">
              <input
                className="visually-hidden"
                id={`category-${category.id}`}
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
              />
              <label
                className="product-filters__checkbox-label"
                htmlFor={`category-${category.id}`}
              >
                <span className="product-filters__checkbox-text">
                  {category.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Статус */}
      <fieldset className="product-filters__section">
        <legend className="product-filters__legend">Статус</legend>
        <div className="product-filters__status">
          {STATUS_OPTIONS.map((option) => (
            <div key={option.id} className="product-filters__status-option">
              <input
                className="visually-hidden"
                id={option.id}
                type="radio"
                name="status"
                checked={status === option.value}
                onChange={() => setStatus(option.value)}
              />
              <label
                className="product-filters__radio-label"
                htmlFor={option.id}
              >
                <span className="product-filters__radio-toggle"></span>
                <span className="product-filters__radio-text">
                  {option.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
});
