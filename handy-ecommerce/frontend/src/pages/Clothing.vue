<template>
  <div class="tableware-page">
    <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    <Sidebar :open="sidebarOpen" />

    <main class="content">
      <section class="intro-hero-container">
        <div class="introduction">
          <h2 class="intro-title">Clothing</h2>
          <p class="intro-text">
            Each piece of pottery is a unique creation that reflects the rich cultural heritage and artistry of its origin.
            By choosing our handmade tableware, you are not only acquiring a beautiful item for your home but also supporting
            skilled artisans who pour their heart and soul into their craft.
          </p>
        </div>

        <div class="hero">
          <div class="hero-image">
            <img src="/img/couturiere_clothe.jpg" alt="Potter at work" />
          </div>
        </div>
      </section>

      <section class="products">
        <div class="product" v-for="(item, index) in items" :key="index">
          <h3 class="product-country">{{ item.country }}</h3>
          <img :src="item.image" :alt="item.title" />
          <p class="product-name">{{ item.name }}</p>
          <p class="product-price">{{ item.price }}€</p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import {ref} from "vue";
import Sidebar from "../components/Sidebar.vue";
const sidebarOpen = ref(false)

const items = [
  {
    country: 'Kazakstan',
    name: 'TRADITIONAL KIMONO',
    price: 400,
    image: '/img/kimono_clothe.jpg'
  },
  {
    country: 'Kazakstan',
    name: 'PATTERNED JACKET',
    price: 300,
    image: '/img/veste_rose_clothe.jpg'
  },
  {
    country: 'Marocco',
    name: 'HANDMADE SHOES',
    price: 55,
    image: '/img/mar_shoe_clothe.jpg'
  },
  {
    country: 'Scotland',
    name: 'TRADITIONAL KILT',
    price: 208,
    image: '/img/kilt_clothe.jpg'
  },
  {
    country: 'Kenya',
    name: 'PATTERNED JACKET',
    price: 133,
    image: '/img/clothe_image1.jpg'
  }

]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=The+Seasons&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap');

.content {
  display: flex;
  flex-direction: column;
  background-color: #c27141;
}

.intro-hero-container {
  display: flex; /* Utilisation de flex pour aligner introduction et hero horizontalement */
  background-color: #c27141; /* Optionnel : couleur de fond pour renforcer la distinction */
}

.introduction {
  flex: 1; /* Prend la largeur restante */
  padding: 2rem;
}

.intro-title {
  font-size: 3rem;
  padding-top: 2rem;
  color: white;
  font-family: 'Heebo', sans-serif;
  text-decoration: underline;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 0.5rem;
  color: white;
  font-family: 'Heebo', sans-serif;
}

.hero {
  flex: 1; /* Prend la largeur restante pour équilibrer avec introduction */
  display: flex; /* Ajout de flex ici pour le contenu de la section */
  align-items: center; /* Centre verticalement l'image */
  justify-content: flex-end; /* Ajoute l'image à droite */
  background-color: #c27141; /* Couleur d'arrière-plan pour la section hero */
  color: white;
}

.hero-image img {
  max-width: 25rem;
  height: auto;
  object-fit: cover;
}

.products {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  background-color: #f5f5f5;
  gap: 2rem;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 220px;
  flex: 1 1 200px;
  box-sizing: border-box;
}

.product-country {
  font-family: 'The Seasons', serif;
  font-size: 1.6rem;
  margin-bottom: 2rem;
}

.product img {
  width: 100%;
  aspect-ratio: 1 / 1; /* Carré */
  object-fit: cover;
  border: 1px solid #ccc;
}

.product-name {
  background-color: #c27141;
  color: white;
  padding: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  text-align: center;
  font-weight: bold;
}

.product-price {
  margin-top: 0.3rem;
  font-weight: bold;
  font-family: 'Heebo';
  font-size: 1.6rem;
}
</style>