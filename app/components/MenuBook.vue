<script setup>
import { ref, computed, onMounted } from 'vue'

// Modtag sider som prop
const props = defineProps({
  pages: {
    type: Array,
    required: true,
    default: () => []
  },
  colors: {
    type: Array,
    default: () => ['#f4c4a4', '#f5b093'] // standardfarver hvis ingen angivet
  }
})

const currentPage = ref(0)
const direction = ref('next')
const totalPages = computed(() => props.pages.length)

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
<div class="book-wrapper">
  <article class="book" aria-label="Menu bog">
    <section
      v-for="(page, index) in props.pages"
      :key="index"
      class="page"
      :class="{
        active: index === currentPage,
        flip: index === currentPage - 1 && direction === 'next',
        flipBack: index === currentPage + 1 && direction === 'prev'
      }"
      :style="{
  background: `repeating-linear-gradient(
    90deg,
    ${props.colors[0]} 0px,
    ${props.colors[0]} 20px,
    ${props.colors[1]} 20px,
    ${props.colors[1]} 40px
  )`
}"
    >
      <h2>{{ page.title }}</h2>
      <!-- Liste af retter / afsnit -->
      <ul>
        <li v-for="(item, i) in page.items" :key="i">
         {{ item.name }} {{ item.price }},-
       </li>
      </ul>
    </section>
  </article>

  <!-- Bogmærker -->
  <nav class="bookmarks">
    <button
      v-for="(page, index) in props.pages"
      :key="index"
      class="bookmark"
      :class="{ active: index === currentPage }"
      :style="{ top: `${index * 52}px`,
    background: index === currentPage ? props.colors[1] : props.colors[0],
    color: '#fff'
  }"
      @click="currentPage = index"
      
    >
    {{ page.title }}
    </button>
  </nav>
</div>

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
</template>

<style scoped>
/* (Her kan du beholde dit eksisterende CSS uden ændringer) */
.book-wrapper {
  position: relative;
  width: fit-content;
}

/* Din bog */
.book {
  position: relative;
  width: 300px;
  height: 480px;
  perspective: 1500px;
  overflow: hidden;
}

/* Bogmærke-container */
.bookmarks {
  position: absolute;

  top: 2rem;
  left: 100%;        /* starter præcis ved bogens højre kant */

  display: flex;
  flex-direction: column;
  gap: 10px;

  pointer-events: auto;
}


/* Individuelle bogmærker */
.bookmark {
  width: 40px;
  height: 80px;

  background: #c45a3c;
  color: #fff;

  font-size: 0.7rem;
  font-weight: bold;

  border: none;
  border-radius: 0 6px 6px 0;
  
  cursor: pointer;

  writing-mode: vertical-rl;
  transform: rotate(0deg);

  transition: transform 0.2s ease, background 0.2s ease;
}

.bookmark.active {
  background: #8b2c18;
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

  /* background: repeating-linear-gradient(
    90deg,
    #f4c4a4,
    #f4c4a4 20px,
    #f5b093 20px,
    #f5b093 40px
  ); */

  transform-origin: left center;
  transform: rotateY(0deg);
  transition: transform 0.6s ease, opacity 0.3s ease;
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
