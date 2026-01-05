<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const slides = [
  'https://unsplash.it/300?1',
  'https://unsplash.it/300?2',
  'https://unsplash.it/300?3',
];
</script>

<template>
    <main>
        <p>I dag har vi åbnet 11:00 - 23:30</p>
         <!-- Splide Slider -->
    <Splide :options="{ type: 'loop', autoplay: true, interval: 6000 }">
      <SplideSlide v-for="(img, index) in slides" :key="index">
        <img :src="img" :alt="'Slide ' + (index + 1)" />
      </SplideSlide>
    </Splide>
        <h1>Velkommen!</h1>
        <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis deleniti, eligendi hic repellat excepturi sequi dolore voluptates id sapiente illo rem ab recusandae eaque corrupti asperiores nemo quas numquam necessitatibus tempore soluta debitis labore nihil. Aliquam dolorum nihil facilis dignissimos eius accusamus veniam. Nostrum asperiores dolorem modi tempore voluptatem?</p>
            <Button label="Om os" to="/about" />
        </section>
        <section>
            <h2>Vi serverer god mad</h2>
            <Book />
            <Button label="Se menuerne" to="/menu" />
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
            <Button label="Se bordplan" to="/book" />
        </section>
        <section>
            <h3>Ulla's playliste</h3>
            <h3>PLAYLISTE</h3>
        </section>
    </main>
</template>

<style scoped>
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