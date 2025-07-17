import { Products } from "../../../api/Products";
import IconI from "../../../assets/sprite/icon-i.svg?react"
import ProductCardVisual from "../ProductCardVisual/ProductCardVisual";

interface ProductCardProps {
    items: Products
}

const ProductCard = ({ items }: ProductCardProps) => {
    return (
        <>
            <div className="product-card__info">
                <ProductCardVisual item={[]} />
            </div>
            <div className="product-card__info">
                <h2 className="product-card__title">{items.name}</h2>
                <span className="product-card__old">
                    <span className="product-card__old-number">{items.sell.toLocaleString('ru-RU')}</span>
                    <span className="product-card__old-add">₽</span>
                </span>
                <span className="product-card__price">
                    <span className="product-card__price-number">{items.price.toLocaleString('ru-RU')}</span>
                    <span className="product-card__price-add">₽</span>
                </span>
                <div className="product-card__tooltip tooltip">
                    <button className="tooltip__btn" aria-label="Показать подсказку">
                        <IconI className="tooltip__icon" width={5} height={10} aria-hidden="true" />
                        <div className="tooltip__content">
                            <div className="product-card__quantity"> В наличии: {items.quantity} шт.</div>
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
        </>
    )
}


export default ProductCard;