<template>
  <div class="page-background">
    <div class="content-wrapper">
      <header class="hero">
        <h1>{{ event?.title }}</h1>
        <p>{{ event?.date }}</p>
      </header>

      <section class="event-details">
        <p><strong>Price:</strong> {{ event?.price }} €</p>
        <p v-if="event?.availableTickets === 0" class="sold-out">Sold Out</p>
        <p v-else>Tickets left: {{ event?.availableTickets }}</p>

        <p class="description">{{ event?.description }}</p>

        <button
          @click="buyTicket"
          :disabled="event?.availableTickets === 0"
        >
          Buy Ticket
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'EventDetailView',
  props: ['id'], // ✅ make sure this is here
  data() {
    return {
      event: null
    }
  },
  mounted() {
    const eventId = Number(this.id) // ✅ use prop, not $route.params.id

    const events = [
      {
        id: 1,
        title: 'Rock Concert',
        date: '12.05.2026',
        price: 25,
        availableTickets: 120,
        description: 'Join the biggest rock concert of the year with live bands!'
      },
      {
        id: 2,
        title: 'Tech Conference',
        date: '20.06.2026',
        price: 50,
        availableTickets: 0,
        description: 'Network with tech leaders and attend insightful talks.'
      },
      {
        id: 3,
        title: 'Art Expo',
        date: '01.07.2026',
        price: 15,
        availableTickets: 30,
        description: 'Explore modern art and meet local artists.'
      }
    ]

    this.event = events.find(e => e.id === eventId) || {
      title: 'Event not found',
      date: '',
      price: 0,
      availableTickets: 0,
      description: 'This event does not exist.'
    }
  },
  methods: {
    buyTicket() {
      const cart = useCartStore()
      if (this.event.availableTickets > 0) {
        cart.addToCart(this.event)
        alert(`Ticket for "${this.event.title}" added to cart!`)
      }
    }
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
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

.event-details {
  text-align: center;
}

.event-details p {
  margin: 0.5rem 0;
}

.description {
  margin: 1rem 0 2rem 0;
}

.sold-out {
  color: red;
  font-weight: bold;
}

.event-details button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #4a90e2;
  color: white;
  transition: background-color 0.3s;
}

.event-details button:hover:not(:disabled) {
  background-color: #357abd;
}

.event-details button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
