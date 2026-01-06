<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/splide/css';

const images = [
    'https://unsplash.it/300',
    'https://unsplash.it/300',
    'https://unsplash.it/300',
    'https://unsplash.it/300',
    'https://unsplash.it/300',
]
</script>

<template>
    <ClientOnly>
        <Splide 
            :extensions="{ AutoScroll }"
            :options="{
                autoScroll:{
                    speed: 0.5
                },
            type: 'loop', 
            perPage: 1,
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 60000
            }">
            <SplideSlide v-for="(image, index) in images" :key="index">
                <img :src="image">
            </SplideSlide>
        </Splide>
    </ClientOnly>
</template>

<style scoped>

</style>