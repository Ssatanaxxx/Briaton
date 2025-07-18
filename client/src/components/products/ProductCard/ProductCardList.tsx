import { Product } from "../../../api/Products"
import ProductCard from "./ProductCard"


interface ProductCardListProps {
    card?: Product[]
}


const ProductCardList = ({ card = [] }: ProductCardListProps) => {

    if(!card) {
        return <div>Нет товаров</div>
    }
    return (
        <ul className="products-grid product-card-list">
            {card.map((item) => (
                <li key={item.id} className="product-card__item">
                    <ProductCard product={item}  />
                </li>
            ))}
        </ul>
    )
}

export default ProductCardList