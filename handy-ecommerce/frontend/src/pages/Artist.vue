<template>
    <div class="home-container">
      <!-- Header & Sidebar -->
      <Header @toggle-sidebar="sidebarOpen = !sidebarOpen"
              @toggle-login="showLogin = !showLogin" />
      <Sidebar :open="sidebarOpen" />
  
      <!-- Contenu spécifique Artists -->
      <main class="artist-content">
        <h1>Artists</h1>
        <p>
          <strong>Support Ammar’s craftsmanship in pottery</strong><br />
          discovers 
          <router-link to="/category/tableware" class="link-highlight">
            his products
          </router-link> this week!
        </p>
  
        <div class="artist-profile">
          <img src="/img/Page_login.jpg" alt="Studio Medium photo" />
          <div class="artist-text">
            <h2>Studio Medium, Delhi</h2>
            <hr />
            <p>
              Studio Medium is a Delhi-based brand by Riddhi Jain Satija. They “work with a combination
              of traditional handwoven textiles and resist dyeing techniques using natural and azo-free dyes”.
              Their hands-free saree balances perfectly on the line between tradition and innovation;
              the socket to put your hand through looks like a portal. The saree takes approximately
              24-28 days to ship after the date of order. The saree came with the blouse piece and is absolutely
              stunning; the dye work on it moves seamlessly between black, navy, and a delicious pastel blue.
            </p>
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import Footer from '../components/Footer.vue'
  
  const sidebarOpen = ref(false)
  const showLogin = ref(false)
  </script>
  
  <style scoped>
  .artist-content {
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .artist-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .artist-content p {
    line-height: 1.6;
  }
  
  .artist-profile {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .artist-profile img {
    width: 300px;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .artist-text h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  
  .artist-text hr {
    width: 100px;
    height: 3px;
    background: #800000;
    border: none;
    margin: 0.5rem 0 1rem;
  }
  </style>
  