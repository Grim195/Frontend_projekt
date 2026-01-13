<template>
  <main>
    <!-- Hero / Gallery Section -->
    <section class="hero-gallery">
      <img
        v-if="currentImage"
        :src="currentImage"
        :alt="event.title"
        class="gallery-image"
      />
      <div class="hero-overlay">
        <h1>{{ event.title }}</h1>
        <p>Book your tickets and join the experience!</p>
      </div>
    </section>

    <!-- Event Details -->
    <section class="event-details">
      <div class="details-container">
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
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'EventDetailView',
  data() {
    return {
      event: {},
      currentImageIndex: 0,
      intervalId: null
    }
  },
  computed: {
    currentImage() {
      return this.event.images ? this.event.images[this.currentImageIndex] : ''
    }
  },
  setup() {
    const route = useRoute()
    const cart = useCartStore()

    const addToCart = (event) => {
      if (event.availableTickets > 0) {
        cart.addToCart(event)
        alert(`Added "${event.title}" to cart!`)
      }
    }

    return { route, cart, addToCart }
  },
  mounted() {
    const eventId = this.route.params.id

    // Placeholder events with 4 images each
    const events = [
      {
        id: 1,
        title: 'Rock Concert',
        date: '12.05.2026',
        price: 25,
        availableTickets: 120,
        images: [
          '/images/rock1.jpg',
          '/images/rock2.jpg',
          '/images/rock3.jpg',
          '/images/rock4.jpg'
        ]
      },
      {
        id: 2,
        title: 'Tech Conference',
        date: '20.06.2026',
        price: 50,
        availableTickets: 0,
        images: [
          '/images/tech1.jpg',
          '/images/tech2.jpg',
          '/images/tech3.jpg',
          '/images/tech4.jpg'
        ]
      },
      {
        id: 3,
        title: 'Art Expo',
        date: '01.07.2026',
        price: 15,
        availableTickets: 30,
        images: [
          '/images/art1.jpg',
          '/images/art2.jpg',
          '/images/art3.jpg',
          '/images/art4.jpg'
        ]
      }
    ]

    this.event = events.find(e => e.id == eventId) || events[0]

    // Start automatic cycling every 3 seconds
    if (this.event.images && this.event.images.length > 1) {
      this.intervalId = setInterval(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.event.images.length
      }, 3000)
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
/* Hero / Gallery Section */
.hero-gallery {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}

/* Overlay title on gallery */
.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255,255,255,0.8);
  padding: 1.5rem 2rem;
  text-align: center;
  border-radius: 8px;
}

.hero-overlay h1 {
  margin: 0;
  font-size: 2rem;
}

.hero-overlay p {
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
</style>
