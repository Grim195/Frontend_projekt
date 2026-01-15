<template>
  <main class="event-page">
    <!-- Event Section -->
    <section
      class="event-section"
      :style="{ backgroundImage: `url(${event.image})` }"
    >
      <div class="info-card">
        <!-- Reusable BackButton -->
        <BackButton text="Back to Events" @go-back="goBack" />

        <h1>{{ event.title }}</h1>
        <p><strong>Date:</strong> {{ event.date }}</p>
        <p><strong>Price:</strong> {{ event.price }} €</p>
        <p><strong>Category:</strong> {{ event.category }}</p>
        <p v-if="event.description">{{ event.description }}</p>
        <p v-if="event.availableTickets === 0" class="sold-out">Sold Out</p>
        <p v-else><strong>Tickets Left:</strong> {{ event.availableTickets }}</p>

        <button
          @click="addToCart"
          :disabled="event.availableTickets === 0"
          class="add-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { useEventStore } from '@/stores/eventStore'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'EventDetailView',
  components: {
    BackButton
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const cart = useCartStore()
    const eventStore = useEventStore()

    const event = ref({})

    onMounted(() => {
      const eventId = parseInt(route.params.id)
      event.value = eventStore.getEvent(eventId) || eventStore.events[0]
    })

    const addToCart = () => {
      if (event.value.availableTickets > 0) {
        cart.addToCart(event.value)
        eventStore.buyTicket(event.value.id)
        alert(`Added "${event.value.title}" to cart!`)
      }
    }

    const goBack = () => router.push('/listing')

    return {
      event,
      addToCart,
      goBack
    }
  }
}
</script>

<style scoped>
.event-page {
  width: 100%;
}

/* Full background image section */
.event-section {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
}

/* Info card centered on background */
.info-card {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 2rem 2.5rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

/* Event info */
.info-card h1 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.info-card p {
  margin: 0.5rem 0;
  color: #555;
}

.sold-out {
  color: red;
  font-weight: bold;
  margin-top: 0.5rem;
}

/* Add to Cart button */
.add-cart-btn {
  margin-top: 1.5rem;
  padding: 0.7rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-cart-btn:hover:not(:disabled) {
  background-color: #357abd;
}

.add-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
