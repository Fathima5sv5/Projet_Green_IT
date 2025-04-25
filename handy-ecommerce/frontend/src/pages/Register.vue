<template>
    <div class="register-page">
      <!-- Header -->
      <Header />
  
      <!-- Main content: image + form -->
      <div class="register-content">
        <!-- Image side -->
        <div class="register-image">
          <img src="/img/Login.png" alt="Artisan at work" />
        </div>
        <!-- Form side -->
        <div class="register-form-container">
          <div class="register-form-card">
            <h2>Create Your Account</h2>
            <form @submit.prevent="handleRegister">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input id="firstName" type="text" v-model="firstName" required placeholder="John" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text" v-model="lastName" required placeholder="Doe" />
              </div>
              <div class="form-group">
                <label for="email">E-mail</label>
                <input id="email" type="email" v-model="email" required placeholder="you@example.com" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" v-model="password" required placeholder="********" />
              </div>
              <button type="submit" class="btn-register">REGISTER</button>
            </form>
            <div class="helper-links">
              <span>Already have an account? </span>
              <router-link to="/login" class="link-login">Log in</router-link>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const handleRegister = () => {
    // TODO: call API /api/auth/register
    console.log(firstName.value, lastName.value, email.value, password.value)
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .register-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .register-content {
    flex: 1;
    display: flex;
    overflow: hidden;
    margin-top: 60px;    /* header height */
    margin-bottom: 50px; /* footer height */
  }
  
  .register-image {
    flex: 1;
  }
  .register-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
  }
  
  .register-form-container {
    width: 380px;
    background: #f8f4e6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .register-form-card {
    width: 100%;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .register-form-card h2 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }
  .form-group label {
    font-weight: 600;
    color: #555;
    margin-bottom: 0.5rem;
    display: block;
  }
  .form-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s;
  }
  .form-group input:focus {
    border-color: #800000;
    outline: none;
  }
  
  .btn-register {
    width: 100%;
    padding: 0.75rem;
    background: #f3c892;
    color: #800000;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 1rem;
  }
  .btn-register:hover {
    background: #e0b86f;
  }
  
  .helper-links {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #555;
  }
  .helper-links .link-login {
    color: #800000;
    text-decoration: none;
    font-weight: 500;
  }
  .helper-links .link-login:hover {
    text-decoration: underline;
  }
  </style>
  