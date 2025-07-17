import { Products } from "../../../api/Products";
import IconBusket from "../../../assets/sprite/icon-basket.svg?react"


interface ProductCardVisualProps {
    item: Products[]
    items?: Products;
}


const ProductCardVisual = ({ item }: ProductCardVisualProps) => {
    return (
        <>
            {item.map((element) => (
                <div className="product-card__visual" key={element.id}>
                    <img className="product-card__img" src={element.imageUrl} height="436" width="290"
                        alt="Изображение товара"></img>
                    <div className="product-card__more">
                        <a href="#" className="product-card__link btn btn--icon" data-add-to-cart data-product-id="1"
                            data-product-name="Потолочная люстра Ornella A4059PL-4AB (Artelamp)" data-product-price="11540">
                            <span className="btn__text">В корзину</span>
                            <IconBusket width={24} height={24} aria-hidden="true" />
                        </a>
                        <a href="#" className="product-card__link btn btn--icon" data-add-to-cart data-product-id="1"
                            data-product-name="Потолочная люстра Ornella A4059PL-4AB (Artelamp)" data-product-price="11540">
                            <span className="btn__text">Подробнее</span>
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductCardVisual;