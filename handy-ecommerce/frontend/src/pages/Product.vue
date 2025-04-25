<template>
    <div class="home-container">
      <!-- Header & Sidebar -->
      <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" @toggle-login="showLogin = !showLogin" />
      <Sidebar :open="sidebarOpen" />
  
      <!-- Contenu principal du produit -->
      <div class="container">
        <!-- Left side: product image and heart icon -->
        <div class="left-side">
          <img
            alt="Elegant ceramic vase with smooth curves and a glossy finish, placed on a white background"
            class="product-image"
            src="../../public/img/vase1.jpg"
          />
          <button 
            aria-label="Add to favorites"
            class="heart-button"
            :class="{ 'text-red-600': isFavorited }"  
            @click="toggleFavorite"
          >
            {{ isFavorited ? '❤️' : '♡' }}
          </button>
        </div>
  
        <!-- Right side: product details -->
        <div class="right-side">
          <div class="brand">Artisan Collection</div>
          <h1 class="title">Elegant Ceramic Vase - Handcrafted - 30 cm</h1>
          <p class="description">Perfect for home decoration or as a gift</p>
          <p class="description">
            This handcrafted ceramic vase features smooth curves and a glossy finish, adding elegance to any room.
            <span v-if="showFullDescription" class="full-description">
              It’s perfect for holding your favorite flowers or as a standalone art piece for your shelf. With its unique
              design, this vase is a beautiful addition to any interior space.
            </span>
            <a href="#" class="learn-more" @click.prevent="toggleDescription">
              {{ showFullDescription ? 'Show less' : 'Learn more' }}
            </a>
          </p>
  
          <div class="price-section">
            <span class="price">€35.00</span><br />
            <span class="price-per-liter">Price includes VAT</span>
          </div>
  
          <div class="quantity-section">
            <button aria-label="Decrease quantity" class="qty-btn" @click="decrease">−</button>
            <input aria-label="Quantity" class="qty-input" type="number" min="1" v-model.number="quantity" />
            <button aria-label="Increase quantity" class="qty-btn" @click="increase">+</button>
            <button aria-label="Add to cart" class="add-cart-btn">
              <span>Add to cart</span>
            </button>
          </div>
  
          <div class="artisan-section">
            <img
              alt="Round portrait of an artisan artist from Peru"
              class="artisan-image"
              src="../../public/img/artisant1.png"
            />
            <p class="artisan-text">
              This vase was handcrafted by an artisan artist located in Peru.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import Header from '../components/Header.vue';
  import Sidebar from '../components/Sidebar.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: "Product",
    components: {
      Header,
      Sidebar,
      Footer,
    },
    setup() {
      const quantity = ref(1);
      const showFullDescription = ref(false);
      const isFavorited = ref(false);
      const sidebarOpen = ref(false);
      const showLogin = ref(false); // si jamais tu l’utilises plus tard
  
      const decrease = () => {
        if (quantity.value > 1) quantity.value--;
      };
      const increase = () => {
        quantity.value++;
      };
      const toggleFavorite = () => {
        isFavorited.value = !isFavorited.value;
      };
      const toggleDescription = () => {
        showFullDescription.value = !showFullDescription.value;
      };
  
      return {
        quantity,
        decrease,
        increase,
        toggleFavorite,
        toggleDescription,
        showFullDescription,
        isFavorited,
        sidebarOpen,
        showLogin
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  @media (min-width: 768px) {
    .container {
      flex-direction: row;
    }
  }
  .left-side {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .product-image {
    max-width: 300px;
    width: 100%;
    height: auto;
  }
  .heart-button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    font-size: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
    transition: color 0.3s ease;
  }
  .heart-button:hover {
    color: #db2777; /* pink-600 */
  }
  .heart-button.favorited {
  color: #e11d48; /* red-600 */
}
.learn-more {
  text-decoration: underline;
  color: black;
  cursor: pointer;
}
.learn-more:hover {
  color: #e11d48; /* pink-600 */
}

  .right-side {
    flex: 1;
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    .right-side {
      margin-top: 0;
    }
  }
  .brand {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #9ca3af; /* gray-400 */
    margin-bottom: 0.25rem;
    user-select: none;
  }
  .title {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.25;
    margin-bottom: 0.5rem;
  }
  .description {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
  .learn-more {
    text-decoration: underline;
    color: black;
  }
  .price-section {
    margin-bottom: 1rem;
  }
  .price {
    font-weight: 800;
    font-size: 1.875rem;
    line-height: 1;
  }
  .price-per-liter {
    font-size: 0.75rem;
    line-height: 1;
  }
  .quantity-section {
    display: flex;
    gap: 0.5rem;
    max-width: 400px;
    margin-bottom: 1.5rem;
    align-items: center;
  }
  .qty-btn {
    width: 3rem;
    height: 3rem;
    background-color: #e5e7eb; /* gray-200 */
    font-size: 1.5rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .qty-input {
    width: 4rem;
    height: 3rem;
    text-align: center;
    border: 1px solid #d1d5db; /* gray-300 */
    font-size: 1.125rem;
    font-weight: 600;
  }
  .add-cart-btn {
    flex: 1;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 3rem;
  }
 
  .artisan-section {
    border: 1px solid black;
    padding: 1rem;
    max-width: 400px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .artisan-image {
    width: 4rem;
    height: 4rem;
    border-radius: 9999px;
    object-fit: cover;
  }
  .artisan-text {
    font-weight: 700;
    font-size: 0.875rem;
  }
  </style>