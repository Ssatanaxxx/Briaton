
import IconBusket from "../../assets/sprite/icon-basket.svg?react"

const Busket = () => {
    return (
        <button className="header__user-btn" type="button">
            <span className="header__user-text">Корзина</span>
            <IconBusket />
        </button>
    )
}

export default Busket;