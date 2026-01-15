<template>
  <div class="about-page">
    <!-- Hero / Page Title -->
    <HeroSection
      title="About Ticket Gate"
      subtitle="We make event tickets simple, fast, and secure"
      :image="heroImg"
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

    <!-- What We Do -->
    <section class="what-we-do">
      <h2>What We Do</h2>
      <p>
        Ticket Gate is an online ticketing platform designed to help users quickly
        discover, compare, and purchase tickets for a wide range of events.
        Whether you are looking for live music, sports events, conferences,
        or cultural experiences, we bring everything together in one easy-to-use place.
      </p>
    </section>

    <!-- How it works / Features -->
    <section class="features">
      <h2>How It Works</h2>
      <div class="features-grid">
        <InfoCard
          :icon="searchImg"
          title="Discover Events"
          description="Browse through hundreds of upcoming events in your city or online."
        />
        <InfoCard
            
          title="Select & Buy"
          description="Choose the event, pick your tickets, and securely complete your purchase."
        />
        <InfoCard
          :icon="secureImg"
          title="Safe & Secure"
          description="We use secure payment systems to ensure your personal and payment info is protected."
        />
      </div>
    </section>

    <!-- Our Values -->
    <section class="values">
      <h2>What You Can Expect</h2>
      <ul>
        <li>✔ Easy and intuitive event browsing</li>
        <li>✔ Transparent pricing with no hidden fees</li>
        <li>✔ Secure checkout and ticket handling</li>
        <li>✔ Friendly and responsive customer support</li>
      </ul>
    </section>

    <!-- Why Choose Us -->
    <section class="trust">
      <h2>Why Choose Ticket Gate?</h2>
      <p>
        Trusted by thousands of customers, Ticket Gate ensures you never miss 
        your favorite events. Enjoy instant confirmation, transparent pricing, 
        and excellent customer support.
      </p>
      <p class="contact-link">
        Want more information? Write to us 
        <RouterLink to="/contact">here</RouterLink>.
      </p>
    </section>

    <!-- Call To Action -->
    <section class="cta">
      <h2>Ready to Join the Fun?</h2>
      <button @click="goToListing">Browse Events</button>
    </section>

    <!-- Newsletter Signup -->
    <NewsletterSignup />
  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import HeroSection from '@/components/HeroSection.vue'
import NewsletterSignup from '@/components/NewsletterSignup.vue'

import heroImg from '@/assets/images/information.jpg'
import searchImg from '@/assets/images/search.jpg'
import cartImg from '@/assets/images/cart.jpg'
import secureImg from '@/assets/images/secure.jpg'

export default {
  name: 'AboutView',
  components: { 
    InfoCard,
    HeroSection,
    NewsletterSignup
  },
  methods: {
    goToListing() {
      this.$router.push('/listing')
    }
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

.contact-link {
  margin-top: 1rem;
  font-size: 0.95rem;
}

.contact-link a {
  color: #4a90e2;
  font-weight: 600;
  text-decoration: none;
}

.contact-link a:hover {
  text-decoration: underline;
}

.what-we-do {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.what-we-do h2 {
  margin-bottom: 1rem;
}

.what-we-do p {
  color: #555;
  line-height: 1.6;
}

/* Values section */
.values {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.values h2 {
  margin-bottom: 1rem;
}

.values ul {
  list-style: none;
  padding: 0;
}

.values li {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #444;
}
</style>
