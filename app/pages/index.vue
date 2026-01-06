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
        <h1 id="Welcome">Velkommen!</h1>
        <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis deleniti, eligendi hic repellat excepturi sequi dolore voluptates id sapiente illo rem ab recusandae eaque corrupti asperiores nemo quas numquam necessitatibus tempore soluta debitis labore nihil. Aliquam dolorum nihil facilis dignissimos eius accusamus veniam. Nostrum asperiores dolorem modi tempore voluptatem?</p>
            <div class="btnHolder">
              <Button label="Om os" to="/about" />
            </div>
        </section>
        <section>
          <div class="bookHolder">
            <MenuBook :pages="kat" />
          </div>
        </section>
        <section>
           <Slider />
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
        <div class="btnHolder">
          <a href="#Welcome">
            <button class="upBtn"><FontAwesomeIcon :icon="['fas', 'arrow-up']" class="fontIcon" /></button>
          </a>
        </div>
    </main>
</template>

<style scoped>

.fontIcon{
  width: 40px;
  height: 40px;
  color: #fb9fc4;
}

.upBtn{
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: #1d1d1b;
}

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