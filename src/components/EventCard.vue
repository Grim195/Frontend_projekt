<template>
  <div class="event-card">
    <img
      v-if="event.image"
      :src="event.image"
      :alt="event.title"
      class="event-image"
    />

    <div class="event-info">
      <h2>{{ event.title }}</h2>
      <p class="date">{{ event.date }}</p>
      <p class="price">Price: {{ event.price }} €</p>

      <p v-if="event.availableTickets === 0" class="sold-out">
        Sold Out
      </p>
      <p v-else>
        Tickets left: {{ event.availableTickets }}
      </p>

      <div class="buttons">
      <button
        :disabled="event.availableTickets === 0"
        @click="$emit('add-to-cart', event)"
      >
        Add to Cart
      </button> 
      <button @click="$emit('view-details', event.id)">
        View Details
      </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.event-card:hover {
  transform: translateY(-3px);
}

.event-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.event-info {
  padding: 1rem;
  text-align: center;
}

.event-info h2 {
  margin: 0.5rem 0;
}

.event-info .date,
.event-info .price {
  margin: 0.3rem 0;
  color: #555;
}

.sold-out {
  color: red;
  font-weight: bold;
}

.add-btn {
  margin-top: 1rem;
  padding: 0.6rem 1.4rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-btn:hover:not(:disabled) {
  background-color: #357abd;
}

.add-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.buttons button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.buttons button:first-child {
  background-color: #4a90e2;
  color: white;
}

.buttons button:first-child:hover:not(:disabled) {
  background-color: #357abd;
}

.buttons button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.buttons button:last-child {
  background-color: #f0f0f0;
}

.buttons button:last-child:hover {
  background-color: #ccc;
}
</style>
