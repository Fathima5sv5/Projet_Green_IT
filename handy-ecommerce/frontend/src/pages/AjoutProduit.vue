<template>
    <div class="add-product-container">
      <h1>Ajouter un produit</h1>
      <form @submit.prevent="handleSubmit" class="form">
        <label>
          Nom du produit :
          <input type="text" v-model="product.name" required />
        </label>
  
        <label>
          Description :
          <textarea v-model="product.description" required></textarea>
        </label>
  
        <label>
          Prix (€) :
          <input type="number" v-model.number="product.price" step="0.01" required />
        </label>
  
        <label>
          Image (URL) :
          <input type="text" v-model="product.image" />
        </label>
  
        <button type="submit">Ajouter</button>
      </form>
  
      <div v-if="submitted" class="success-message">
        ✅ Produit ajouté avec succès !
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  const product = reactive({
    name: '',
    description: '',
    price: null,
    image: ''
  })
  
  const submitted = ref(false)
  
  const handleSubmit = () => {
    console.log('Produit à ajouter :', product)
  
    // Tu peux envoyer ça à une API ici avec fetch/axios
    submitted.value = true
  
    // Réinitialiser le formulaire
    product.name = ''
    product.description = ''
    product.price = null
    product.image = ''
  }
  </script>
  
  <style scoped>
  .add-product-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1.5rem;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
  }
  
  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  button {
    background-color: #800000;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }
  
  button:hover {
    background-color: #a00000;
  }
  
  .success-message {
    margin-top: 1rem;
    text-align: center;
    color: green;
    font-weight: bold;
  }
  </style>
  