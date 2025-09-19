import { memo } from "react";
import {
  STATUS_OPTIONS,
  useProductFilterStore,
} from "../../../hooks/useProductFilterStore";
import "./IsHave.css";
const STATUS_RADIO_OPTIONS = [
  {
    id: "instock",
    value: STATUS_OPTIONS.IN_STOCK,
    label: "В наличии",
  },
  {
    id: "all-item",
    value: STATUS_OPTIONS.ALL,
    label: "Все",
  },
];

const IsHave = memo(() => {
  const { status, setStatus } = useProductFilterStore();

  return (
    <fieldset className="catalog-form__fieldset">
      <legend className="catalog-form__legend">Статус</legend>
      <ul className="catalog-form__list-row">
        {STATUS_RADIO_OPTIONS.map((option) => (
          <li key={option.id} className="catalog-form__item-row">
            <div className="custom-radio">
              <input
                className="visually-hidden custom-radio__field"
                id={option.id}
                type="radio"
                name="status"
                checked={status === option.value}
                onChange={() => setStatus(option.value)}
              />
              <label className="custom-radio__label" htmlFor={option.id}>
                <span className="custom-radio__toggle"></span>
                <span className="custom-radio__text">{option.label}</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </fieldset>
  );
});

export default IsHave;
