import { create } from "zustand";

export const SORT_OPTIONS = {
  PRICE_ASC: "price-asc",
  PRICE_DESC: "price-desc",
  POPULAR: "popular",
} as const;

export const STATUS_OPTIONS = {
  ALL: "all",
  IN_STOCK: "in-stock",
} as const;

export type ProductCategory = "ceiling" | "wall" | "floor" | "spot" | "bundle";

type ProductFilterStatus = typeof STATUS_OPTIONS[keyof typeof STATUS_OPTIONS];
export type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS];

interface ProductFilters {
  searchQuery: string;
  status: ProductFilterStatus;
  sort: SortOption;
  categories: ProductCategory[];
  priceRange: [number, number];
}

interface FilterActions {
  setSearchQuery: (query: string) => void;
  setStatus: (status: ProductFilterStatus) => void;
  setSortOption: (sort: SortOption) => void;
  toggleCategory: (category: ProductCategory) => void;
  setPriceRange: (range: [number, number]) => void;
  resetFilters: () => void;
}

const initialState: ProductFilters = {
  searchQuery: "",
  status: STATUS_OPTIONS.ALL,
  sort: SORT_OPTIONS.POPULAR,
  categories: [],
  priceRange: [0, 50000],
};

export const useProductFilterStore = create<ProductFilters & FilterActions>(
  (set) => ({
    ...initialState,
    setSearchQuery: (query) => set({ searchQuery: query }),
    setStatus: (status) => set({ status }),
    setSortOption: (sort) => set({ sort }),
    toggleCategory: (category) => 
      set((state) => ({
        categories: state.categories.includes(category)
          ? state.categories.filter((c) => c !== category)
          : [...state.categories, category],
      })),
    setPriceRange: (range) => set({ priceRange: range }),
    resetFilters: () => set(initialState),
  })
);