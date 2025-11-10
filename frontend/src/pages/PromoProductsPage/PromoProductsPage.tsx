import "./PromoProductsPage.css";

import { useEffect, useState } from "react";
import { Product, getProducts } from "../../api/Products";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  IconArrowNext,
  IconArrowPrev,
} from "../../components/UI-Kit/Icons/Icons";

export function PromoProductsPage() {
  const [promoProducts, setPromoProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loadPromoProducts = async () => {
      try {
        const allProducts = await getProducts();
        const promoItems = allProducts.filter((product) => product.isPromo);
        setPromoProducts(promoItems);
      } catch (error) {
        console.error("Ошибка загрузки акционных товаров:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPromoProducts();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === promoProducts.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? promoProducts.length - 1 : prev - 1
    );
  };

  if (loading)
    return <div className="loading">Загрузка акционных товаров...</div>;

  return (
    <div className="container">
      <div className="day-products__top">
        <h2 className="catalog__title">Товары по акции</h2>
        {promoProducts.length > 1 && (
          <div className="day-products__navigation">
            <button
              className="day-products__navigation-btn day-products__navigation-btn--prev"
              onClick={prevSlide}
              type="button"
            >
              <IconArrowPrev width={41} height={9} aria-hidden="true" />
            </button>
            <button
              className="day-products__navigation-btn day-products__navigation-btn--next"
              onClick={nextSlide}
              type="button"
            >
              <IconArrowNext width={41} height={9} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <div className="day-products__slider">
        {promoProducts.length === 0 ? (
          <div className="no-promo-products">Нет товаров по акции</div>
        ) : (
          <ul className="day-products__list">
            <li
              className="day-products__item"
              key={promoProducts[currentSlide].id}
            >
              <ProductCard product={promoProducts[currentSlide]} />
            </li>
          </ul>
        )}
      </div>

      {promoProducts.length > 1 && (
        <div className="slider-indicators">
          {promoProducts.map((_, index) => (
            <button
              key={index}
              className={`slider-indicator ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PromoProductsPage;
