import { create } from "zustand";
import { CartItem, getCart, addToCart } from "../api/cart";

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
  loadCart: () => Promise<void>;
  addItem: (productId: number, quantity?: number) => Promise<void>;
  removeItem: (cartItemId: number) => void;
  getTotalCount: () => number;
  clearCart: () => void;
  clearError: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isLoading: false,
  error: null,

  // Загрузка корзины с сервера
  loadCart: async () => {
    set({ isLoading: true, error: null });
    try {
      const items = await getCart();
      set({ items });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Неизвестная ошибка";
      set({ error: errorMessage });
      console.error("❌ Ошибка загрузки корзины:", errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  // Добавление товара
  addItem: async (productId: number, quantity: number = 1) => {
    set({ error: null });
    try {
      await addToCart({ productId, quantity });

      // Вместо полной перезагрузки, обновляем локально
      set((state) => {
        const existingItem = state.items.find((i) => i.productId === productId);
        if (existingItem) {
          return {
            items: state.items.map((i) =>
              i.productId === productId
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
          };
        } else {
          // Если нового товара нет в корзине, добавляем с quantity
          const newItem: CartItem = {
            id: Date.now(), // временный id, лучше взять с сервера
            productId,
            quantity,
          };
          return { items: [...state.items, newItem] };
        }
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Неизвестная ошибка";
      set({ error: errorMessage });
      console.error("❌ Ошибка добавления в корзину:", errorMessage);
    }
  },

  // Удаление товара локально
  removeItem: (cartItemId: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== cartItemId),
    }));
  },

  getTotalCount: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  clearCart: () => set({ items: [] }),

  // Авто-сброс ошибок через 3 секунды
  clearError: () => set({ error: null }),
}));
