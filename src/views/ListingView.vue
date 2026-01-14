<template>
  <main>
    <!-- Hero Section -->
    <HeroSection
      title="Events"
      subtitle="Browse and book your tickets"
      image="src/assets/ticket.jpg"
    />

    <!-- Event Listing -->
    <section class="event-listing">
      <div class="event-grid">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
          @add-to-cart="addToCart"
          @view-details="viewEvent"
        />
      </div>
    </section>
  </main>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import HeroSection from '@/components/HeroSection.vue'
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'

export default {
  name: 'ListingView',
  components: {
    EventCard,
    HeroSection
  },
  data() {
    return {
      events: [
        { id: 1, title: 'Rock Concert', date: '12.05.2026', price: 25, availableTickets: 120, image: '/images/rock.jpg' },
        { id: 2, title: 'Tech Conference', date: '20.06.2026', price: 50, availableTickets: 0, image: '/images/tech.jpg' },
        { id: 3, title: 'Art Expo', date: '01.07.2026', price: 15, availableTickets: 30, image: '/images/art.jpg' },
        { id: 4, title: 'Jazz Night', date: '15.07.2026', price: 20, availableTickets: 50, image: '/images/jazz.jpg' },
        { id: 5, title: 'Comedy Show', date: '30.07.2026', price: 18, availableTickets: 100, image: '/images/comedy.jpg' }
      ]
    }
  },
  setup() {
    const cart = useCartStore()
    const router = useRouter()

    const addToCart = (event) => {
      if (event.availableTickets > 0) {
        cart.addToCart(event)
        alert(`Added "${event.title}" to cart!`)
      }
    }

    const viewEvent = (id) => {
      router.push(`/events/${id}`)
    }

    return { addToCart, viewEvent }
  }
}
</script>

<style scoped>
/* Event Listing Grid */
.event-listing {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
