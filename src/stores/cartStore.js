import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    items: []
  }),
  getters: {
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },
  actions: {
    addToCart(event) {
      const existing = this.items.find((i) => i.id === event.id)
      if (existing) {
        if (existing.quantity < event.availableTickets) existing.quantity++
      } else {
        this.items.push({ ...event, quantity: 1 })
      }
    },
    removeOne(eventId) {
      const item = this.items.find((i) => i.id === eventId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.items = this.items.filter((i) => i.id !== eventId)
        }
      }
    },
    removeFromCart(eventId) {
      this.items = this.items.filter((i) => i.id !== eventId)
    },
    clearCart() {
      this.items = []
    }
  }
})
