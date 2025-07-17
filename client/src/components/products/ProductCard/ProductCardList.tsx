import { Products } from "../../../api/Products"
import ProductCard from "./ProductCard"


interface ProductCardListProps {
    card: Products[]
}


const ProductCardList = ({ card }: ProductCardListProps) => {
    return (
        <ul className="product-card__info">
            {card.map((item) => (
                <li className="product-card__visual" key={item.id}>
                    <ProductCard
                        items={item} />
                </li>

            ))}
        </ul>
    )
}

export default ProductCardList