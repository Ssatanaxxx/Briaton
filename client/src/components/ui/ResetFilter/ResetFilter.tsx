import { memo } from "react";
import IconFilter from "../../../assets/sprite/icon-filter.svg?react"
import { useProductFilterStore } from "../../../hooks/useProductFilterStore";
import "./ResetFilter.css"

const ResetFilter = memo(() => {
    const resetFilters = useProductFilterStore(state => state.resetFilters)

    return (
        <button
         className="catalog-form__reset"
          type="button"
          onClick={resetFilters}
          >
            <IconFilter width={24} height={24} aria-hidden="true" />
            <span className="catalog-form__reset-text">Сбросить фильтры</span>
        </button>
    );
});

export default ResetFilter;