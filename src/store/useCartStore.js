import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (product, quantity = 1) => {
    const existingItem = get().cartItems.find((item) => item.id === product.id)

    set({
      cartItems: existingItem
        ? get().cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [...get().cartItems, { ...product, quantity }],
    })
  },

  updateQuantity: (productId, quantity) => {
    set({
      cartItems: get().cartItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item,
        )
        .filter((item) => item.quantity > 0),
    })
  },

  removeFromCart: (productId) => {
    set({
      cartItems: get().cartItems.filter((item) => item.id !== productId),
    })
  },

  clearCart: () => set({ cartItems: [] }),

  getCartCount: () => get().cartItems.reduce((total, item) => total + item.quantity, 0),

  getCartSubtotal: () =>
    get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
}))

export default useCartStore
