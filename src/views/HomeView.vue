<template>
  <!-- HERO -->
  <section class="hero">
    <div class="overlay"></div>

    <div class="hero-content">
      <h1>Ticket Gate</h1>
      <p>Your gateway to unforgettable events</p>
    </div>
  </section>

  <!-- PAGE CONTENT -->
  <section class="content">
    <div class="content-inner">
      <h2>Welcome</h2>
      <p>
        Ticket Gate is a platform where you will soon be able to browse and
        purchase tickets for concerts, conferences and cultural events.
      </p>

      <h2>Featured Events</h2>
      <p>
        Events will be loaded dynamically from a database in the future.
      </p>
    </div>
  </section>
</template>


<script>
export default {
  name: 'HomeView'
}
</script>

<<style scoped>
/* HERO SECTION */
.hero {
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  height: 70vh;

  background-image: url('@/assets/hero.jpg');
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* Dark overlay */
.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
}

/* Hero text */
.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.3rem;
}

/* CONTENT BELOW HERO */
.content {
  background-color: white;
  padding: 4rem 1.5rem;
}

.content-inner {
  max-width: 900px;
  margin: 0 auto;
}

.content-inner h2 {
  margin-top: 2rem;
}
</style>