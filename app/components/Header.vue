<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isMobile = ref(false)

const checkScreen = () => {
  isMobile.value = window.innerWidth < 700
  if (!isMobile.value) isOpen.value = true
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})

const toggleNav = () => {
  isOpen.value = !isOpen.value
}

const closeNav = () => {
  isOpen.value = false
}
</script>

<template>
  <header>
    <p>LOGO</p>
    <button v-if="isMobile" @click="toggleNav">Åben</button>
  </header>

  <transition name="slide">
    <nav v-show="isOpen" class="nav">
      <button v-if="isMobile" class="close-btn" @click="closeNav">Luk</button>
      
      <NuxtLink to="/" @click="isMobile && closeNav()">Forside</NuxtLink>
      <NuxtLink to="/menu" @click="isMobile && closeNav()">Menu</NuxtLink>
      <NuxtLink to="/book" @click="isMobile && closeNav()">Book bord</NuxtLink>
      <NuxtLink to="/events" @click="isMobile && closeNav()">Events</NuxtLink>
      <NuxtLink to="/about" @click="isMobile && closeNav()">Om os</NuxtLink>
    </nav>
  </transition>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--navGray);
}

button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--navGray);
  width: 60vw;
  height: 100vh;
  z-index: 99;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 1rem;
  margin: 0.5rem;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
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
