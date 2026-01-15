<template>
  <button class="back-button" @click="$emit('go-back')">
    ← {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: 'Back' }
})
</script>

<style scoped>
.back-button {
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
  margin-bottom: 1.5rem;
}
.back-button:hover {
  background-color: #357abd;
}
</style>
