// File: frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Product from '../pages/Product.vue';
import Tableware from '../pages/Tableware.vue';
import Profil from '../pages/Profil.vue';
import AjoutProduit from '../pages/AjoutProduit.vue';



const routes = [
  { path: '/', component: Tableware},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/product', component: Product},
  { path: '/tableware', component: Tableware},
  { path: '/profil', component: Profil},
  { path: '/ajoutproduit', component: AjoutProduit},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;