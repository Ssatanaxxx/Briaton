// import IconCheck from "../../../assets/sprite/icon-check.svg?react"


const SortByProducts = () => {
    return (
        <fieldset className="catalog-form__fieldset">
            <legend className="catalog-form__legend">Светильники</legend>
            <ul className="catalog-form__list-col">
                <li className="catalog-form__item-col">
                    <div className="custom-checkbox custom-checkbox--pendant">
                        <input className="visually-hidden custom-checkbox__field" id="pendant" type="checkbox" name="type"
                            value="pendant"></input>
                        <label className="custom-checkbox__label" htmlFor="pendant">
                            <span className="custom-checkbox__name">
                                Подвесные
                            </span>
                            {/* <IconCheck width={10} height={10} aria-hidden="true" /> */}
                            <span className="custom-checkbox__count">158</span>
                        </label>
                    </div>
                </li>
                <li className="catalog-form__item-col">
                    <div className="custom-checkbox custom-checkbox--ceiling">
                        <input className="visually-hidden custom-checkbox__field" id="ceiling" type="checkbox" name="type"
                            value="ceiling"></input>
                        <label className="custom-checkbox__label" htmlFor="ceiling">
                            <span className="custom-checkbox__name">
                                Потолочные
                            </span>
                            {/* <IconCheck width={10} height={10} aria-hidden="true" /> */}
                            <span className="custom-checkbox__count">118</span>
                        </label>
                    </div>
                </li>
                <li className="catalog-form__item-col">
                    <div className="custom-checkbox custom-checkbox--overhead">
                        <input className="visually-hidden custom-checkbox__field" id="overhead" type="checkbox" name="type"
                            value="overhead"></input>
                        <label className="custom-checkbox__label" htmlFor="overhead">
                            <span className="custom-checkbox__name">
                                Накладные
                            </span>
                            {/* <IconCheck width={10} height={10} aria-hidden="true" /> */}
                            <span className="custom-checkbox__count">463</span>
                        </label>
                    </div>
                </li>
                <li className="catalog-form__item-col">
                    <div className="custom-checkbox custom-checkbox--point">
                        <input className="visually-hidden custom-checkbox__field" id="point" type="checkbox" name="type"
                            value="point"></input>
                        <label className="custom-checkbox__label" htmlFor="point">
                            <span className="custom-checkbox__name">
                                Точечные
                            </span>
                            {/* <IconCheck width={10} height={10} aria-hidden="true" /> */}
                            <span className="custom-checkbox__count">158</span>
                        </label>
                    </div>
                </li>
                <li className="catalog-form__item-col">
                    <div className="custom-checkbox custom-checkbox--nightlights">
                        <input className="visually-hidden custom-checkbox__field" id="nightlights" type="checkbox" name="type"
                            value="nightlights"></input>
                        <label className="custom-checkbox__label" htmlFor="nightlights">
                            <span className="custom-checkbox__name">
                                Ночники
                            </span>
                            {/* <IconCheck width={10} height={10} aria-hidden="true" /> */}
                            <span className="custom-checkbox__count">118</span>
                        </label>
                    </div>
                </li>
            </ul>
        </fieldset>
    )
}

export default SortByProducts;