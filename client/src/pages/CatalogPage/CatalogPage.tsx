import "./CatalogPage.css";
import ResetFilter from "../../components/ui/ResetFilter/ResetFilter";
import IsHave from "../../components/ui/IsHave/IsHave";
import SortProducts from "../../components/ui/SortProducts/SortProducts";
import ProductCardVisual from "../../components/products/ProductCardVisual/ProductCardVisual";
import ProductCardList from "../../components/products/ProductCard/ProductCardList";
import { PRODUCT, Products } from "../../api/Products";
import SortByProducts from "../../components/products/SortByProducts/SortByProducts";


interface CatalogPageProps {
    items?: Products[];
}


export const CatalogPage = ({ items = [] }: CatalogPageProps) => {
    return (
        <div className="container">
            <h2 className="catalog__title">Светильники</h2>
            <div className="catalog__wrapper">
                <form action="#" method="get" className="catalog-form">
                    <ResetFilter />
                    <SortByProducts />
                    <IsHave />
                </form>
                <div className="catalog__products">
                    <div className="catalog__sort">
                        <SortProducts />
                    </div>
                    <div className="products-grid product-card-list product-card__info">
                        <ProductCardVisual item={items} />
                        <ProductCardList card={PRODUCT} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CatalogPage;