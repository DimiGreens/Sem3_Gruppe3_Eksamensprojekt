<script setup>
import MenuBook from '~/components/MenuBook.vue';
import Writing from '~/components/Writing.vue';
const kat = [
  {
    title: 'Morgenmad',
    items: [
      { name: 'Æg', price: 45 },
      { name: 'Bacon', price: 25 },
      { name: 'Ost', price: 75 },
      { name: 'Ost', price: 75 },
    ],
  }]

</script>

<template>
    <main>
        <p>I dag har vi åbnet 11:00 - 23:30</p>
        <div class="writingHolder">
          <Writing />
        </div>
        <h1>Velkommen!</h1>
        <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis deleniti, eligendi hic repellat excepturi sequi dolore voluptates id sapiente illo rem ab recusandae eaque corrupti asperiores nemo quas numquam necessitatibus tempore soluta debitis labore nihil. Aliquam dolorum nihil facilis dignissimos eius accusamus veniam. Nostrum asperiores dolorem modi tempore voluptatem?</p>
            <div class="btnHolder">
              <Button label="Om os" to="/about" />
            </div>
        </section>
        <section>
            <h2>Vi serverer god mad</h2>
            <div class="bookHolder">
              <MenuBook :pages="kat"/>
            </div>
            <div class="btnHolder">
              <Button label="Se menuerne" to="/menu" />
            </div>
            <h3>Og lækre studie-tilbud!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet maxime deleniti nemo error distinctio.</p>
            <section class="ret">
                <p class="madBillede">IMG</p>
                <h3>Cheeseburger</h3>
                <p>Oksekød m. smeltet ost, salat, tomat, husets sylt og hjemmelavet burgerdressing i briochebolle</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>149,-</p>
            </section>
            <section class="ret">
                <p class="madBillede">IMG</p>
                <h3>Ulla's favorit salat</h3>
                <p>Blandet salat m. rørt laks, avacado og grillet citron</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>119,-</p>
            </section>
        </section>
        <section>
            <h3>Book bord</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, in assumenda eaque alias at soluta magni, repudiandae, ut aspernatur quo sequi consequatur! Cum, minus autem!</p>
            <div class="btnHolder">
              <Button label="Se bordplan" to="/book" />
            </div>
        </section>
        <section>
            <h3>Ulla's playliste</h3>
            <h3>PLAYLISTE</h3>
        </section>
    </main>
</template>

<style scoped>
.writingHolder{
  display: flex;
  justify-content: center;
}

.bookHolder{
  display: flex;
  justify-content: center;
}

.btnHolder{
  display: flex;
  justify-content: center;
}

    .splide__slide img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
section{
    margin: 1rem 0;
}
.ret{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .madBillede{
        background-color: red;
        grid-column: 1;
        grid-row: 1 / -1;
    }

    p{
        grid-column: 2;
        margin: 0.5rem;
    }

}
</style>