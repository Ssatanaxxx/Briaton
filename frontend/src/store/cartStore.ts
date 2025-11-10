import { create } from "zustand";
import { CartItem, getCart, addToCart } from "../api/cart";

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
  loadCart: () => Promise<void>;
  addItem: (productId: number, quantity?: number) => Promise<void>;
  removeItem: (cartItemId: number) => Promise<void>;
  getTotalCount: () => number;
  clearCart: () => void;
  clearError: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isLoading: false,
  error: null,

  loadCart: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log("🔄 Начинаем загрузку корзины...");
      const items = await getCart();
      console.log("✅ Корзина загружена:", items);
      set({ items });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Неизвестная ошибка";
      console.error("❌ Ошибка загрузки корзины:", errorMessage);
      set({ error: errorMessage });
    } finally {
      set({ isLoading: false });
    }
  },

  addItem: async (productId: number, quantity: number = 1) => {
    set({ error: null });
    try {
      console.log(`🔄 Добавляем товар ${productId} в корзину...`);
      await addToCart({ productId, quantity });
      console.log("✅ Товар добавлен, перезагружаем корзину...");
      // Перезагружаем корзину после добавления
      await get().loadCart();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Неизвестная ошибка";
      console.error("❌ Ошибка добавления в корзину:", errorMessage);
      set({ error: errorMessage });
      throw error;
    }
  },

  // Удаление через установку quantity: 0 или фильтрацию на клиенте
  removeItem: async (cartItemId: number) => {
    console.warn("❌ Удаление из корзины не поддерживается API");
    // Просто удаляем из локального состояния
    set((state) => ({
      items: state.items.filter((item) => item.id !== cartItemId),
    }));
  },

  getTotalCount: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },

  clearCart: () => set({ items: [] }),

  clearError: () => set({ error: null }),
}));
