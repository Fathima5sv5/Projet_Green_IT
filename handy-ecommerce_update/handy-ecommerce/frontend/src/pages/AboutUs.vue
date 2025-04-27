<template>
  <div class="home-container">
    <!-- Header & Sidebar -->
    <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" @toggle-login="showLogin = !showLogin" />
    <Sidebar :open="sidebarOpen" />

    <div class="about-content">
      <h1>About Us</h1>

      <!-- 1) À propos de HANDY -->
      <section class="about-section">
        <div class="text-block">
          <h2>À propos de HANDY</h2>
          <hr />
          <p>
            HANDY est une place de marché éthique et à but lucratif qui met en contact
            direct des artisans traditionnels du monde entier avec des clients soucieux
            de qualité et de juste rémunération.
          </p>
        </div>
        <img src="/img/aboutus_shea2.jpg" alt="Artisan indien" loading="lazy" />
      </section>

      <!-- 2) Pourquoi HANDY ? -->
      <section class="about-section reverse">
        <div class="text-block">
          <h2>Pourquoi HANDY ?</h2>
          <hr />
          <p>
            Chez HANDY, nous constatons que de nombreux artisans talentueux se retrouvent
            coincés dans des circuits dominés par de grandes entreprises, qui tirent profit
            de leur travail sans reconnaître leur contribution.
          </p>
          <ol>
            <li>Redonner du pouvoir aux artisans en leur offrant une vitrine mondiale.</li>
            <li>Informer les acheteurs sur l’origine, les techniques et le contexte culturel.</li>
            <li>Soutenir un commerce équitable où chacun, créateur comme acheteur, y gagne.</li>
          </ol>
        </div>
        <img src="/img/aboutus_shea.jpg" alt="Artisan indien" loading="lazy" />
      </section>

      <!-- 3) Engagement & modèle économique -->
      <section class="two-column">
        <div class="text-block">
          <h2>Notre engagement</h2>
          <hr />
          <ul>
            <li><strong>Transparence totale :</strong> prix, provenance et commissions affichés.</li>
            <li><strong>Commerce responsable :</strong> méthodes respectueuses de l’environnement.</li>
            <li><strong>Accompagnement local :</strong> formations et soutien aux communautés.</li>
          </ul>
        </div>
        <div class="text-block">
          <h2>Notre modèle économique</h2>
          <hr />
          <p>
            HANDY prélève une commission fixe de <strong>10 %</strong> sur chaque vente pour
            couvrir le développement, le marketing et la logistique. Les
            <strong>90 %</strong> restants sont reversés directement à l’artisan.
          </p>
        </div>
      </section>
    </div>

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
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=The+Seasons&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap');

/* Conteneur principal */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Main content */
.about-content {
  flex-grow: 1;
  padding: 80px 2rem 4rem; /* Moins d’espace en haut pour compenser header */
  max-width: 1000px;
  margin: 0 auto;
}

/* Titre principal */
.about-content h1 {
  font-family: 'The Seasons', serif;
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Sections */
.about-section {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
}

.about-section.reverse {
  flex-direction: row-reverse;
}

.text-block {
  flex: 1;
}

.text-block h2 {
  font-family: 'The Seasons', serif;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.text-block h2 + hr {
  width: 100px;
  height: 3px;
  background: #800000;
  border: none;
  margin: 0 0 1rem 0;
}

/* Images */
.about-section img {
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  object-fit: cover;
}

/* Two-column layout */
.two-column {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.two-column .text-block {
  flex: 1;
}

/* Texte */
.text-block p,
.text-block ul,
.text-block ol,
.text-block li {
  font-family: 'Arimo', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
}

/* Footer styling */
footer {
  margin-top: auto;
}
</style>
