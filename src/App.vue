<template>
  <div id="app-layout">
    <NavBar />

    <main class="page-content">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    NavBar,
    Footer
  }
}
</script>

<style>
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

.page-content {
  flex: 1;
  padding: 3rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
