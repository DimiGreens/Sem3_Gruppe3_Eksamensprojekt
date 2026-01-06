<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

import '@splidejs/splide/css'

const images = [
  'https://unsplash.it/300?1',
  'https://unsplash.it/300?2',
  'https://unsplash.it/300?3',
  'https://unsplash.it/300?4',
  'https://unsplash.it/300?5',
  'https://unsplash.it/300?6',
]

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
      <SplideSlide v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </SplideSlide>
    </Splide>
  </ClientOnly>
</template>
