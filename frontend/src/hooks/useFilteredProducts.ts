import { useMemo } from "react";
import { Product } from "../api/Products";
import { useProductFilterStore } from "./useProductFilterStore";

export const useFilteredProducts = (products: Product[]) => {
  const searchQuery = useProductFilterStore((state) => state.searchQuery);
  const status = useProductFilterStore((state) => state.status);
  const sort = useProductFilterStore((state) => state.sort);
  const categories = useProductFilterStore((state) => state.categories);
  const priceRange = useProductFilterStore((state) => state.priceRange);

  return useMemo(() => {
    return products
      .filter((product) => {
        // Поиск по названию
        if (
          searchQuery &&
          !product.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return false;
        }

        // Фильтр по статусу
        if (status === "in-stock" && product.quantity <= 0) {
          return false;
        }

        // Фильтр по цене
        if (product.price < priceRange[0] || product.price > priceRange[1]) {
          return false;
        }

        // Фильтр по категориям
        if (categories.length > 0 && !categories.includes(product.category)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        switch (sort) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "popular":
            return b.quantity - a.quantity;
          default:
            return 0;
        }
      });
  }, [products, searchQuery, status, sort, categories, priceRange]);
};
