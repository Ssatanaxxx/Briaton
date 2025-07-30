import "./CatalogPage.css";
import SortProducts from "../../components/ui/MainChoicePage/SortProducts";
import ProductCardVisual from "../../components/products/ProductCard/ProductCardVisual";
import ProductCardList from "../../components/products/ProductCard/ProductCardList";
import { PRODUCT, Product } from "../../api/Products";
import ResetFilter from "../../components/ui/MainChoicePage/ResetFilter";
import { FieldsetSortProduct } from "../../components/ui/MainChoicePage/FieldsetSort/FieldsetSortProductCard";
import IsHave from "../../components/ui/MainChoicePage/IsHave";

interface CatalogPageProps {
    product: Product
}


export const CatalogPage = ({ product }: CatalogPageProps) => {
    return (
        <div className="container">
            <div className="catalog__container">
                <h2 className="catalog__title">Светильники</h2>
                <div className="catalog__wrapper">
                    <form action="#" method="get" className="catalog-form">
                        <ResetFilter />
                        <FieldsetSortProduct />
                        <IsHave />
                    </form>
                    <div className="catalog__products">
                        <div className="catalog__sort">
                            <SortProducts />
                        </div>
                        <div className="products-grid product-card-list product-card__info">
                            <ProductCardVisual product={product} />
                            <ProductCardList card={PRODUCT} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CatalogPage;