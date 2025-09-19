import { memo, useMemo } from "react";
import { Product } from "../../api/Products";
import IconI from "../../assets/sprite/icon-i.svg?react";
import ProductCardVisual from "./ProductCardVisual";
import "./ProductCard.css";
interface ProductCardProps {
  product: Product;
  price: number;
  originalPrice: number;
  quantity: number;
  garant: number;
}

const ProductCard = memo(
  ({ product, originalPrice, price, quantity, garant }: ProductCardProps) => {
    const discountedPrice = price
      ? Math.round(originalPrice * (1 - price))
      : originalPrice;

    const [formattedPrice, formattedOriginalPrice, discountPercentage] =
      useMemo(() => {
        const formattedPrice = product.price.toLocaleString("ru-RU");
        const formattedOriginalPrice =
          product.originalPrice?.toLocaleString("ru-RU");

        return [formattedPrice, formattedOriginalPrice, discountedPrice];
      }, [product.price, product.originalPrice]);

    return (
      <div className="product-card">
        <div className="product-card__visual">
          <ProductCardVisual product={product} />
        </div>

        <div className="product-card__info">
          <h2 className="product-card__title">{product.name}</h2>

          <div className="product-card__prices">
            {discountedPrice && formattedOriginalPrice && (
              <span className="product-card__old">
                <span className="product-card__old-number">
                  {formattedOriginalPrice}
                </span>
                <span className="product-card__old-add">₽</span>
              </span>
            )}

            <span className="product-card__price">
              <span className="product-card__price-number">
                {formattedPrice}
              </span>
              <span className="product-card__price-add">₽</span>
              {discountedPrice && (
                <span className="product-card__discount">
                  -{discountPercentage}%
                </span>
              )}
            </span>
          </div>

          {/* Cloud Tooltip - правильное расположение */}
          <div className="product-card__cloud-tooltip">
            <button
              className="cloud-tooltip__btn"
              aria-label="Информация о товаре"
            >
              <IconI
                loading="lazy"
                className="cloud-tooltip__icon"
                width={16}
                height={16}
                aria-hidden="true"
              />
            </button>

            <div className="cloud-tooltip__content">
              <div className="cloud-tooltip__header">
                <h4>Информация о товаре</h4>
              </div>
              <div className="cloud-tooltip__body">
                <p>В наличии: {product.quantity} шт.</p>
                <p>Бесплатная доставка</p>
                <p>Гарантия 2 года</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ProductCard;
