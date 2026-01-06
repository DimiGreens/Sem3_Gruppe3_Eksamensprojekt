<template>
<button class="blob-button">
    Klik mig
</button>
</template>
 
<script setup>
// Ingen ekstra logik er nødvendig til styling
</script>
 
<style scoped>
.blob-button {
  background-color: #38b2ac; /* Ligner farven på dit billede */
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
 
  /* Lav blob-formen */
  border-radius: 50% / 50%; /* gør den lidt organisk */
  clip-path: ellipse(45% 50% at 50% 50%);
}
 
.blob-button:hover {
  transform: scale(1.05);
  background-color: #319795;
}
</style>