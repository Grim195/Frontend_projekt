<template>
  <div class="page-background">
    <div class="content-wrapper">
      <BackButton @go-back="goBack" text="Back to Events" />

      <header class="hero">
        <h1>Your Cart</h1>
        <p>Review and manage your tickets</p>
      </header>

      <section class="cart-section">
        <!-- Empty cart message -->
        <div v-if="cart.items.length === 0" class="empty-cart">
          <p>Your cart is empty.</p>
          <img src="@/assets/images/empty_cart.jpg" alt="Empty Cart" />
        </div>

        <!-- Cart table / cards -->
        <table v-else class="cart-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Price (€)</th>
              <th>Quantity</th>
              <th>Total (€)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.items" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.price }}</td>
              <td>
                <div class="quantity-controls">
                  <button @click="decrease(item)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="increase(item)">+</button>
                </div>
              </td>
              <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
              <td>
                <button class="remove-btn" @click="remove(item.id)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Cart summary -->
        <div v-if="cart.items.length > 0" class="cart-summary">
          <p><strong>Total Price:</strong> {{ cart.totalPrice.toFixed(2) }} €</p>
          <button @click="checkout">Checkout</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import BackButton from '@/components/BackButton.vue'

const router = useRouter()
const cart = useCartStore()

const goBack = () => router.push('/listing')

const remove = (id) => cart.removeFromCart(id)

const checkout = () => {
  alert(`Thank you! Total: ${cart.totalPrice.toFixed(2)} €`)
  cart.clearCart()
}

const increase = (item) => {
  if (item.quantity < item.availableTickets) cart.addToCart(item)
}

const decrease = (item) => {
  cart.removeOne(item.id)
}
</script>

<style scoped>
.page-background {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  max-width: 1000px;
  background-color: white;
  border-radius: 8px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hero p {
  font-size: 1.2rem;
  color: #555;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
}

.cart-table th,
.cart-table td {
  border: 1px solid #ddd;
  padding: 0.8rem;
  text-align: center;
}

.cart-table th {
  background-color: #f0f0f0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-controls button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  margin: 0 0.3rem;
  cursor: pointer;
  font-weight: bold;
}

.quantity-controls button:hover {
  background-color: #357abd;
}

.remove-btn {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #e74c3c;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.cart-summary {
  text-align: right;
}

.cart-summary button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  background-color: #27ae60;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-summary button:hover {
  background-color: #1e8449;
}

.empty-cart {
  text-align: center;
  color: #555;
}

.empty-cart img {
  max-width: 150px;
  margin-top: 1rem;
  opacity: 0.7;
}
</style>
