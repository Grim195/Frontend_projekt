<template>
  <div id="app-layout">
    <NavBar />

    <main class="page-content">
      <RouterView />
    </main>

    <footer class="site-footer">
      <p>&copy; 2026 Ticket Gate</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@ticketgate.com</p>
    </footer>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    NavBar
  }
}
</script>

<style>
/* Reset & base layout */
html,
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Main content spacing */
.page-content {
  flex: 1;
  padding: 3rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* Footer */
.site-footer {
  text-align: center;
  padding: 1.5rem;
  background-color: black;
  color: white;
  border-top: 1px solid #ddd;
}
</style>
