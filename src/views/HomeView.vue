<template>
  <main>
    <!-- Hero Section -->
    <HeroSection
      title="Welcome to Ticket Gate"
      subtitle="Discover and book tickets for the hottest events!"
      image="src/assets/images/hero.jpg"
    />

    <!-- Featured Events Carousel -->
    <section class="featured-events">
      <h2>Featured Events</h2>

      <div class="carousel-container">
        <button class="nav prev" @click="prev">‹</button>

        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 240}px)` }">
          <EventCard
            v-for="event in featuredEvents"
            :key="event.id"
            :event="event"
            @add-to-cart="addToCart"
            @view-details="viewEvent"
          />
        </div>

        <button class="nav next" @click="next">›</button>
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
  name: 'HomeView',
  components: { 
    EventCard,
    HeroSection 
  },
  data() {
    return {
      featuredEvents: [
        { id: 1, title: 'Rock Concert', date: '12.05.2026', price: 25, availableTickets: 120, image: '/images/rock.jpg' },
        { id: 2, title: 'Tech Conference', date: '20.06.2026', price: 50, availableTickets: 0, image: '/images/tech.jpg' },
        { id: 3, title: 'Art Expo', date: '01.07.2026', price: 15, availableTickets: 30, image: '/images/art.jpg' },
        { id: 4, title: 'Jazz Night', date: '15.07.2026', price: 20, availableTickets: 50, image: '/images/jazz.jpg' },
        { id: 5, title: 'Comedy Show', date: '30.07.2026', price: 18, availableTickets: 100, image: '/images/comedy.jpg' }
      ],
      currentIndex: 0
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

    return { cart, addToCart, viewEvent }
  },
  methods: {
    prev() {
      if (this.currentIndex > 0) this.currentIndex--
      else this.currentIndex = this.featuredEvents.length - 3
    },
    next() {
      if (this.currentIndex < this.featuredEvents.length - 3) this.currentIndex++
      else this.currentIndex = 0
    }
  }
}
</script>

<style scoped>
/* Featured Events Carousel */
.featured-events {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.featured-events h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

/* Cards smaller than listing page */
.event-card {
  flex: 0 0 220px;
  margin-right: 20px;
}

/* Navigation buttons */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.9);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 0.5rem;
  border-radius: 50%;
  z-index: 10;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>
