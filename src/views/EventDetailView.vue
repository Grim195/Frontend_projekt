<template>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay">
        <h1>{{ event.title }}</h1>
        <p>Book your tickets and join the experience!</p>
      </div>
    </section>

    <!-- Event Details -->
    <section class="event-details">
      <div class="details-container">
        <img v-if="event.image" :src="event.image" :alt="event.title" class="event-image" />

        <div class="info">
          <h2>{{ event.title }}</h2>
          <p><strong>Date:</strong> {{ event.date }}</p>
          <p><strong>Price:</strong> {{ event.price }} €</p>
          <p v-if="event.availableTickets === 0" class="sold-out">Sold Out</p>
          <p v-else><strong>Tickets Left:</strong> {{ event.availableTickets }}</p>

          <button @click="addToCart(event)" :disabled="event.availableTickets === 0">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'EventDetailView',
  data() {
    return {
      event: {}
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const cart = useCartStore()

    const addToCart = (event) => {
      if (event.availableTickets > 0) {
        cart.addToCart(event)
        alert(`Added "${event.title}" to cart!`)
      }
    }

    return { route, router, cart, addToCart }
  },
  mounted() {
    const eventId = this.route.params.id
    // Placeholder events, can be replaced with API fetch later
    const events = [
      { id: 1, title: 'Rock Concert', date: '12.05.2026', price: 25, availableTickets: 120, image: '/images/rock.jpg' },
      { id: 2, title: 'Tech Conference', date: '20.06.2026', price: 50, availableTickets: 0, image: '/images/tech.jpg' },
      { id: 3, title: 'Art Expo', date: '01.07.2026', price: 15, availableTickets: 30, image: '/images/art.jpg' },
      { id: 4, title: 'Jazz Night', date: '15.07.2026', price: 20, availableTickets: 50, image: '/images/jazz.jpg' },
      { id: 5, title: 'Comedy Show', date: '30.07.2026', price: 18, availableTickets: 100, image: '/images/comedy.jpg' }
    ]
    this.event = events.find(e => e.id == eventId) || events[0]
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  width: 100%;
  height: 300px;
  background-image: url('/assets/ticket.jpg'); /* same hero image as ListingView */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.hero-overlay {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2rem 3rem;
  text-align: center;
  border-radius: 8px;
}

.hero h1 {
  margin: 0;
  font-size: 2rem;
}

.hero p {
  margin-top: 0.5rem;
}

/* Event Details Section */
.event-details {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.details-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
}

.event-image {
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.info {
  max-width: 500px;
}

.info h2 {
  margin-bottom: 1rem;
}

.info p {
  margin: 0.5rem 0;
  color: #555;
}

.sold-out {
  color: red;
  font-weight: bold;
}

.info button {
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.info button:hover:not(:disabled) {
  background-color: #357abd;
}

.info button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .details-container {
    flex-direction: column;
    align-items: center;
  }

  .event-image,
  .info {
    max-width: 100%;
  }
}
</style>
