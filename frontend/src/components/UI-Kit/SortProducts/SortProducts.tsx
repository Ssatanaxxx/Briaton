import {
  SORT_OPTIONS,
  useProductFilterStore,
} from "../../../hooks/useProductFilterStore";

const SortProducts = () => {
  const { sort, setSortOption } = useProductFilterStore();

  return (
    <div className="catalog__products">
      <div className="catalog__sort">
        <p className="catalog__sort-text">Сортировать по:</p>
        <select
          className="catalog__sort-select"
          value={sort}
          name="sort"
          onChange={(e) => setSortOption(e.target.value as any)}
        >
          <option value={SORT_OPTIONS.PRICE_ASC}>Сначала дешёвые</option>
          <option value={SORT_OPTIONS.PRICE_DESC}>Сначала дорогие</option>
          <option value={SORT_OPTIONS.POPULAR}>Сначала популярные</option>
        </select>
      </div>
    </div>
  );
};

export default SortProducts;
