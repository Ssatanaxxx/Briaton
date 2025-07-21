import { memo } from "react";
import IconFilter from "../../../assets/sprite/icon-filter.svg?react";
import { useFilters } from "../../../hooks/useFilters";

const ResetFilter = memo(() => {
    const { resetFilters } = useFilters();

    return (
        <button
            onClick={resetFilters}
            title="Вернуть стандартные настройки фильтров"
            className="catalog-form__reset"
            type="button"
            aria-label="Сбросить все фильтры"
        >
            <IconFilter width={24} height={24} aria-hidden="true" />
            <span className="catalog-form__reset-text">Сбросить фильтры</span>
        </button>
    );
});

export default ResetFilter;