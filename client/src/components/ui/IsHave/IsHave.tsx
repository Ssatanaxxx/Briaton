import { memo, useState } from "react";

const IsHave = memo(() => {
    const [selectedValue, setSelectedValue] = useState("all-item");

    const radioItems = [
        { id: "instock", value: "instock", label: "В наличии" },
        { id: "all-item", value: "all-item", label: "Все" },
    ];

    return (
        <fieldset className="catalog-form__fieldset">
            <legend className="catalog-form__legend">Статус</legend>
            <ul className="catalog-form__list-row">
                {radioItems.map((item) => (
                    <li key={item.id} className="catalog-form__item-row">
                        <div className="custom-radio">
                            <input
                                className="visually-hidden custom-radio__field"
                                id={item.id}
                                type="radio"
                                name="status"
                                checked={selectedValue === item.value}
                                onChange={() => setSelectedValue(item.value)}
                                value={item.value}
                            />
                            <label className="custom-radio__label" htmlFor={item.id}>
                                <span className="custom-radio__toggle"></span>
                                <span className="custom-radio__text">{item.label}</span>
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </fieldset>
    );
});

export default IsHave;