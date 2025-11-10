import "./CatalogPage.css";
import { useEffect, useState } from "react";
import { Product, getProducts } from "../../api/Products";
import { ProductFilters } from "../../components/ProductFilters/ProductFilters";
import SortProducts from "../../components/UI-Kit/SortProducts/SortProducts";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import ProductCard from "../../components/ProductCard/ProductCard";

export const CatalogPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const filteredProducts = useFilteredProducts(products);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="container">
      <div className="catalog__container">
        <h2 className="catalog__title">Светильники</h2>

        <div className="catalog__wrapper">
          <aside className="catalog__filters">
            <ProductFilters />
          </aside>

          <main className="catalog__content">
            <SortProducts />

            <ul className="products-grid product-card-list">
              {filteredProducts.map((product) => (
                <li key={product.id} className="product-card__item">
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>

            {filteredProducts.length === 0 && (
              <div className="no-products">
                {products.length === 0
                  ? "Товары не найдены"
                  : "Нет товаров, соответствующих фильтрам"}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage