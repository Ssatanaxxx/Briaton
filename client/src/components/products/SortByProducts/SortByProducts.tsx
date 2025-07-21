import { memo, useState } from "react";
import IconCheck from "../../../assets/sprite/icon-check.svg?react";

interface CheckboxItem {
    id: string;
    name: string;
    count: number;
    className: string;
}

const Checkbox = memo(({
    item,
    checked,
    onChange
}: {
    item: CheckboxItem;
    checked: boolean;
    onChange: (checked: boolean) => void
}) => (
    <div className={`custom-checkbox custom-checkbox--${item.className}`}>
        <input
            className="visually-hidden custom-checkbox__field"
            id={item.id}
            type="checkbox"
            name="type"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            value={item.id}
        />
        <label className="custom-checkbox__label" htmlFor={item.id}>
            <span className="custom-checkbox__name">{item.name}</span>
            <IconCheck width={10} height={10} aria-hidden="true" />
            <span className="custom-checkbox__count">{item.count}</span>
        </label>
    </div>
));

const SortByProducts = memo(() => {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
        pendant: false,
        ceiling: false,
        overhead: false,
        point: false,
        nightlights: false,
    });

    const checkboxItems: CheckboxItem[] = [
        { id: "pendant", name: "Подвесные", count: 158, className: "pendant" },
        { id: "ceiling", name: "Потолочные", count: 118, className: "ceiling" },
        { id: "overhead", name: "Накладные", count: 463, className: "overhead" },
        { id: "point", name: "Точечные", count: 158, className: "point" },
        { id: "nightlights", name: "Ночники", count: 118, className: "nightlights" },
    ];

    const handleCheckboxChange = (id: string, checked: boolean) => {
        setCheckedItems(prev => ({ ...prev, [id]: checked }));
    };

    return (
        <fieldset className="catalog-form__fieldset">
            <legend className="catalog-form__legend">Светильники</legend>
            <ul className="catalog-form__list-col">
                {checkboxItems.map((item) => (
                    <li key={item.id} className="catalog-form__item-col">
                        <Checkbox
                            item={item}
                            checked={checkedItems[item.id]}
                            onChange={(checked) => handleCheckboxChange(item.id, checked)}
                        />
                    </li>
                ))}
            </ul>
        </fieldset>
    );
});

export default SortByProducts;