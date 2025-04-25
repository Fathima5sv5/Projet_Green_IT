<!-- File: frontend/src/pages/Tableware.vue -->
<template>
  <div class="tableware-page">
    <Header />

    <main class="content">
      <section class="hero">
        <div class="hero-text">
          <h1>Tableware</h1>
          <p>
            Support Ammar's craftsmanship in pottery<br />
            <a href="#" class="highlight-link">discovers his products this week !</a>
          </p>
        </div>
        <div class="hero-image">
          <img src="/img/table_image1.jpg" alt="Potter at work" />
        </div>
      </section>

      <section class="products">
        <div class="product" v-for="(item, index) in items" :key="index">
          <img :src="item.image" :alt="item.title" />
          <h3>{{ item.country }}</h3>
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
console.log('Tableware.vue loaded')


const items = [
  {
    country: 'Turkey',
    name: 'HAND-PAINTED VASE',
    price: 70,
    image: '/img/pottery1.webp'
  },
  {
    country: 'France',
    name: 'DECORATIVE BOWL',
    price: 30,
    image: '/img/pottery1.webp'
  },
  {
    country: 'Mexico',
    name: 'PLATE SET',
    price: 60,
    image: '/img/table_image2.jpg'
  },
  {
    country: 'Uganda',
    name: 'WILD WOOD CUTLERY SET',
    price: 15,
    image: '/img/table_image3.jpg'
  }
]

</script>

<style scoped>
.tableware-page {
  padding-top: 60px;
}

.content {
  display: flex;
  flex-direction: column;
  background-color: white;
}

.hero {
  display: flex;
  flex-wrap: wrap;
  background-color: #804000;
  color: white;
}

.hero-text {
  flex: 1;
  padding: 2rem;
}

.hero-text h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.highlight-link {
  color: #cde8ff;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.hero-image {
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.products {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  background-color: #f5f5f5;
}

.product {
  text-align: center;
  width: 200px;
  margin: 1rem;
}

.product img {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
}

.product-name {
  background-color: #804000;
  color: white;
  padding: 0.5rem;
  margin-top: 0.5rem;
  font-weight: bold;
}

.product-price {
  margin-top: 0.3rem;
  font-weight: bold;
}
</style>
