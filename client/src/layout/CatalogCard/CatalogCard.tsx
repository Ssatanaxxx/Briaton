import Item1 from "../../assets/item-1.png?react"
// import Item2 from "../../assets/item-2.png?react"
// import Item3 from "../../assets/item-3.png?react"
// import Item4 from "../../assets/item-4.png?react"
// import Item5 from "../../assets/item-5.png?react"
// import Item6 from "../../assets/item-6.png?react"
// import Item7 from "../../assets/item-7.png?react"
// import Item8 from "../../assets/item-8.png?react"
// import Item9 from "../../assets/item-9.png?react"
// import Item10 from "../../assets/item-10.png?react"
// import Item11 from "../../assets/item-11.png?react"
// import Item12 from "../../assets/item-12.png?react"
// import Item13 from "../../assets/item-13.png?react"
// import Item14 from "../../assets/item-14.png?react"
// import Item15 from "../../assets/item-15.png?react"
// import Item16 from "../../assets/item-16.png?react"

import { products } from "../../../db.json";


import IconBusket from "../../assets/sprite/icon-basket.svg?react"
import IconI from "../../assets/sprite/icon-i.svg?react"


const CatalogCard = () => {
    return (
        <div className=" products-grid product-card-list">
            <div className="product-card__visual ">
                <Item1 className="product-card__img" height={436} width={290} alt="Изображение товара" />
                <div className="product-card__more">
                    <a href="#" className="product-card__link btn btn--icon" data-add-to-cart data-product-id="1"
                        data-product-name="Потолочная люстра Ornella A4059PL-4AB (Artelamp)" data-product-price="11540">
                        <span className="btn__text">В корзину</span>
                        <IconBusket width={24} height={24} aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="product-card__info">
                <h2 className="product-card__title">{products.}</h2>
                <span className="product-card__old">
                    <span className="product-card__old-number">15 300</span>
                    <span className="product-card__old-add">₽</span>
                </span>
                <span className="product-card__price">
                    <span className="product-card__price-number">11 540</span>
                    <span className="product-card__price-add">₽</span>
                </span>
                <div className="product-card__tooltip tooltip">
                    <button className="tooltip__btn" aria-label="Показать подсказку">
                        <IconI className="tooltip__icon" width={5} height={10} aria-hidden="true" />
                        <div className="tooltip__content">
                            <div className="tooltip__item"><span>Москва:</span> В наличии (5 шт.)</div>
                            <div className="tooltip__item"><span>Санкт-Петербург:</span> В наличии (3 шт.)</div>
                            <div className="tooltip__item"><span>Оренбург:</span> Нет в наличии</div>
                            <div className="tooltip__item"><span>Волгоград:</span> Под заказ (2-3 дня)</div>
                        </div>
                    </button>

                    <div className="tooltip__content">
                        <span className="tooltip__text">Наличие товара по городам:</span>
                        <ul className="tooltip__list">
                            <li className="tooltip__item">
                                <span className="tooltip__text">Москва: <span className="tooltip__count">454</span></span>
                            </li>
                            <li className="tooltip__item">
                                <span className="tooltip__text">Оренбург: <span className="tooltip__count">381</span></span>
                            </li>
                            <li className="tooltip__item">
                                <span className="tooltip__text">Санкт-Петербург: <span className="tooltip__count">15</span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CatalogCard;