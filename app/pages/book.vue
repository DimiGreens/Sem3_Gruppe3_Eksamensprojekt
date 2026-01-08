<script setup>
// useHead() funktionen gør det muligt at tilføje head-sektioner på vores sider.
useHead({
  title: "Café Ulla Therkelsen, London | Booking",
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
        <h1>Book bord</h1>
        <p>Her på siden kan du booke bord hos Café Ulla Terkelsen, London. Har du ønske om bestemte siddepladser så skriv det med i kommentaren når du booker.</p>
        <div class="btnHolder">
            <!-- Her bruger vi vores "Button"-komponent med teksten 'Book bord' -->
            <Button label="Book bord" to="#"/>
        </div>
        <h3>Bord plan</h3>
        <p>Tryk på bordene for at se nummer, pladser og tilgøngelighed.</p>
        <div class="imgHolder">
            <!-- Billede/PNG lavet ved brug af generativ AI -->
            <img class="tableImage" src="../assets/img/bordplan.png" alt="">
        </div>
    </main>
</template>

<style scoped>
.btnHolder{
    display: flex;
    justify-content: center;
}

.imgHolder{
    display: flex;
    justify-content: center;
}

img{
    width: 320px;
}

@media screen and (min-width: 768px){
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            width: 680px;
        }
    }

    .tableImage{
        width: 430px;
    }
}

@media screen and (min-width: 1100px){
  .tableImage{
    width: 480px
  }
}
</style>