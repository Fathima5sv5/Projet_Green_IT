<template>
    <div class="home-container">
      <!-- Header & Sidebar -->
      <Header @toggle-sidebar="sidebarOpen = !sidebarOpen"
              @toggle-login="showLogin = !showLogin" />
      <Sidebar :open="sidebarOpen" />
  
      <!-- Hero -->
      <main class="hero">
        <div class="hero-bg"></div>
        <div class="hero-text">
          <h2>Handy</h2>
          <p>
            <strong>Support Ammar's craftsmanship in pottery</strong><br />
            discovers 
            <router-link to="/category/tableware" class="link-highlight">
              his products
            </router-link> this week!
          </p>
          <!-- CTA -->
          <router-link to="/category/tableware" class="cta-button">
            Shop Now
          </router-link>
        </div>
        <!-- Scroll indicator -->
        <div class="scroll-indicator" @click="scrollDown">&#8964;</div>
      </main>
  
      <!-- Login pop-up -->
      <section v-if="showLogin" class="login-section">
        <!-- Composant Login ici -->
      </section>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Header  from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import Footer  from '../components/Footer.vue'
  
  const sidebarOpen = ref(false)
  const showLogin   = ref(false)
  
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }
  </script>