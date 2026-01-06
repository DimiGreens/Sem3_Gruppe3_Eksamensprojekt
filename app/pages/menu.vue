<script setup>
import MenuBook from '~/components/MenuBook.vue'
import { onMounted, nextTick } from 'vue'

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
      { name: 'Æg', price: 45 },
      { name: 'Bacon', price: 25 },
      { name: 'Ost', price: 75 },
      { name: 'Ost', price: 75 },
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
    <h1>Menu</h1>
    <div class="menues">
      <h2>Forret</h2>
      <MenuBook :pages="kat" />
      <MenuBook :pages="dog" :colors="['#f6dfa2', '#f4d78b']" />
      <MenuBook :pages="dog" :colors="['#c4e3b5', '#b4d6a4']" />
      <MenuBook :pages="dog" :colors="['#acd0ec', '#97c4e7']" />
      <MenuBook :pages="dog" :colors="['#c7b1e7', '#b99de1']" />
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
</style>
