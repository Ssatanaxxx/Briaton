import { Product } from "../../../api/Products";
import IconI from "../../../assets/sprite/icon-i.svg?react";
import ProductCardVisual from "../ProductCardVisual/ProductCardVisual";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product = [] }: ProductCardProps) => {
    const hasDiscount = product.originalPrice !== undefined;

    return (
        <div className="product-card">
            <div className="product-card__visual">
                <ProductCardVisual product={product} />
            </div>

            <div className="product-card__info">
                <h2 className="product-card__title">{product.name}</h2>

                <div className="product-card__prices">
                    {hasDiscount && (
                        <span className="product-card__old">
                            <span className="product-card__old-number">
                                {product.originalPrice?.toLocaleString('ru-RU')}
                            </span>
                            <span className="product-card__old-add">₽</span>
                        </span>
                    )}

                    <span className="product-card__price">
                        <span className="product-card__price-number">
                            {product.price.toLocaleString('ru-RU')}
                        </span>
                        <span className="product-card__price-add">₽</span>
                        {hasDiscount && (
                            <span className="product-card__discount">
                                -{Math.round(
                                    ((product.originalPrice! - product.price) /
                                        product.originalPrice!) * 100
                                )}%
                            </span>
                        )}
                    </span>
                </div>

                <div className="product-card__tooltip tooltip">
                    <button className="tooltip__btn" aria-label="Показать подсказку">
                        <IconI loading={"lazy"} className="tooltip__icon" width={5} height={10} aria-hidden="true" />
                    </button>

                    <div className="tooltip__content">
                        <div className="product-card__quantity">
                            В наличии: {product.quantity} шт.
                        </div>
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
    );
};

export default ProductCard;