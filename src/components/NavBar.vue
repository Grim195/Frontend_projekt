<template>
  <nav class="navbar">
    <div class="nav-left">
      <RouterLink to="/" class="title">Ticket Gate</RouterLink>
    </div>
    <div class="nav-center">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/listing">Events</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="nav-right"></div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar',
  components: { RouterLink }
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

.nav-center {
  display: flex;
  gap: 1rem;
}

.title {
  background-color: white !important;
  color: black !important;
}

.title:hover {
  background-color: white !important;
}

.title.router-link-exact-active {
  background-color: white !important;
  color: black !important;
}

.navbar a {
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 500;
}

.navbar a.router-link-exact-active {
  background-color: #666;
  color: white;
  border-radius: 4px;
}

.navbar a:hover {
  background-color: #ccc;
  border-radius: 4px;
}
</style>
