<template>
  <section class="newsletter">
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <div class="form">
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
        />
        <button @click="subscribe">Subscribe</button>
      </div>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NewsletterSignup',
  props: {
    title: { type: String, default: 'Subscribe to Our Newsletter' },
    text: { type: String, default: 'Get the latest events and exclusive offers straight to your inbox!' }
  },
  setup() {
    const email = ref('')
    const message = ref('')

    const subscribe = () => {
      if (!email.value) {
        message.value = 'Please enter a valid email.'
        return
      }
      message.value = `Thanks for subscribing, ${email.value}!`
      email.value = ''
    }

    return {
      email,
      message,
      subscribe
    }
  }
}
</script>

<style scoped>
.newsletter {
  background-color: #f9f9f9;
  padding: 3rem 1.5rem;
  text-align: center;
  border-radius: 12px;
  margin: 3rem 0;
}

.newsletter h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.newsletter p {
  color: #555;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.form input {
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1 1 250px;
  max-width: 400px;
}

.form button {
  padding: 0.6rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.form button:hover {
  background-color: #357abd;
}

.message {
  color: #27ae60;
  font-weight: bold;
}
</style>
