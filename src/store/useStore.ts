import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, User, Product, FilterOptions } from '../types';

interface StoreState {
  // Cart
  cartItems: CartItem[];
  addToCart: (product: Product, variantId: string, quantity?: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;

  // Wishlist
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // User
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: () => boolean;

  // UI State
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  
  // Product filters
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  clearFilters: () => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart
      cartItems: [],
      addToCart: (product, variantId, quantity = 1) => {
        const variant = product.variants.find(v => v.id === variantId);
        if (!variant) return;

        set(state => {
          const existingItem = state.cartItems.find(
            item => item.productId === product.id && item.variantId === variantId
          );

          if (existingItem) {
            return {
              cartItems: state.cartItems.map(item =>
                item.productId === product.id && item.variantId === variantId
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }

          return {
            cartItems: [
              ...state.cartItems,
              { productId: product.id, variantId, quantity, product, variant }
            ]
          };
        });
      },
      removeFromCart: (productId, variantId) => {
        set(state => ({
          cartItems: state.cartItems.filter(
            item => !(item.productId === productId && item.variantId === variantId)
          )
        }));
      },
      updateQuantity: (productId, variantId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, variantId);
          return;
        }

        set(state => ({
          cartItems: state.cartItems.map(item =>
            item.productId === productId && item.variantId === variantId
              ? { ...item, quantity }
              : item
          )
        }));
      },
      clearCart: () => set({ cartItems: [] }),
      getCartTotal: () => {
        return get().cartItems.reduce(
          (total, item) => total + (item.variant.price * item.quantity),
          0
        );
      },
      getCartItemsCount: () => {
        return get().cartItems.reduce((count, item) => count + item.quantity, 0);
      },

      // Wishlist
      wishlist: [],
      addToWishlist: (productId) => {
        set(state => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist
            : [...state.wishlist, productId]
        }));
      },
      removeFromWishlist: (productId) => {
        set(state => ({
          wishlist: state.wishlist.filter(id => id !== productId)
        }));
      },
      isInWishlist: (productId) => get().wishlist.includes(productId),

      // User
      user: null,
      setUser: (user) => set({ user }),
      isAuthenticated: () => get().user !== null,

      // UI State
      isMenuOpen: false,
      setMenuOpen: (open) => set({ isMenuOpen: open }),
      isCartOpen: false,
      setCartOpen: (open) => set({ isCartOpen: open }),

      // Product filters
      filters: {},
      setFilters: (filters) => set({ filters }),
      clearFilters: () => set({ filters: {} }),

      // Search
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'mahekraj-store',
      partialize: (state) => ({
        cartItems: state.cartItems,
        wishlist: state.wishlist,
        user: state.user,
      }),
    }
  )
);