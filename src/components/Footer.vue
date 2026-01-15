<template>
  <footer class="site-footer">
    <div class="footer-content">
      <!-- Brand Section -->
      <div class="footer-section">
        <h3>Ticket Gate</h3>
        <p>Your gateway to unforgettable events</p>
      </div>

      <!-- Quick Links -->
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/listing">Events</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-section">
        <h4>Contact Us</h4>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@ticketgate.com</p>
        <p><strong>Address:</strong> 123 Event Street, City</p>
      </div>

      <!-- Social Links -->
      <div class="footer-section">
        <h4>Follow Us</h4>
        <div class="social-links">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p>&copy; 2026 Ticket Gate. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Footer',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.site-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #4a90e2;
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #4a90e2;
}

.footer-section p {
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin: 0.5rem 0;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #4a90e2;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-links a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #4a90e2;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 1.5rem;
}

.footer-bottom p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    align-items: center;
  }
}
</style>