<template>
  <nav class="navbar">
    <!-- Left: Site title -->
    <div class="nav-left">
      <RouterLink to="/" class="title">Ticket Gate</RouterLink>
    </div>

    <!-- Center: Main links -->
    <div class="nav-center">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/listing">Events</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>

    <!-- Right: Cart -->
    <div class="nav-right">
      <RouterLink to="/cart" class="cart-link">
        Cart
        <span v-if="cart.totalItems">({{ cart.totalItems }})</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'NavBar',
  components: { RouterLink },
  setup() {
    const cart = useCartStore()
    return { cart }
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ccc;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

/* Left: title */
.nav-left .title {
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
}

/* Center links */
.nav-center {
  display: flex;
  gap: 1rem;
}

.nav-center a {
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-center a.router-link-exact-active {
  background-color: #666;
  color: white;
}

.nav-center a:hover {
  background-color: #ccc;
}

/* Right: cart */
.nav-right .cart-link {
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-right .cart-link:hover {
  background-color: #ccc;
}
</style>
