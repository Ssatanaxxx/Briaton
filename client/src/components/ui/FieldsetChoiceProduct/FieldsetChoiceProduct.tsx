

const FieldsetChoiceProduct = () => {
    return (
        <fieldset className="catalog-form__fieldset">
            <legend className="catalog-form__legend">Статус</legend>
            <ul className="catalog-form__list-row">
                <li className="catalog-form__item-row">
                    <div className="custom-radio">
                        <input className="visually-hidden custom-radio__field" value="instock" id="instock" type="radio" name="status"></input>
                        <label className="custom-radio__label" htmlFor="instock">
                            <span className="custom-radio__toggle"></span>
                            <span className="custom-radio__text">В наличии</span>
                        </label>
                    </div>
                </li>
                <li className="catalog-form__item-row">
                    <div className="custom-radio">
                        <input className="visually-hidden custom-radio__field"
                            value="all-item" checked id="all-item" type="radio" name="status"></input>
                        <label className="custom-radio__label" htmlFor="all-item">
                            <span className="custom-radio__toggle"></span>
                            <span className="custom-radio__text">Все</span>
                        </label>
                    </div>
                </li>
            </ul>
        </fieldset>
    )
}

export default FieldsetChoiceProduct;