<script setup>
import { ref, computed, onMounted } from 'vue'

const pages = ref([
  { title: 'Test 1', content: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Test 2', content: 'Repellendus, non! Lorem ipsum dolor.' },
  { title: 'Test 3', content: 'En tredje side med tekst.' }
])

const currentPage = ref(0)

const totalPages = computed(() => pages.value.length)

const direction = ref('next')

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    direction.value = 'next'
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    direction.value = 'prev'
    currentPage.value--
  }
}

/* Keyboard support */
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPage()
    if (e.key === 'ArrowLeft') prevPage()
  })
})

</script>

<template>
<article class="book" aria-label="Menu bog">
  <!-- Status for screenreaders -->
  <p class="sr-only" aria-live="polite">
    Side {{ currentPage + 1 }} af {{ totalPages }}
  </p>

  <!-- Pages -->
  <section
  v-for="(page, index) in pages"
  :key="index"
  class="page"
  :class="{
    active: index === currentPage,
    flip: index === currentPage - 1 && direction === 'next',
    flipBack: index === currentPage + 1 && direction === 'prev'
  }"
>
    <h2>{{ page.title }}</h2>
    <p>{{ page.content }}</p>
  </section>

  <!-- Navigation -->
  <nav class="controls" aria-label="Bladre navigation">
    <button
      @click="prevPage"
      :disabled="currentPage === 0"
    >
      Forrige
    </button>

    <button
      @click="nextPage"
      :disabled="currentPage === totalPages - 1"
    >
      Næste
    </button>
  </nav>
</article>

</template>

<style scoped>
.book {
  position: relative;
  width: 320px;
  height: 480px;
  perspective: 1500px;
}

.page {
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  background: #eee;
  transform-origin: left center;
  transform: rotateY(0deg);
  transition: transform 0.6s ease, opacity 0.3s ease;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
}

.page.left {
  transform: rotateY(-180deg);
  opacity: 0;
}

.page.active {
  z-index: 2;
}

.controls {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

/* Screenreader only */
.sr-only {
  position: absolute;
  left: -9999px;
}

.page {
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  background: #eee;
  transform-origin: left center;
  transform: rotateY(0deg);
  transition: transform 0.6s ease;
  backface-visibility: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
}

/* Den side der flipper væk (næste) */
.page.flip {
  transform: rotateY(-180deg);
  z-index: 3;
}

/* Den side der flipper tilbage */
.page.flipBack {
  transform-origin: right center;
  transform: rotateY(180deg);
  z-index: 3;
}

.page.active {
  z-index: 2;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .page {
    transition: none;
  }
}

</style>