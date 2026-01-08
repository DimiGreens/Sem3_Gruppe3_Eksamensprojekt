<script setup>
// Vi importere ref, computed og onMounted fra Vue
// computed bruges til at lave afledte værdier, som automatisk opdateres, når deres afhængige reaktive variabler ændrer sig
import { ref, computed, onMounted } from 'vue'

// Props som skal indeholde forside og retter til menukort. Her kan indhold tilrettelægges alt efter behov
const props = defineProps({
  pages: {
    type: Array,
    required: true,
    default: () => []
  },
  colors: {
    type: Array,
    default: () => ['#f4c4a4', '#f5b093']
  },
  coverTitle: {
    type: String,
    default: "Ulla's mad"
  },
  coverSubtitle: {
    type: String,
    default: 'Noget til en hver smag'
  }
})

// Forsiden til menukortet som indeholder props som skal vises på grænsefladen
const coverPage = computed(() => {
  return {
    isCover: true,
    title: props.coverTitle,
    subTitle: props.coverSubtitle
  }
})

// En funktion som indeholder forside samt andre sider i menukortet
const bookPages = computed(() => {
  return [coverPage.value, ...props.pages]
})

// En variabel som holder på den nuværende side
const currentPage = ref(0)

// En variabel som indeholder navigationen i menukortet
const direction = ref('next')

// En variabel som indeholder alle siderne i menukortet
const totalPages = computed(() => bookPages.value.length)

// En funktion som skifter til næste side
const nextPage = () => {
  // Hvis det ikke er den sidste side
  if (currentPage.value < totalPages.value - 1) {
    direction.value = 'next'
    // Tilføj en (Gå til næste side)
    currentPage.value++
  }
}

// En funktion som skifter til forrige side
const prevPage = () => {
  // Hvis det ikke er den første side
  if (currentPage.value > 0) {
    direction.value = 'prev'
    // Tag en fra (Gå til forrige side)
    currentPage.value--
  }
}

// En eventlistener som lytter efter klik på tastaturet. Hvis man trykker på højre eller venstre tast, navigere i menukortet tilsvarende i den tilsvarende retning
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPage()
    if (e.key === 'ArrowLeft') prevPage()
  })
})
</script>

<template>
<div class="book-wrapper">
  <!-- aria-label gør det lettere for skærmlæsere -->
  <article class="book" aria-label="Menu bog">
    <!-- En section som virker som siderne i menukortet. -->
     <!-- Her looper vi gennem indholdet fra tidligere nævnte liste, som så bliver indsat på grænsefladen -->
      <!-- Baggrunden på siden får en farvrig stribet baggrund -->
       <!-- Her bliver der også tilføjet 'flip' og 'flipback' i style, som bruges når brugeren navigere i kortet -->
    <section
  v-for="(page, index) in bookPages"
  :key="index"
  class="page"
  :class="{
    active: index === currentPage,
    flip: index === currentPage - 1 && direction === 'next',
    flipBack: index === currentPage + 1 && direction === 'prev',
    cover: page.isCover
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

<!-- Hvis indholdet tilhører 'forsiden', så indsæt det bestemt indhold -->
  <template v-if="page.isCover">
    <div class="cover-content">
      <div class="coverBanner">
        <h3>{{ page.title }}</h3>
      </div>
      <img class="coverImage" src="../assets/img/ullaTLogo.jpg" alt="">
      <div class="subCoverBanner">
        <p v-if="page.subTitle">{{ page.subTitle }}</p>
      </div>
    </div>
  </template>

  <!-- Ellers indsæt alt det normale indhold -->
  <template v-else>
    <h2>{{ page.title }}</h2>

    <div
      class="dish"
      v-for="(item, i) in page.items"
      :key="i"
    >
      <h3>{{ item.name }}</h3>
      <p>{{ item.desc }} - {{ item.price }},-</p>
    </div>
  </template>
</section>

  </article>

  <!-- Knapper som virker som bogmærker. Her looper vi igen gennem listen, og giver hvert bogmærke et tilsvarende index og titel. -->
  <nav class="bookmarks">
    <button
  v-for="(page, index) in props.pages"
  :key="index"
  class="bookmark"
  :class="{ active: index + 1 === currentPage }"
  :style="{
    top: `${index * 52}px`,
    background: index + 1 === currentPage ? props.colors[1] : props.colors[0],
    color: '#fff'
  }"
  @click="currentPage = index + 1"
>
  {{ page.title }}
</button>
  </nav>

  <!-- Vores navigation til menukortet -->
  <nav class="controls" aria-label="Bladre navigation">
    <button
      @click="prevPage"
      :disabled="currentPage === 0"
    >
    <FontAwesomeIcon :icon="['fas', 'arrow-left']" class="fontIcon" />
      Forrige
    </button>
  
    <button
    class="next"
      @click="nextPage"
      :disabled="currentPage === totalPages - 1"
    >
    <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="fontIcon" />
    Næste
    </button>
  </nav>
</div>
</template>

<style scoped>
.coverBanner{
  width: 290px;
  height: 150px;
  background-image: url(../assets/img/coverBannerSVG.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  h3{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
  }
}

.coverImage{
  width: 150px;
  height: 150px;
}

.subCoverBanner{
  width: 240px;
  height: 100px;
  background-image: url(../assets/img/coverSubBanner.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  p{
    position: absolute;
    width: 100%;
    left: 50%;
    bottom: 22px;
    transform: translateX(-50%);
  }
}

  .dish{
    margin: 20px 0;

    h3{
      margin: 0;
    }

    p{
      margin: 0;
    }
  }

.controls button{

  background: none;
  border: none;
  
  display: inline-flex;
  align-items: center;
  gap: 10px;
  
  .fontIcon{
    color: #39afa5;
    width: 30px;
    height: 30px;
  }

}

.controls button.next{
  flex-direction: row-reverse;
}

.book-wrapper {
  position: relative;
  width: fit-content;
  margin-bottom: 30px;
}

.book {
  position: relative;
  width: 300px;
  height: 480px;
  perspective: 1500px;
  overflow: hidden;
}

.bookmarks {
  position: absolute;

  top: 2rem;
  left: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  pointer-events: auto;
}

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

.sr-only {
  position: absolute;
  left: -9999px;
}

.page {
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  transform-origin: left center;
  transform: rotateY(0deg);
  transition: transform 0.6s ease, opacity 0.3s ease;
  backface-visibility: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
}


/* 'Blandre'-animationen på siderne, som afspilles når brugeren navigere i menukortet */
.page.flip {
  transform: rotateY(-180deg);
  z-index: 3;
}
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

.page.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.cover-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cover-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.cover-content p {
  opacity: 0.9;
  font-style: italic;
}


</style>
