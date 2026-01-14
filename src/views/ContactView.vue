<template>
  <main>
    <!-- Hero Section -->
    <HeroSection
      title="Contact Us"
      subtitle="We’re here to help you with your ticket needs!"
      image="src/assets/information.jpg"
    />

    <!-- Contact Section -->
    <section class="contact-wrapper">

      <!-- Left Side – Form -->
      <div class="form-section">
        <p class="eyebrow">Customer Support</p>
        <h2>Send us a message</h2>

        <div v-if="showAlert" class="alert">
          Your message was successfully sent! Thank you.
        </div>

        <form @submit.prevent="submitForm">
          <label>Name</label>
          <input type="text" v-model="name" placeholder="Your name" />

          <label>Email</label>
          <input type="email" v-model="email" placeholder="Your email" />

          <label>Message</label>
          <textarea v-model="message" placeholder="Your message"></textarea>

          <button type="submit">Send</button>
          <button type="button" @click="resetForm">Reset</button>
        </form>
      </div>

      <!-- Right Side – Contact Info -->
      <div class="contact-info">
        <p class="eyebrow">Business Contacts</p>
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> info@ticketgate.com</p>
        <p><strong>Phone:</strong> 0800 123 456</p>
        <p><strong>Address:</strong> 123 Event Street, City</p>
      </div>

    </section>
  </main>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'ContactView',
  components: {
    HeroSection
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showAlert: false
    }
  },
  methods: {
    submitForm() {
      if (!this.name || !this.email || !this.message) {
        alert('Please fill in all fields!')
        return
      }
      // Here you could add API call to send the form
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000)
      this.resetForm()
    },
    resetForm() {
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
/* Contact Section */
.contact-wrapper {
  display: flex;
  gap: 40px;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
}

.form-section {
  flex: 2;
  min-width: 300px;
}

.form-section .eyebrow {
  font-weight: 600;
  color: #4a90e2;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.form-section h2 {
  margin-bottom: 1rem;
}

.form-section form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-section input,
.form-section textarea {
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
}

.form-section button {
  padding: 0.7rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-section button:hover {
  background-color: #357abd;
}

.form-section button[type="button"] {
  background-color: #ccc;
  color: black;
}

.alert {
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
}

/* Right Side Contact Info */
.contact-info {
  flex: 1;
  background: #f7f7f7;
  padding: 2rem;
  border-radius: 8px;
  min-width: 250px;
}

.contact-info .eyebrow {
  font-weight: 600;
  color: #4a90e2;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.contact-info h2 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 0.7rem;
  color: #555;
  font-size: 0.95rem;
}
</style>
