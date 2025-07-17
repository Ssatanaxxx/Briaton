// import IconLocation from "../../assets/sprite/icon-location.svg?react"
// import IconArrowBotton from "../../assets/sprite/icon-arrow-bottom.svg?react"

const Location = () => {
    return (
        <div className="header__location location">
            {/* <IconLocation width={24} height={24} aria-hidden="true" /> */}
            <span className="location__text">Ваш город:</span>
            <button className="location__city" type="button" id="cityToggle">
                <span className="current-city">Москва</span>
                {/* <IconArrowBotton width={9} height={6} aria-hidden="true" /> */}
            </button>
            <ul className="location__dropdown" id="cityDropdown" style={{ display: "none" }}>

                <li className="location__item">
                    <button className="location__option" data-city="Москва">Москва</button>
                </li>
                <li className="location__item">
                    <button className="location__option" data-city="Санкт-Петербург">Санкт-Петербург</button>
                </li>
                <li className="location__item">
                    <button className="location__option" data-city="Оренбург">Оренбург</button>
                </li>
                <li className="location__item">
                    <button className="location__option" data-city="Волгоград 77Н">Волгоград</button>
                </li>
            </ul>

        </div>
    )
}

export default Location;