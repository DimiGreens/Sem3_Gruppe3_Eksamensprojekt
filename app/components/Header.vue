<script setup>
// Vi importere ref, onMounted & onUnmounted
// onUnmounted køres når et element fjernes fra grændefladen
import { ref, onMounted, onUnmounted } from 'vue'

// Reaktive variabler
const isOpen = ref(false)
const isMobile = ref(false)

// En variabel som tjekker efter en bestemt skærmbredde, i dette tilfælde 700px. Skal bruges til at styrer navigationsbaren
const checkScreen = () => {
  // isMobile er true hvis skærmbredden er mindre en 700px
  isMobile.value = window.innerWidth < 700
  // Hvis isMobile er false (skærmbredde større end 700px), så er isOpen true
  if (!isMobile.value) isOpen.value = true
}

// Når elementet vises på grændefladen
onMounted(() => {
  // Kør checkScreen funktionen
  checkScreen()
  // Tilføj en eventlistener på siden, som lytter efter 'resize' (ændres skærmbredden)
  window.addEventListener('resize', checkScreen)
})

// Når elementet fjernes
onUnmounted(() => {
  // Fjern eventlisteneren
  window.removeEventListener('resize', checkScreen)
})

// De tidligere nævnte eventlisteners gør, at isMobile variablen skifter mellem true eller false, alt efter brugerens skærmbredde

// En variabel som skal åbne menuen
const toggleNav = () => {
  // isOpen (Som normalt er false) skiftes til !isOpen (Skiftes til true)
  isOpen.value = !isOpen.value
}

// En variabel som skal lukke menuen
const closeNav = () => {
  // Skift isOpen() til false
  isOpen.value = false
}
</script>

<template>
  <header id="top">
    <img src="../assets/img/ullaTLogo.jpg" alt="Cafe logo" class="cafeLogo">
    <button v-if="isMobile" @click="toggleNav"><FontAwesomeIcon :icon="['fas', 'bars']" class="fontIcon" /></button>
    <transition name="slide">
      <nav v-show="isOpen" class="nav">
        <!-- Vores navigationsbar som ændres alt efter skærmbredde -->
        <button v-if="isMobile" class="close-btn" @click="closeNav"><FontAwesomeIcon :icon="['fas', 'x']" class="fontIcon" /></button>
        
        <!-- Vores links til undersider, hvor navigationsbaren lukkes igen efter man har trykket -->
        <NuxtLink to="/" @click="isMobile && closeNav()">Forside</NuxtLink>
        <NuxtLink to="/menu" @click="isMobile && closeNav()">Menu</NuxtLink>
        <NuxtLink to="/book" @click="isMobile && closeNav()">Book bord</NuxtLink>
        <NuxtLink to="/events" @click="isMobile && closeNav()">Events</NuxtLink>
        <NuxtLink to="/about" @click="isMobile && closeNav()">Om os</NuxtLink>
        <NuxtLink to="/contact" @click="isMobile && closeNav()">Kontakt</NuxtLink>
        
        <section class="openHours">
          <h3>Åbningstider</h3>
          <p>Mandag: lukket</p>
          <p>Tirsdag: 11:00 - 23:30</p>
          <p>Onsdag: 11:00 - 23:30</p>
          <p>Torsdag: 11:00 - 23:30</p>
          <p>Fredag: 13:00 - 02:00</p>
          <p>Lørdag: 10:00 - 02:00</p>
          <p>Søndag: lukket</p>
        </section>

      </nav>
    </transition>
  </header>

</template>

<style scoped>
.openHours{
  color: #fb9fc4;
}

.openHours p{
  margin: 0;
  font-family: "Indie Flower", cursive;
}

.openHours h3{
  margin-bottom: 0;
  font-family: "Poppins", sans-serif;
}

.fontIcon{
  height: 100%;
  width: 100%;
  color: white;
}

.cafeLogo{
width: 80px;
height: 60px;
}

header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--navGray);
  z-index: 99;
}

button {
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  outline: none;
}

.nav {
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--navGray);
  width: 60vw;
  height: 100vh;
  z-index: 99;
  padding-left: 3rem;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 1rem 0;
  font-family: "Indie Flower", cursive;
  font-size: 1.2rem;
  /* margin: 0.5rem; */
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

/* Vores medie query som ændre på navigationsbarens udseende alt efter skærmbredde */
@media screen and (min-width: 700px) {
  header {
    background-color: grey;
  }

  .nav {
    display: flex !important;
    flex-direction: row;
    position: static;
    width: auto;
    height: auto;
    transform: none;
    background-color: transparent;
  }

  .nav a {
    margin: 0 1rem;
  }

  button {
    display: none;
  }
}
</style>
