<script setup>
// useHead() funktionen gør det muligt at tilføje head-sektioner på vores sider.
useHead({
  title: "Café Ulla Therkelsen, London | Kontakter",
  meta: [
    {
      name: "description", 
      content: "Velkommen til Café Ulla Therkelsen, London. Farverig café, lækker mad og fede events."
    }, 
    { 
      name: "keywords", 
      content: "café, brunch, events, Aalborg, Ulla Therkelsen, mad"
  }
  ]
})
</script>

<template>
<main>
<section>
    <h1>Kontakt os her</h1>
    <p>Hvad kan vi hjælpe dig med i dag? Giv et kald eller send os en mail herunder.</p>
    <p>Tlf: + 45 98 15 80 00</p>
</section>
<section>
<h2>Send en Mail</h2>
<!-- Vores 'Form'-komponent -->
<Form />
</section>
</main>
</template>

<style scoped>
.fontIcon{
    width: 30px;
    height: 30px;
}

h2{
    margin-bottom: 100px;
}

</style>