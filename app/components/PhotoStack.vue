<script setup>
  // Vi importere ref
import { ref } from 'vue'

// En liste af farver som skal bruges på grænsefladen
const colorWheel = ['#f4c4a4', '#f6dfa2', '#c4e3b5', '#acd0ec', '#c7b1e7']

// Vi importere vores billeder
import cafe17 from '@/assets/img/cafe17.png'
import cafe19 from '@/assets/img/cafe19.png'
import cafe18 from '@/assets/img/cafe18.png'
import cafe23 from '@/assets/img/cafe23.png'
import cafe22 from '@/assets/img/cafe22.png'

// Indhold som skal indsættes på grænsefladen
const images = ref([
  { title: "12/04-2025", date: "", url: cafe17 },
  { title: "15/06-2025", date: "", url: cafe19 },
  { title: "31/12-2025", date: "", url: cafe18 },
  { title: "12/04-2025", date: "", url: cafe23 },
  { title: "12/04-2025", date: "", url: cafe22 },
])

// En funktion som har til formål at rotere billederne tilfældigt
function randomRotation(i) {
  // En variabel som indeholder en tilfældig rotation (I dette tilfælde +- 30 grader)
  const deg = (Math.random() - 0.5) * 60
  return {
    // Returner en CSS style med den tilfældige rotation for alle billeder
    transform: `rotate(${deg}deg)`,
    zIndex: i + 1
  }
}

// Variabler som skal bruges til at åbne modaler for bestemte elementer i grænsefladen
const modalOpen = ref(false)
const currentIndex = ref(0)

// En funktion der åbner modalen til det tilsvarende element som brugeren trykkede på
function openModal(index = 0) {
  currentIndex.value = index
  modalOpen.value = true
}

// En funktion der lukker modalen
function closeModal() {
  modalOpen.value = false
}

// En funktion der går til næste billede i listen. Når vi når slutningen, starter vi forfra (cirkulær navigation)
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

// En funktion der går til forrige billede i listen. Wrap-around til sidste billede, hvis vi er på første
function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
</script>

<template>
  <!-- En div som indholder vores billeder -->
  <div class="pile" @click="openModal(0)">
    <!-- En div som looper igennem vores liste med billeder og indsætter tilsvarende indhold -->
    <!-- Her bliver den tilfælde rotation indsat, samt bliver baggrundsfarven ændret alt efter vores tidligere nævnte farve-liste -->
    <div
      v-for="(img, i) in images"
      :key="i"
      class="polaroid"
      :style="[randomRotation(i), {backgroundColor: colorWheel[i % colorWheel.length]} ]"
    >
      <img class="photoPile" :src="img.url" alt="" />
      <p class="polaroidText">{{ img.title }}</p>
    </div>
  </div>

  <!-- Vores åbne modal som viser mere indhold fra vores billede-liste -->
  <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="prev" @click.stop="prevImage"><FontAwesomeIcon :icon="['fas', 'arrow-left']" class="leftIcon" />Forrige</button>
      <div class="photoFrame" :style="{ backgroundColor: colorWheel[currentIndex % colorWheel.length] }">
        <img class="photoModal" :src="images[currentIndex].url" alt="" />
        <p class="photoTitle">{{ images[currentIndex].title }}</p>
        <p class="photoDate">{{ images[currentIndex].date }}</p>
      </div>
      <button class="next" @click.stop="nextImage">
        Næste
        <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="rightIcon" />
      </button>
      <button class="close" @click="closeModal"><FontAwesomeIcon :icon="['fas', 'x']" class="fontIcon" /></button>
    </div>
  </div>
</template>

<style scoped>
.photoModal{
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.photoPile{
  width: 200px;
  height: 200px;
}

.leftIcon, .rightIcon{
  color: #39afa5;
    width: 30px;
    height: 30px;
}



.fontIcon{
  height: 50px;
  width: 50px;
}

.photoFrame{
  width: 320px;
  height: 400px;
  position: relative;

  img{
    margin-top: 10px;
  }

  .photoDate{
    position: absolute;
    bottom: 0;
    right: 25px;
    font-size: 0.7rem;
  }

}

.photoTitle{
  font-family: "Indie Flower", cursive;
  font-size: 1.2rem;
  font-weight: bold;
}

.pile {
  position: relative;
  width: 200px; 
  height: 200px; 
  margin: 100px auto;
  cursor: pointer;
}
.polaroid {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 215px;
  height: 265px;
  background-color: #e5e5ef;
  top: 0;
  left: 0;
  transition: transform 0.3s ease;
}

.polaroidText{
  font-family: "Indie Flower", cursive;
  font-size: 1rem;
  font-weight: bold;
}

.polaroid img {
    margin-top: 10px;
  width: 200px;
  display: block;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  text-align: center;
}
.modal-content img {
  max-width: 100%;
  max-height: 80vh;
}
.caption {
  margin-top: 10px;
}

.prev, .next {
  position: absolute;
  bottom: -100px;
  font-size: 1rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 10px;
}
.prev { left: 25px; }
.next { right: 25px; }

.close {
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
