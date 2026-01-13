<template>
  <div class="info-card">
    <img v-if="icon" :src="icon" :alt="title" class="icon" />
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
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.info-card:hover {
  transform: translateY(-3px);
}

.info-card .icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.info-card h3 {
  margin: 0.5rem 0;
}

.info-card p {
  color: #555;
  font-size: 0.95rem;
}
</style>
