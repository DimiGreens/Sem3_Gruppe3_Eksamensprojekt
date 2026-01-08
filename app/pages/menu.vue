<script setup>
// Vi importere vores komponent
import MenuBook from '~/components/MenuBook.vue'
// Vi importere vigtige elementer fra Vue
import { onMounted, nextTick, ref } from 'vue'

// Vi laver en variabel som skal simulere loading på siden
const isLoading = ref(true);

// Vi sætter en timer på 3 sekunder som loading skal bruge
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000)
})

// Her opstiller vi en IntersectionObserver, hvilket holder øje med hvilke elementer der kommer til syne på grænsefladen
onMounted(async () => {

  // nextTick sikrer, at DOM’en er fuldt opdateret med reaktive ændringer, før vi fortsætter med at hente elementer
  await nextTick()

  const allBooks = document.querySelectorAll('.book-wrapper')

  // IntersectionObserver holder øje med elementer som er synlige på grænsefladen.
  const observer = new IntersectionObserver(
    (entries) => {
      // Vi opsætter et loop som skal holde øje med flere elementer
      entries.forEach((entry) => {
        // Når elementet er synligt på grændefladen, så skal det have klassen: "show"
        entry.target.classList.toggle('show', entry.isIntersecting)
      })
    },
    {
      // Mål på hvornår IntersectionObserveren opfanger elementerne
      threshold: 0.10,
      rootMargin: "-100px 0px -100px 0px",
    }
  )

  // Vi tilknytter vores IntersectionObserver på vores menukort-wrapper
  allBooks.forEach((book) => observer.observe(book))
})

// Nedenstående lister indeholder blot indhold som skal være i menuerne. Indholdet bliver sendt via props til MenuBook-komponenten
const kat = [
  {
    title: 'Morgenmad',
    items: [
      { name: 'Æg', price: 45, desc: "Lækker æg" },
      { name: 'Bacon', price: 25, desc: "Tester123" },
      { name: 'Ost', price: 75, desc: "Tester123" },
      { name: 'Ost', price: 75, desc: "Tester123" },
    ],
  },
  {
    title: 'Frokost',
    items: ['Caesar salat', 'Grillet sandwich', 'Tomatsuppe'],
  },
  {
    title: 'Aftensmad',
    items: ['Grillet laks med grøntsager', 'Risotto', 'Bøf med kartofler'],
  },
]

const dog = [
  {
    title: 'Sodavand',
    items: ['Coca-Cola', 'Pepsi', 'Pepsi Max'],
  },
  {
    title: 'Juice',
    items: ['Æble', 'Appelsin', 'Banan'],
  },
  {
    title: 'Vin',
    items: ['Rød', 'Hvid', 'Rosé'],
  },
]
</script>

<template>
  <main>
    <!-- En 'transition' som tilføjer en animation til elementet. Her bliver der tilføjet en animation når 'loading' er færdigt -->
    <transition name="fade-up" @after-leave="onLoadingFinished">
      <div v-show="isLoading">
        <h2 class="loadingText">Vi tilbereder kaffen. Vent venligst.</h2>
        <div class="loadingHolder"></div>
        <div class="loadingScreen">
          <Loading />
        </div>
      </div>
    </transition>
    <!-- Vores menu-sektion som bliver tilføjet når loading IKKE er igangsat -->
    <div v-show="!isLoading">
      <h1>Vi serverer god mad</h1>
      <p>Her på siden finder du alle vores menuer fra det i caféen til særlige anledninger. Ulla’s menuer opdateres løbende for at du får lige det du ønsker dig!</p>
      <div class="menues">
        <!-- En række af vores MenuBook-komponenter som modtager indhold fra tidligere nævnte lister. Her bliver indhold brug med props til selve komponenten -->
        <MenuBook :pages="kat" :coverTitle="'Ullas morgenmad'" :coverSubtitle="'Mmmm, morgenmad'" />
        <MenuBook :pages="dog" :colors="['#f6dfa2', '#f4d78b']" :coverTitle="'Lunch!'" :coverSubtitle="'Lækker lunch!'" />
        <h3>Har vi vækket apetitten?</h3>
        <div class="btnHolder">
          <Button label="Book bord" to="/book" />
        </div>
        <h3>Til de særlige anledninger</h3>
        <MenuBook :pages="dog" :colors="['#c4e3b5', '#b4d6a4']" />
        <div class="btnHolder">
          <Button label="Send forespørgsel" to="/contact"/>
        </div>
        <MenuBook :pages="dog" :colors="['#acd0ec', '#97c4e7']" />
        <div class="btnHolder">
          <Button label="Book bord" to="/book" />
        </div>
        <MenuBook :pages="dog" :colors="['#c7b1e7', '#b99de1']" />
        <div class="btnHolder">
          <Button label="Book bord" to="/book" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.menues {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-wrapper {
  transform: translateX(-90%);
  transition: transform 500ms ease;
  will-change: transform; /* Safari-fix */
}

.book-wrapper.show {
  transform: translateX(0);
}

.loadingScreen{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  inset: 0;
  position: absolute;
}

.loadingHolder{
  height: 100vh;
}

.loadingText{
  margin-top: 3rem;
  text-align: center;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.8s ease; 
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
}

.fade-up-enter-to,
.fade-up-leave-from {
  opacity: 1;
}
</style>
