<!-- frontend/src/pages/Cart.vue -->
<template>
  <div class="home-container">
    <Header @toggle-sidebar="sidebarOpen = !sidebarOpen"
            @toggle-login="showLogin = !showLogin" />
    <Sidebar :open="sidebarOpen" />

    <main class="main-content">
      <div class="cart-container">
        <h1>Your Shopping Cart</h1>

        <div v-if="!cartItems.length" class="empty-cart">
          <p>Your cart is empty.</p>
        </div>

        <div v-else class="cart-content">
          <!-- Liste scrollable -->
          <ul class="cart-items">
            <li v-for="(item, idx) in cartItems" :key="item.id" class="cart-item">
              <div class="cart-item-image-container">
                <img :src="item.image" :alt="item.name" class="cart-item-image" />
              </div>
              <div class="cart-item-details">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
                <div class="quantity-price">
                  <input
                    type="number"
                    v-model.number="item.quantity"
                    min="1"
                    class="quantity-input"
                  />
                  <p class="price">€{{ (item.price * item.quantity).toFixed(2) }}</p>
                </div>
              </div>
            </li>
          </ul>

          <!-- Total + bouton fixes en bas -->
          <div class="cart-bottom">
            <div class="cart-total">
              <h3>Total Price:</h3>
              <p>€{{ totalPrice.toFixed(2) }}</p>
            </div>
            <button @click="checkout" class="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Header  from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer  from '../components/Footer.vue'

const sidebarOpen = ref(false)
const showLogin   = ref(false)
const cartItems   = ref([])

// 1) Charger depuis localStorage au montage
onMounted(() => {
  cartItems.value = JSON.parse(localStorage.getItem('cart') || '[]')
})

// 2) Sauvegarder à chaque changement profond
watch(cartItems, newVal => {
  localStorage.setItem('cart', JSON.stringify(newVal))
}, { deep: true })

// Calcul du total
const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

// (Facultatif) tester la validation
const checkout = () => {
  alert(`Vous payez €${totalPrice.value.toFixed(2)}. Merci !`)
}
</script>

<style scoped>
/* Container général */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}

/* Container panier */
.cart-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px); /* Ajuste selon ton header/footer */
}

h1 {
  text-align: center;
}

/* Partie du panier */
.cart-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

/* Liste scrollable */
.cart-items {
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  flex: 1;
}

/* Chaque item */
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.cart-item-image-container {
  flex-shrink: 0;
  margin-right: 1rem;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-item-details {
  flex: 1;
}

.cart-item-details h3 {
  margin: 0;
  font-size: 1.2rem;
}

.quantity-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-input {
  width: 50px;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.price {
  font-weight: bold;
  color: #800000;
}

/* Partie bas du panier */
.cart-bottom {
  padding-top: 1rem;
  background-color: #f9f9f9;
  border-top: 1px solid #ccc;
}

.cart-total {
  text-align: right;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.checkout-button {
  width: 100%;
  padding: 1rem;
  background-color: #800000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.checkout-button:hover {
  background-color: #a00000;
  transform: scale(1.02);
}

/* Panier vide */
.empty-cart {
  text-align: center;
  font-size: 1.5rem;
  color: #888;
}
</style>
