<template>
  <main>
    <!-- Hero Section -->
    <HeroSection
      title="Welcome to Ticket Gate"
      subtitle="Discover and book tickets for the hottest events!"
      image="src/assets/images/hero.jpg"
    />

    <!-- Info Sections-->
    <InfoSection
      title="Why Choose Us?"
      text="Ticket Gate makes booking tickets for concerts, festivals, sports, and workshops effortless and secure. Enjoy exclusive offers and never miss an event!"
      image="src/assets/images/info1.jpg"
      reverse
    />
    <InfoSection
      title="Easy & Quick Booking"
      text="Browse events, choose your seats, and complete your purchase in just a few clicks. Your tickets are instantly available in your account."
      image="src/assets/images/info2.jpg"
    />

    <!-- Featured Events Carousel -->
    <section class="featured-events">
      <h2>Featured Events</h2>

      <div class="carousel-container">
        <button class="nav prev" @click="prev">‹</button>

        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 240}px)` }"
        >
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

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { useEventStore } from '@/stores/eventStore'
import HeroSection from '@/components/HeroSection.vue'
import EventCard from '@/components/EventCard.vue'
import InfoSection from '@/components/InfoSection.vue'

// Pinia stores
const cart = useCartStore()
const eventStore = useEventStore()
const router = useRouter()

// Featured events pulled from store
const featuredEvents = computed(() => eventStore.events.slice(0, 10))

// Carousel state
const currentIndex = ref(0)

const addToCart = (event) => {
  if (event.availableTickets > 0) {
    cart.addToCart(event)
    eventStore.buyTicket(event.id)
    alert(`Added "${event.title}" to cart!`)
  }
}

const viewEvent = (id) => router.push(`/events/${id}`)

// Carousel navigation
const prev = () => {
  if (currentIndex.value > 0) currentIndex.value--
  else currentIndex.value = Math.max(featuredEvents.value.length - 3, 0)
}

const next = () => {
  if (currentIndex.value < Math.max(featuredEvents.value.length - 3, 0))
    currentIndex.value++
  else currentIndex.value = 0
}
</script>

<style scoped>
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

.event-card {
  flex: 0 0 220px;
  margin-right: 20px;
}

/* Navigation buttons */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
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
