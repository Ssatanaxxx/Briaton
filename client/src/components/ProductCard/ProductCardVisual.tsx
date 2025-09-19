import { memo } from "react";
import { Product } from "../../api/Products";
import IconBusket from "../../assets/sprite/icon-basket.svg?react";
import "./ProductCard.css"

interface ProductCardVisualProps {
    product: Product;
}

const ProductCardVisual = memo(({ product }: ProductCardVisualProps) => {
    if (!product) {
        return <div>Товар не загуржен</div>;
    }

    const buttonProps = {
        "data-product-id": product.id,
        "data-product-name": product.name,
        "data-product-price": product.price,
    };

    return (
        <div className="product-card__visual">
            <img
                className="product-card__img"
                src={product.imageUrl}
                alt={product.name}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.jpg' }}
            />
            <div className="product-card__more">
                <a href="#" className="product-card__link btn btn--icon" {...buttonProps}>
                    <span className="btn__text">В корзину</span>
                    <IconBusket loading="lazy" width={24} height={24} aria-hidden="true" />
                </a>
                <a href="#" className="product-card__link btn btn--icon" {...buttonProps}>
                    <span className="btn__text">Подробнее</span>
                </a>
            </div>
        </div>
    );
});

export default ProductCardVisual;