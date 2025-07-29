import { memo } from "react";
import IconFilter from "../../../assets/sprite/icon-filter.svg?react"

const ResetFilter = memo(() => {

    return (
        <button className="catalog-form__reset" type="reset">
            <IconFilter width={24} height={24} aria-hidden="true" />
            <span className="catalog-form__reset-text">Сбросить фильтры</span>
        </button>
    );
});

export default ResetFilter;