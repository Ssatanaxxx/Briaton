// hooks/useFilters.ts
import { useQueryClient } from "@tanstack/react-query";
import { FilterStoreShema, type Filters } from "../api/filtersStore";

export const useFilters = () => {
  const queryClient = useQueryClient();

  // Получение текущих фильтров
  const getFilters = (): Filters => {
    return FilterStoreShema.parse(
      queryClient.getQueryData(["filters"]) ?? {
        sortBy: "price-min",
        searchQuery: "",
      }
    );
  };

  // Установка новых фильтров
  const setFilters = (newFilters: Partial<Filters>) => {
    const current = getFilters();
    queryClient.setQueryData(["filters"], { ...current, ...newFilters });
  };

  // Сброс фильтров
  const resetFilters = () => {
    queryClient.setQueryData(["filters"], {
      sortBy: "price-min",
      searchQuery: "",
    });
  };

  return { getFilters, setFilters, resetFilters };
};
