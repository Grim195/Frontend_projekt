<template>
  <section class="page">
    <h1 class="page-title">Contact Us</h1>

    <form class="contact-form" @submit.prevent="submitForm">
      <label>Name</label>
      <input type="text" v-model="name" />

      <label>Email</label>
      <input type="email" v-model="email" />

      <label>Message</label>
      <textarea v-model="message"></textarea>

      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      alert('Form submitted!')
    }
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  padding: 0.6rem;
  font-size: 1rem;
}

button {
  padding: 0.7rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
