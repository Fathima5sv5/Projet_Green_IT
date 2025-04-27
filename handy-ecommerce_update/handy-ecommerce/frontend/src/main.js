import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style_ameliore.css';

createApp(App)
  .use(router)
  .mount('#app');
