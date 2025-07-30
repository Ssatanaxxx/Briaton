import { FC } from "react";
import { MAIN_PAGE_PRODUCTS } from "./interface"

interface MainPageProductListProps {
    products: MAIN_PAGE_PRODUCTS[];
}

const MainPageProductList: FC<MainPageProductListProps> = ({ products } ) => {
    return (
        <ul className="main-page__product-list">
            {products.map((product) => (
                <li key={product.id} className="main-page__product-item">
                    <h4 className="main-page__item-text">{product.title}</h4>
                </li>
            ))}

        </ul>
    )
}

export default MainPageProductList;