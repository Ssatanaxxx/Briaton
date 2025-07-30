
import IconBusket from "../../assets/sprite/icon-basket.svg?react"

const Busket = () => {
    return (
        <div className="header__user-list">
            <button className="header__user-btn" type="button">
                <span className="header__user-text">Корзина</span>
                <IconBusket className="header__user-icon" width={24} height={24} aria-hidden="true" />
                <span className="header__user-count"></span>
            </button>
            <div className="header__basket basket">
                <ul className="basket__list">
                </ul>
                <div className="basket__empty-block">Корзина пока пуста</div>
            </div>

        </div>
    )
}

export default Busket;