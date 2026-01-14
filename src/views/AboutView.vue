<template>
  <div class="about-page">
    <!-- Hero / Page Title -->
    <HeroSection
      title="About Ticket Gate"
      subtitle="We make event tickets simple, fast, and secure"
      image="src/assets/information.jpg"
    />

    <!-- Company Overview -->
    <section class="overview">
      <h2>Our Mission</h2>
      <p>
        Ticket Gate is dedicated to making ticket booking easy and reliable. 
        We connect you to the best concerts, conferences, art exhibitions, 
        and live shows — all in one place. Your experience matters to us.
      </p>
    </section>

    <!-- How it works / Features -->
    <section class="features">
      <h2>How It Works</h2>
      <div class="features-grid">
        <InfoCard
          icon="/images/search.png"
          title="Discover Events"
          description="Browse through hundreds of upcoming events in your city or online."
        />
        <InfoCard
          icon="/images/cart.png"
          title="Select & Buy"
          description="Choose the event, pick your tickets, and securely complete your purchase."
        />
        <InfoCard
          icon="/images/secure.png"
          title="Safe & Secure"
          description="We use secure payment systems to ensure your personal and payment info is protected."
        />
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="trust">
      <h2>Why Choose Ticket Gate?</h2>
      <p>
        Trusted by thousands of customers, Ticket Gate ensures you never miss 
        your favorite events. Enjoy instant confirmation, transparent pricing, 
        and excellent customer support.
      </p>
    </section>

    <!-- Call To Action -->
    <section class="cta">
      <h2>Ready to Join the Fun?</h2>
      <button @click="goToListing">Browse Events</button>
    </section>
  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import HeroSection from '@/components/HeroSection.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AboutView',
  components: { 
    InfoCard,
    HeroSection
    },
  setup() {
    const router = useRouter()
    const goToListing = () => {
      router.push('/listing')
    }

    return { goToListing }
  }
}
</script>

<style scoped>
/* Overview Section */
.overview {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.overview h2 {
  margin-bottom: 1rem;
}

/* Features Section */
.features {
  padding: 2rem;
  background-color: #f9f9f9;
}

.features h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  justify-items: center;
}

/* Trust Section */
.trust {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.trust h2 {
  margin-bottom: 1rem;
}

/* Call to Action */
.cta {
  padding: 2rem;
  text-align: center;
}

.cta button {
  padding: 0.7rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta button:hover {
  background-color: #357abd;
}
</style>
