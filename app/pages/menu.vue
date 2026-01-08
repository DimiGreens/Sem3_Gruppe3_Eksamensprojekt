<script setup>
import MenuBook from '~/components/MenuBook.vue'
import { onMounted, nextTick, ref } from 'vue'

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000)
})

onMounted(async () => {
  await nextTick()

  const allBooks = document.querySelectorAll('.book-wrapper')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
      })
    },
    {
      threshold: 0.10,
      rootMargin: "-100px 0px -100px 0px",
    }
  )

  allBooks.forEach((book) => observer.observe(book))
})

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
    <transition name="fade-up" @after-leave="onLoadingFinished">
      <div v-show="isLoading">
        <h2 class="loadingText">Vi tilbereder kaffen. Vent venligst.</h2>
        <div class="loadingHolder"></div>
        <div class="loadingScreen">
          <Loading />
        </div>
      </div>
    </transition>
    <div v-show="!isLoading">
      <h1>Vi serverer god mad</h1>
      <p>Her på siden finder du alle vores menuer fra det i caféen til særlige anledninger. Ulla’s menuer opdateres løbende for at du får lige det du ønsker dig!</p>
      <div class="menues">
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
