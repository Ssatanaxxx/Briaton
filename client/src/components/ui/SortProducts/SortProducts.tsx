import { Filters } from "../../../api/filtersStore";
import { useFilters } from "../../../hooks/useFilters";

const SortProducts = () => {
    const { getFilters, setFilters } = useFilters();
    const { sortBy, searchQuery } = getFilters();
    console.log('Current sortBy:', sortBy);
    return (
        <>
            <p className="catalog__sort-text">Сортировать по прайсу:</p>
            <select
                className="catalog__sort-select"
                name="sort"
                value={sortBy}
                onChange={(e) => setFilters({ sortBy: e.target.value as Filters['sortBy'] })}
            >
                <option value="price-min">Сначала дешёвые</option>
                <option value="price-max">Сначала дорогие</option>
                <option value="rating-max">Сначала популярные</option>
            </select>

            <p className="catalog__sort-text">Сортировать по названию:</p>
            <input
                type="text"
                name="text"
                value={searchQuery}
                onChange={(e) => setFilters({ searchQuery: e.target.value })}
            />
        </>
    )
}

export default SortProducts;