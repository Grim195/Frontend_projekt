// src/stores/cartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // array of tickets
  }),
  getters: {
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
  },
  actions: {
    addToCart(event) {
      const existing = this.items.find(item => item.id === event.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...event, quantity: 1 })
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter(item => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})
