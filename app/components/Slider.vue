<script setup>
// Her importere vi 'Splide'-biblioteket, samt udvidelsespakken 'AutoScroll' som skal bruges til at lave en slider 
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/css'

// Indholdet som skal være i slideren
const images = [
  {
    title: 'Test 1',
    date: '01/01/2026',
    url:'https://unsplash.it/300?1'
  },
  {
    title: 'Test 2',
    date: '01/01/2026',
    url:'https://unsplash.it/300?2'
  },
  {
    title: 'Test 3',
    date: '01/01/2026',
    url:'https://unsplash.it/300?3'
  },
  {
    title: 'Test 4',
    date: '01/01/2026',
    url:'https://unsplash.it/300?4'
  },
  {
    title: 'Test 5',
    date: '01/01/2026',
    url:'https://unsplash.it/300?5'
  },
  {
    title: 'Test 6',
    date: '01/01/2026',
    url:'https://unsplash.it/300?6'
  },
]

// Diverse indstillinger som skal bruges til at styrer slideren
const options = {
  type: 'loop',
  perPage: 1,
  gap: '4rem',
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
    background-color: #e5e5ef;
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
      object-fit: center;
    }
  }

  .imageTitle{
    font-family: "Indie Flower", cursive;
    font-size: 1.2rem;
    font-weight: bold;
  }
</style>