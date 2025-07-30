import { useMemo } from "react";
import { Product } from "../api/Products";
import { useProductFilterStore } from "./useProductFilterStore";

export const useFilteredProducts = (products: Product[]) => {
  const filters = useProductFilterStore((state) => ({
    searchQuery: state.searchQuery,
    status: state.status,
    sort: state.sort,
    categories: state.categories,
    priceRange: state.priceRange,
  }));

  return useMemo(() => {
    return products
      .filter((product) => {
        // Фильтр по поиску
        if (
          filters.searchQuery &&
          !product.name
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase())
        ) {
          return false;
        }

        // Фильтр по наличию
        if (filters.status === "in-stock" && product.quantity <= 0) {
          return false;
        }

        // Фильтр по категории
        if (
          filters.categories.length > 0 &&
          product.category &&
          !filters.categories.includes(product.category)
        ) {
          return false;
        }

        // Фильтр по цене
        if (
          product.price < filters.priceRange[0] ||
          product.price > filters.priceRange[1]
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        // Сортировка
        switch (filters.sort) {
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
  }, [products, filters]);
};
