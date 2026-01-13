<template>
  <section class="page">
    <h1 class="page-title">Events</h1>

    <ul class="listing">
      <li v-for="item in items" :key="item.id">
        <strong>{{ item.name }}</strong><br />
        {{ item.description }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ListingView',
  data() {
    return {
      items: [
        { id: 1, name: 'Concert Night', description: 'Live music event' },
        { id: 2, name: 'Tech Conference', description: 'Talks & networking' },
        { id: 3, name: 'Art Expo', description: 'Modern art exhibition' }
      ]
    }
  }
}
</script>

<style scoped>
.page-title {
  margin-bottom: 2rem;
}

.listing {
  list-style: none;
  padding: 0;
}

.listing li {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}
</style>
