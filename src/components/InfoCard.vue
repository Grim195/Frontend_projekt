<template>
  <div class="info-card">
    <div v-if="icon" class="icon-wrapper">
      <img :src="icon" :alt="title" />
    </div>

    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.info-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  max-width: 260px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
}

/* Icon container */
.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background-color: #f0f6ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icon image */
.icon-wrapper img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

/* Title */
.info-card h3 {
  margin: 0.5rem 0;
  font-size: 1.05rem;
  font-weight: 600;
}

/* Description */
.info-card p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
}
</style>
