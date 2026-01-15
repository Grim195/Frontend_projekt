<template>
  <main>
    <!-- Hero Section -->
    <HeroSection
      title="Events"
      subtitle="Browse and book your tickets"
      :image="ticketImg"
    />

    <!-- Controls -->
    <section class="controls">
      <label>
        Sort by:
        <select v-model="sortBy">
          <option value="date">Date</option>
          <option value="price">Price</option>
        </select>
      </label>
    </section>

    <!-- Event Listing -->
    <section class="event-listing">
      <div class="event-grid">
        <EventCard
          v-for="event in pagedEvents"
          :key="event.id"
          :event="event"
          @add-to-cart="addToCart"
          @view-details="viewEvent"
        />
      </div>
    </section>

    <!-- Pagination -->
    <section class="pagination">
      <button :disabled="currentPage === 1" @click="prevPage">Previous</button>

      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
    </section>
  </main>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import EventCard from '@/components/EventCard.vue'
import { useEventStore } from '@/stores/eventStore'
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'

import ticketImg from '@/assets/images/ticket.jpg'

export default {
  name: 'ListingView',
  components: {
    HeroSection,
    EventCard
  },
  data() {
    return {
      ticketImg,
      sortBy: 'date',
      currentPage: 1,
      eventsPerPage: 6,
      eventStore: useEventStore(),
      cart: useCartStore(),
      router: useRouter()
    }
  },
  computed: {
    sortedEvents() {
      return [...this.eventStore.events].sort((a, b) => {
        if (this.sortBy === 'price') return a.price - b.price
        return new Date(a.date) - new Date(b.date)
      })
    },
    totalPages() {
      return Math.ceil(this.sortedEvents.length / this.eventsPerPage)
    },
    pagedEvents() {
      const start = (this.currentPage - 1) * this.eventsPerPage
      return this.sortedEvents.slice(start, start + this.eventsPerPage)
    }
  },
  methods: {
    addToCart(event) {
      if (event.availableTickets > 0) {
        this.cart.addToCart(event)
        this.eventStore.buyTicket(event.id)
        alert(`Added "${event.title}" to cart!`)
      }
    },
    viewEvent(id) {
      this.router.push(`/events/${id}`)
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
    goToPage(page) {
      this.currentPage = page
    }
  }
}
</script>

<style scoped>
.controls {
  max-width: 1200px;
  margin: 1.5rem auto;
  padding: 0 2rem;
}

.controls select {
  margin-left: 0.5rem;
  padding: 0.4rem;
}

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

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
}

.pagination button {
  padding: 0.5rem 1rem;
  border: 1px solid #4a90e2;
  background-color: white;
  color: #4a90e2;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
}

.pagination button.active {
  background-color: #4a90e2;
  color: white;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
  background-color: #357abd;
  color: white;
}
</style>
