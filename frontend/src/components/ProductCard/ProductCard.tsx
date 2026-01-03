import { memo, useMemo, useState } from "react";
import { Product } from "../../api/Products";
import { useCartStore } from "../../store/cartStore";
import "./ProductCard.css";
import { TiInfoLarge } from "react-icons/ti";
import { FaOpencart } from "react-icons/fa6";

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(({ product }: ProductCardProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const { formattedPrice, formattedOriginalPrice, discountPercentage } =
    useMemo(() => {
      const formattedPrice = product.price.toLocaleString("ru-RU");
      const formattedOriginalPrice =
        product.originalPrice?.toLocaleString("ru-RU");

      const discountPercentage = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

      return { formattedPrice, formattedOriginalPrice, discountPercentage };
    }, [product.price, product.originalPrice]);

  const handleAddToCart = async () => {
    if (isAdding) return;

    setIsAdding(true);
    try {
      await addItem(product.id, 1);
      console.log("Товар добавлен в корзину:", product.name);
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__visual">
        <img
          className="product-card__img"
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/placeholder.jpg";
          }}
        />
        <div className="product-card__more">
          <button
            className="product-card__link btn btn--icon"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            <span className="btn__text">
              {isAdding ? "Добавляем..." : "В корзину"}
            </span>
            <FaOpencart
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div className="product-card__info">
        <h2 className="product-card__title">{product.name}</h2>

        <div className="product-card__prices">
          {product.originalPrice && formattedOriginalPrice && (
            <span className="product-card__old">
              <span className="product-card__old-number">
                {formattedOriginalPrice}
              </span>
              <span className="product-card__old-add">₽</span>
            </span>
          )}

          <span className="product-card__price">
            <span className="product-card__price-number">{formattedPrice}</span>
            <span className="product-card__price-add">₽</span>
            {discountPercentage > 0 && (
              <span className="product-card__discount">
                -{discountPercentage}%
              </span>
            )}
          </span>
        </div>

        <div className="product-card__cloud-tooltip">
          <button
            className="cloud-tooltip__btn"
            aria-label="Информация о товаре"
          >
            <TiInfoLarge
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
});

export default ProductCard;
