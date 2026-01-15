<template>
  <main>
    <!-- Hero Section -->
    <HeroSection
      title="Welcome to Ticket Gate"
      subtitle="Discover and book tickets for the hottest events!"
      :image="heroImg"
    />

    <!-- Info Sections -->
    <InfoSection
      title="Why Choose Us?"
      text="Ticket Gate makes booking tickets for concerts, festivals, sports, and workshops effortless and secure. Enjoy exclusive offers and never miss an event!"
      :image="info1Img"
      reverse
    />
    <InfoSection
      title="Easy & Quick Booking"
      text="Browse events, choose your seats, and complete your purchase in just a few clicks. Your tickets are instantly available in your account."
      :image="info2Img"
    />

    <!-- How It Works Section -->
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="features-grid">
        <InfoCard
          :icon="searchImg"
          title="Discover Events"
          description="Browse upcoming events in your city or online and find your favorite shows."
        />
        <InfoCard
          :icon="cartImg"
          title="Select & Buy"
          description="Choose your tickets, select seats, and complete payment securely."
        />
        <InfoCard
          :icon="secureImg"
          title="Safe & Secure"
          description="Your payment info and personal data are fully protected with us."
        />
      </div>
    </section>

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

    <!-- Newsletter Signup -->
    <NewsletterSignup />
  </main>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { useEventStore } from '@/stores/eventStore'

import HeroSection from '@/components/HeroSection.vue'
import InfoSection from '@/components/InfoSection.vue'
import InfoCard from '@/components/InfoCard.vue'
import EventCard from '@/components/EventCard.vue'
import NewsletterSignup from '@/components/NewsletterSignup.vue'

import heroImg from '@/assets/images/hero.jpg'
import info1Img from '@/assets/images/info1.jpg'
import info2Img from '@/assets/images/info2.jpg'
import searchImg from '@/assets/images/search.jpg'
import cartImg from '@/assets/images/cart.jpg'
import secureImg from '@/assets/images/secure.jpg'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    InfoSection,
    InfoCard,
    EventCard,
    NewsletterSignup
  },
  setup() {
    const cart = useCartStore()
    const eventStore = useEventStore()
    const router = useRouter()
    const currentIndex = ref(0)

    const featuredEvents = computed(() => eventStore.events.slice(0, 10))

    const addToCart = (event) => {
      if (event.availableTickets > 0) {
        cart.addToCart(event)
        eventStore.buyTicket(event.id)
        alert(`Added "${event.title}" to cart!`)
      }
    }

    const viewEvent = (id) => router.push(`/events/${id}`)

    const prev = () => {
      if (currentIndex.value > 0) currentIndex.value--
      else currentIndex.value = Math.max(featuredEvents.value.length - 3, 0)
    }

    const next = () => {
      if (currentIndex.value < Math.max(featuredEvents.value.length - 3, 0)) currentIndex.value++
      else currentIndex.value = 0
    }

    return {
      heroImg,
      info1Img,
      info2Img,
      searchImg,
      cartImg,
      secureImg,
      featuredEvents,
      currentIndex,
      addToCart,
      viewEvent,
      prev,
      next
    }
  }
}
</script>

<style scoped>
/* How It Works Section */
.how-it-works {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 2rem;
  text-align: center;
}

.how-it-works h2 {
  margin-bottom: 2rem;
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

/* Carousel */
.featured-events {
  padding: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
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
