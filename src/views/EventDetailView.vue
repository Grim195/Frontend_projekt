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

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { useEventStore } from '@/stores/eventStore'

const route = useRoute()
const cart = useCartStore()
const eventStore = useEventStore()
const event = ref({})
const currentImageIndex = ref(0)
let intervalId = null

// Get the event from the store
onMounted(() => {
  const eventId = parseInt(route.params.id)
  event.value = eventStore.getEvent(eventId) || eventStore.events[0]

  // Automatic gallery cycling
  if (event.value.images && event.value.images.length > 1) {
    intervalId = setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % event.value.images.length
    }, 3000)
  }
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

const currentImage = computed(() => event.value.images ? event.value.images[currentImageIndex.value] : '')

const addToCart = () => {
  if (event.value.availableTickets > 0) {
    cart.addToCart(event.value)
    eventStore.buyTicket(event.value.id)
    alert(`Added "${event.value.title}" to cart!`)
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
