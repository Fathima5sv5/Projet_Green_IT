<template>
    <div class="add-product-container">
      <h1>Add a New Product</h1>
  
      <form @submit.prevent="submitProduct">
  
        <!-- Product name -->
        <input v-model="product.name" type="text" placeholder="Product Name" required />
  
        <!-- Description -->
        <textarea v-model="product.description" placeholder="Product Description" required></textarea>
  
        <!-- Price -->
        <input v-model.number="product.price" type="number" placeholder="Price (€)" required />
  
        <!-- Category selection -->
        <div class="categories">
          <p>Select a Category:</p>
          <label
            v-for="cat in categories"
            :key="cat"
            class="category-radio"
          >
            <input
              type="radio"
              :value="cat"
              v-model="product.category"
              name="category"
            />
            <span class="dot"></span>
            <span class="category-name">{{ cat }}</span>
          </label>
        </div>
  
        <!-- Image picker -->
        <div class="image-picker">
          <div class="button-row">
            <button type="button" class="circle-btn" @click="pickFromGallery">📁</button>
            <button type="button" class="circle-btn" @click="takePhoto">📷</button>
          </div>
          <div v-if="product.image">
            <p>Image selected:</p>
            <img :src="product.image" alt="Product preview" class="preview-image" />
          </div>
        </div>
  
        <button type="submit" class="submit-btn">Add Product</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const product = ref({
    name: '',
    description: '',
    price: null,
    category: '',
    image: null
  })
  
  const categories = ['Furniture', 'Jewelry', 'Clothing', 'Tableware']
  
  const submitProduct = () => {
    console.log("Product submitted:", product.value)
  }
  
  const pickFromGallery = () => {
    product.value.image = 'https://via.placeholder.com/150'
  }
  
  const takePhoto = () => {
    product.value.image = 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Photo'
  }
  </script>
  
  <style scoped>
  .add-product-container {
    max-width: 500px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }
  
  .categories {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .category-radio {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    transition: 0.2s;
    position: relative;
  }
  
  .category-radio input {
    display: none;
  }
  
  .category-radio .dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 9999px;
    border: 2px solid #800000;
    display: inline-block;
    position: relative;
  }
  
  .category-radio input:checked + .dot::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #800000;
  }
  
  .category-name {
    font-weight: 500;
  }
  
  .image-picker {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .button-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .circle-btn {
    width: 3rem;
    height: 3rem;
    background-color: #800000;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .circle-btn:hover {
    background-color: #a00000;
  }
  
  .preview-image {
    max-width: 100%;
    height: auto;
    border: 1px solid #ccc;
    margin-top: 0.5rem;
  }
  
  .submit-btn {
    padding: 0.75rem;
    background-color: #800000;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .submit-btn:hover {
    background-color: #a00000;
  }
  </style>
  