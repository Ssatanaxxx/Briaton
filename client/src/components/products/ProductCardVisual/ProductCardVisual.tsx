import { Product } from "../../../api/Products";
import IconBusket from "../../../assets/sprite/icon-basket.svg?react";

interface ProductCardVisualProps {
    product: Product;
}

const ProductCardVisual = ({ product }: ProductCardVisualProps) => {
    console.log('Product data:', product);

    if (!product) {
        return <div>Товар не загуржен</div>
    }
    return (
        <div className="product-card__visual" key={product.id}>
            <img
                className="product-card__img"
                src={product.imageUrl}
                height="436"
                width="290"
                alt={product.name}
                loading="lazy"
                onError={(e) => {(e.currentTarget as HTMLImageElement).src = '/placeholder.jpg'}}
            />
            <div className="product-card__more">
                <a
                    href="#"
                    className="product-card__link btn btn--icon"
                    data-add-to-cart
                    data-product-id={product.id}
                    data-product-name={product.name}
                    data-product-price={product.price}
                >
                    <span className="btn__text">В корзину</span>
                    <IconBusket width={24} height={24} aria-hidden="true" />
                </a>
                <a
                    href="#"
                    className="product-card__link btn btn--icon"
                    data-add-to-cart
                    data-product-id={product.id}
                    data-product-name={product.name}
                    data-product-price={product.price}
                >
                    <span className="btn__text">Подробнее</span>
                </a>
            </div>
        </div>
    );
};

export default ProductCardVisual;