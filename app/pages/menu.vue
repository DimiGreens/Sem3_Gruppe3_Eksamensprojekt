<script setup>
import MenuBook from '~/components/MenuBook.vue'

const kat = [
  {
    title: 'Morgenmad',
    items: [
      {name: 'Æg', price: 45},
      {name: 'Bacon', price: 25},
      {name: 'Ost', price: 75},
      {name: 'Ost', price: 75}
    ]
  },
  {
    title: 'Frokost',
    items: ['Caesar salat', 'Grillet sandwich', 'Tomatsuppe']
  },
  {
    title: 'Aftensmad',
    items: ['Grillet laks med grøntsager', 'Risotto', 'Bøf med kartofler']
  }
]
const dog = [
  {
    title: 'Sodavand',
    items: ['Coca-Cola', 'Pepsi', 'Pepsi Max']
  },
  {
    title: 'Juice',
    items: ['Æble', 'Appelsin', 'Banan']
  },
  {
    title: 'Vin',
    items: ['Rød', 'Hvid', 'Rosé']
  }
]
</script>

<template>
  <main>
    <h1>Menu</h1>
    <MenuBook :pages="kat"/>
    <MenuBook :pages="dog" :colors="['#c7b1e7', '#b99de1']"/>
  </main>
</template>
