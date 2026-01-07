<script setup>
import { ref, computed } from 'vue'

const colorWheel = ['#f4c4a4', '#f6dfa2', '#c4e3b5', '#acd0ec', '#c7b1e7']

const images = ref([
  { title: "test1", date: "1-1-1111", url: 'https://unsplash.it/300?1' },
  { title: "test2", date: "2-2-2222", url: 'https://unsplash.it/300?2' },
  { title: "test3", date: "3-3-3333", url: 'https://unsplash.it/300?3' },
  { title: "test4", date: "4-4-4444", url: 'https://unsplash.it/300?4' },
])

function randomRotation(i) {
  const deg = (Math.random() - 0.5) * 60
  return {
    transform: `rotate(${deg}deg)`,
    zIndex: i + 1
  }
}

const modalOpen = ref(false)
const currentIndex = ref(0)

function openModal(index = 0) {
  currentIndex.value = index
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
</script>

<template>
  <div class="pile" @click="openModal(0)">
    <div
      v-for="(img, i) in images"
      :key="i"
      class="polaroid"
      :style="[randomRotation(i), {backgroundColor: colorWheel[i % colorWheel.length]} ]"
    >
      <img :src="img.url" alt="" />
      <p class="polaroidText">{{ img.title }}</p>
    </div>
  </div>

  <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="prev" @click.stop="prevImage"><FontAwesomeIcon :icon="['fas', 'arrow-left']" class="leftIcon" />Forrige</button>
      <div class="photoFrame" :style="{ backgroundColor: colorWheel[currentIndex % colorWheel.length] }">
        <img :src="images[currentIndex].url" alt="" />
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
  color: #39afa5;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
