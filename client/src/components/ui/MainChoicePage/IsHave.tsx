import { memo } from "react";
import { STATUS_OPTIONS, useProductFilterStore } from "../../../hooks/useProductFilterStore";

const IsHave = memo(() => {
    const { status, setStatus } = useProductFilterStore()

    return (
        <fieldset className="catalog-form__fieldset">
            <legend className="catalog-form__legend">Статус</legend>
            <ul className="catalog-form__list-row">
                <li className="catalog-form__item-row">
                    <div className="custom-radio">
                        <input
                            className="visually-hidden custom-radio__field"
                            id='instock'
                            type="radio"
                            name="status"
                            checked={status === STATUS_OPTIONS.IN_STOCK}
                            onChange={() => setStatus(STATUS_OPTIONS.IN_STOCK)}
                        />
                        <label className="custom-radio__label" htmlFor={'instock'}>
                            <span className="custom-radio__toggle"></span>
                            <span className="custom-radio__text">В наличии</span>
                        </label>
                    </div>
                </li>
                <li className="catalog-form__item-row">
                    <div className="custom-radio">
                        <input
                            className="visually-hidden custom-radio__field"
                            id='all-item'
                            type="radio"
                            name="status"
                            checked={status === STATUS_OPTIONS.ALL}
                            onChange={() => setStatus(STATUS_OPTIONS.ALL)}
                        />
                        <label className="custom-radio__label" htmlFor={'instock'}>
                            <span className="custom-radio__toggle"></span>
                            <span className="custom-radio__text">Все</span>
                        </label>
                    </div>
                </li>   
            </ul>
        </fieldset>
    );
});

export default IsHave;