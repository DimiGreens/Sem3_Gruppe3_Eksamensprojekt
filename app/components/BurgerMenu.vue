<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
 
const isOpen = ref(false)
 
const burger = ref<SVGSVGElement | null>(null)
const chips = ref<SVGSVGElement | null>(null)
const menu = ref<HTMLElement | null>(null)
 
function toggleMenu() {
  isOpen.value = !isOpen.value
  isOpen.value ? openMenu() : closeMenu()
}
 
function openMenu() {
  gsap.to(burger.value, {
    y: -120,
    scale: 1.1,
    autoAlpha: 0,
    duration: 0.25,
    ease: 'power2.out'
  })
 
  gsap.to(chips.value, {
    autoAlpha: 1,
    duration: 0.15
  })
 
  gsap.to('#chip-no-sauce', {
    rotate: 45,
    duration: 0.25,
    ease: 'power2.out'
  })
 
  gsap.to('#chip-with-sauce', {
    rotate: -45,
    duration: 0.25,
    ease: 'power2.out'
  })
 
  gsap.to(menu.value, {
    x: 0,
    autoAlpha: 1,
    duration: 0.4,
    ease: 'power2.out'
  })
}
 
function closeMenu() {
  gsap.to(chips.value, {
    autoAlpha: 0,
    duration: 0.15
  })
 
  gsap.to('#chip-no-sauce, #chip-with-sauce', {
    rotate: 0,
    duration: 0.2,
    ease: 'power2.in'
  })
 
  gsap.to(burger.value, {
    y: 0,
    scale: 1,
    autoAlpha: 1,
    duration: 0.25,
    ease: 'power2.out'
  })
 
  gsap.to(menu.value, {
    x: -260,
    autoAlpha: 0,
    duration: 0.35,
    ease: 'power2.in'
  })
}
 
onMounted(() => {
  gsap.set(menu.value, { x: -260, autoAlpha: 0 })
  gsap.set(chips.value, { autoAlpha: 0 })
})
</script>
 
<template>
<div class="menu-wrapper">
<div class="icon" @click="toggleMenu">
 
      <!-- Chips (X) -->
<svg ref="chips" width="70" height="70" viewBox="0 0 70 70">
<line
          id="chip-no-sauce"
          x1="15" y1="35"
          x2="55" y2="35"
          stroke="#FFDE5E"
          stroke-width="8"
          stroke-linecap="round"
          transform-origin="50% 50%"
          transform-box="fill-box"
        />
<line
          id="chip-with-sauce"
          x1="15" y1="35"
          x2="55" y2="35"
          stroke="#FFDE5E"
          stroke-width="8"
          stroke-linecap="round"
          transform-origin="50% 50%"
          transform-box="fill-box"
        />
</svg>
 
      <!-- Burger -->
<svg ref="burger" width="70" height="56" viewBox="0 0 70 56">
<rect x="0" y="0" width="70" height="12" rx="6" fill="#FFE797" />
<rect x="0" y="22" width="70" height="10" rx="5" fill="#5C2610" />
<rect x="0" y="40" width="70" height="12" rx="6" fill="#FFE797" />
</svg>
</div>
 
    <!-- MENU -->
<nav ref="menu" class="menu">
<a href="#">Menu</a>
<a href="#">Drinks</a>
<a href="#">Contact</a>
<a href="#">Location</a>
</nav>
</div>
</template>
 
<style scoped>
.menu-wrapper {
  position: fixed;
  top: 40px;
  left: 40px;
}
 
.icon {
  width: 70px;
  height: 56px;
  position: relative;
  cursor: pointer;
  z-index: 20;
}
 
.icon svg {
  position: absolute;
  top: 0;
  left: 0;
}
 
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: #fff9a5;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 10;
}
 
.menu a {
  font-size: 18px;
  text-decoration: none;
  color: #333;
}
</style>