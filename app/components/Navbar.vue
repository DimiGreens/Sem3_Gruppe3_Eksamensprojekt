<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const openNav = () => {
    isOpen.value = true
}

const closeNav = () => {
    isOpen.value = false
}

</script>

<template>
    <header>
        <p>LOGO</p>
        <button @click="openNav">Open</button>
    </header>

    <transition name="slide">
        <nav v-if="isOpen">
            <button @click="closeNav">Close</button>
            <NuxtLink to="/" @click="closeNav">Home</NuxtLink>
            <NuxtLink to="/about" @click="closeNav">About</NuxtLink>
            <NuxtLink to="/menu" @click="closeNav">Menu</NuxtLink>
        </nav>
    </transition>
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
}

button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

nav{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    background-color: grey;
    height: 100vh;
    width: 60vw;
}

nav button{
    position: absolute;
    top: 10px;
    right: 10px;
}

.slide-enter-active, .slide-leave-active{
    transition: transform 0.3s ease;
}

.slide-enter-from, .slide-leave-to{
    transform: translateX(100%);
}

nav a{
    padding: 1rem;
    margin: 0.5rem;
}
</style>