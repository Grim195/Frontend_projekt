<template>
  <div class="page-background">
    <div class="content-wrapper">
      <!-- Page title -->
      <header class="hero">
        <h1>Events</h1>
        <p>Browse upcoming concerts, conferences, and cultural events</p>
      </header>

      <!-- Event listing -->
      <section class="events-list">
        <div
          v-for="event in events"
          :key="event.id"
          class="event-card"
        >
          <h3>{{ event.title }}</h3>
          <p>Date: {{ event.date }}</p>
          <p>Price: {{ event.price }} €</p>
          <p v-if="event.availableTickets === 0" class="sold-out">Sold Out</p>
          <p v-else>Tickets left: {{ event.availableTickets }}</p>

          <button
  @click="addToCart(event)"
  :disabled="event.availableTickets === 0">
  Add to Cart
</button>

<button @click="viewEvent(event.id)">See Details</button>


        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'ListingView',
  data() {
    return {
      events: [
        { id: 1, title: 'Rock Concert', date: '12.05.2026', price: 25, availableTickets: 120 },
        { id: 2, title: 'Tech Conference', date: '20.06.2026', price: 50, availableTickets: 0 },
        { id: 3, title: 'Art Expo', date: '01.07.2026', price: 15, availableTickets: 30 }
      ]
    }
  },
  setup() {
    const cart = useCartStore()

    const addToCart = (event) => {
      if (event.availableTickets > 0) {
        cart.addToCart(event)
        alert(`Added "${event.title}" to cart!`)
      }
    }

    const viewEvent = (id) => {
      // navigate to dynamic event detail
      window.location.href = `/events/${id}`
    }

    return { cart, addToCart, viewEvent }
  }
}
</script>


<style scoped>
/* Background wrapper */
.page-background {
  min-height: 100vh;
  background-color: #f5f5f5; /* neutral gray behind content */
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
}

/* White container */
.content-wrapper {
  width: 100%;
  max-width: 1000px;
  background-color: white;
  border-radius: 8px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Page title */
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

/* Event cards grid */
.events-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

/* Event card style */
.event-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 6px;
  text-align: center;
  background-color: #fafafa;
}

.event-card h3 {
  margin-bottom: 0.5rem;
}

.event-card p {
  margin: 0.3rem 0;
}

.sold-out {
  color: red;
  font-weight: bold;
}

.event-card button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #4a90e2;
  color: white;
  transition: background-color 0.3s;
}

.event-card button:hover:not(:disabled) {
  background-color: #357abd;
}

.event-card button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>