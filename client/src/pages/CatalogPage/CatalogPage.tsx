import "./CatalogPage.css";
import ProductCardList from "../../components/ProductCard/ProductCardList";
import { PRODUCT } from "../../api/Products";
import ResetFilter from "../../components/ui/ResetFilter/ResetFilter";
import { FieldsetSortProduct } from "../../components/ui/FieldsetSort/FieldsetSortProductCard";
import IsHave from "../../components/ui/isHave/IsHave";
import { useMemo } from "react";
import { useProductFilterStore } from "../../hooks/useProductFilterStore";

export const CatalogPage = () => {
  const { categories } = useProductFilterStore();

  const filteredProducts = useMemo(() => {
    return PRODUCT.filter((product) => {
      if (categories.length > 0 && product.category) {
        return categories.includes(product.category);
      }
      return true;
    });
  }, [categories]);

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
            <div className="products-grid product-card-list product-card__info">
              <ProductCardList card={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;