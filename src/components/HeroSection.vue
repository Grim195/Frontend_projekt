<template>
  <section class="hero" :style="{ backgroundImage: `url(${image})` }">
    <div class="hero-overlay">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.hero {
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2rem 3rem;
  border-radius: 8px;
  text-align: center;
}

.hero h1 {
  margin: 0;
  font-size: 2rem;
}

.hero p {
  margin-top: 0.5rem;
  color: #555;
}
</style>
