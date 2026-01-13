<template>
  <div class="page-background">
    <div class="content-wrapper">
      <header class="hero">
        <h1>Your Cart</h1>
        <p>Review and manage your tickets</p>
      </header>

      <section class="cart-section">
        <!-- Empty cart message -->
        <p v-if="cart.items.length === 0">Your cart is empty.</p>

        <!-- Cart table -->
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
              <td>{{ item.quantity }}</td>
              <td>{{ item.price * item.quantity }}</td>
              <td>
                <button @click="remove(item.id)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="cart.items.length > 0" class="cart-summary">
          <p><strong>Total Price:</strong> {{ cart.totalPrice }} €</p>
          <button @click="checkout">Checkout</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'CartView',
  setup() {
    const cart = useCartStore() // ✅ same store instance as NavBar

    const remove = (id) => {
      cart.removeFromCart(id)
    }

    const checkout = () => {
      alert(`Thank you! Total: ${cart.totalPrice} €`)
      cart.clearCart()
    }

    return { cart, remove, checkout }
  }
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

.cart-table button {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #e74c3c;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-table button:hover {
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
</style>
