<script setup>
// Her importere vi 'Splide'-biblioteket, samt udvidelsespakken 'AutoScroll' som skal bruges til at lave en slider 
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/css'

// Vi importere vores billeder
import sol from '@/assets/img/sol.svg'
import cafe20 from '@/assets/img/cafe20.png'
import cafe21 from '@/assets/img/cafe21.png'
import cafe24 from '@/assets/img/cafe24.png'

// Indholdet som skal være i slideren
const images = [
  {
    title: 'Musik Bingo 90erne',
    date: '15/01-2026',
    url: cafe20
  },
  {
    title: 'ULLAUNPLUGGED Kira Skov',
    date: '16/01-2026',
    url: cafe21
  },
  {
    title: 'ULLAUNPLUGGED LOFN',
    date: '28/01-2026',
    url: cafe24
  },
  {
    title: 'Solen går altså ned med stil i vest',
    date: '24/7',
    url: sol
  }
]

// Diverse indstillinger som skal bruges til at styrer slideren
const options = {
  type: 'loop',
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: false,
  autoplay: false,
  pauseOnHover: false,
  pauseOnFocus: false,

  autoScroll: {
    speed: 1,
    autoStart: true,
  },

  breakpoints: {
    767: {
      perPage: 1,
    },
    1024: {
      perPage: 2,
    },
    1200:{
      perPage: 2
    },
    1400:{
      perPage: 2
    },
    1920: {
      perPage: 2
    }
  },
}
</script>

<template>
  <ClientOnly>
    <Splide :options="options" :extensions="{ AutoScroll }">
      <!-- Her bliver der loopet igennem vores indhold fra tidligere nævte array, hvor indhold bliver sat efterfølgende -->
      <SplideSlide v-for="(image, index) in images" :key="index">
          <div class="imgHolder">
            <img class="image" :src="image.url" />
            <p class="imageTitle">{{ image.title }}</p>
            <div class="dateHolder">
              <p>{{ image.date }}</p>
            </div>
          </div>
        </SplideSlide>
    </Splide>
  </ClientOnly>
</template>

<style scoped>
  .imgHolder{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 320px;
    height: 400px;
    background-color: #acd0ec;
    position: relative;

    .dateHolder{
      position: absolute;
      bottom: 0;
      right: 25px;

      p{
        font-size: 0.7rem;
      }

    }

    .image{
      margin-top: 10px;
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }

  .imageTitle{
    font-family: "Indie Flower", cursive;
    font-size: 1.2rem;
    font-weight: bold;
  }


</style>