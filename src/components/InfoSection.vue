<template>
  <section class="info-section" :class="{ reverse: reverse }">
    <div class="info-text">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
    <div class="info-image">
      <img :src="image" :alt="title" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoSection',
  props: {
    title: String,
    text: String,
    image: String,
    reverse: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.info-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.info-section.reverse {
  flex-direction: row-reverse;
}

.info-text {
  flex: 1;
}

.info-text h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.info-text p {
  font-size: 1.1rem;
  color: #555;
}

.info-image {
  flex: 1;
}

.info-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
