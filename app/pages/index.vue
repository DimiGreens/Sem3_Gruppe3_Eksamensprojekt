<script setup>
// useHead() funktionen gør det muligt at tilføje head-sektioner på vores sider.
useHead({
  title: "Café Ulla Therkelsen, London",
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

// Vi importere nogle komponenter til brug i grænsefladen
import MenuBook from '~/components/MenuBook.vue';
import Writing from '~/components/Writing.vue';

import burger from '@/assets/img/burger.svg'

// Nedenstående lister indeholder blot indhold som skal være i menuerne. Indholdet bliver sendt via props til MenuBook-komponenten
const kat = [
  {
    title: 'Morgenmad',
    items: [
      { name: 'Toast', price: 135, desc: "m. skinke og ost. Servers m. spejlæg på toppen" },
      { name: 'Krydret toast', price: 135, desc: "m. oksekødspølse. Servers m. spejlæg på toppen" },
      { name: 'Avocadomad', price: 98, desc: " m. tomat, mayonnaise og friske urter" },
      { name: 'Hjemmebagt brød', price: 56, desc: "m. ost, marmelade og smør" },
    ],
  }]

</script>

<template>
    <main>
      <div id="Welcome" class="writingHolder">
        <img class="light1" src="../assets/img/lys.png">
        <img class="light2" src="../assets/img/lys2.png">
        <img class="light2" src="../assets/img/lys3.png">
        <h1 class="welcomeText">Welcome hos</h1>
        <Writing class="writing"/>
        <p class="opening">Åben i dag: 11:00 - 23:30</p>
      </div>
        <h2>Kom indenfor!</h2>
        <section>
            <p>Vi har åbnet dørene for dig! Vi byder dig velkommen til en farverig café hvor tåbelige indfald, vanvittige idéer og store drømme står øverst på dagsordenen. Med et stort udvalg af lækker mad og fede events holder vi en fest hver dag. Det søde personale er klar til at give dig service i verdensklasse, men du behøver ikke snakke med dem før du har fået din morgen kaffe ;) </p>
            <div class="btnHolder">
              <!-- Her bruger vi vores "Button"-komponent med teksten 'Mere om Caféen' hvor den linker til 'about' siden -->
              <Button label="Mere om Caféen" to="/about" />
            </div>
          </section>
          <section>
            <h3>Vi serverer god! Også ud af huset</h3>
            <div class="bookHolder">
              <MenuBook :pages="kat" :coverImage="burger"/>
            </div>
          </section>
          <section>
            <h3>Kan du høre det?</h3>
            <p>Hos Café Ulla Terkelsen, London spiller vi lette og lækre toner. Start playlisten og oplev derhjemme hvordan tonerne skaber god stemning.</p>
            <h3>PLAYLISTE</h3>
          </section>
          <section>
            <h3>Ullas events</h3>
            <p>Udover lækre toner åbner vi døren for en masse lækre events. Er du til en aften i musik bingoen eller live musikkens navn eller kan en af vores andre events friste?</p>
            <Slider />
            <div class="btnHolder">
             <!-- Her bruger vi vores "Button"-komponent med teksten 'Alle Events' hvor den linker til 'events' siden -->
             <Button label="Alle Events" to="/events" />
            </div>
          </section>
          <section>
            <h3>Kan du heller ikke undvære os?</h3>
            <p>Vi kan heller ikke undvære dig! Vi glæder os til at du besøger os i caféen og ser frem til at byde dig velkommen i vores afslappede rammer, hvor du kan få et break fra hverdagen.</p>
            <div class="btnHolder">
              <!-- Her bruger vi vores "Button"-komponent med teksten 'Se bordplan' hvor den linker til 'book' siden -->
              <Button label="Se bordplan" to="/book" />
            </div>
          </section>
          <section>
            <h3>Vil vil så gerne servicere dig!</h3>
            <p>Fandt du ikke hvad du søgte eller har du spørgsmål til os, så kontakt os ved at klikke på knappen herunder.</p>
            <div class="btnHolder">
            <!-- Her bruger vi vores "Button"-komponent med teksten 'Kontakt' hvor den linker til 'contact' siden -->
            <Button label="Kontakt" to="/contact" />
          </div>
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
  position: relative;
  height: 200px;
  margin-bottom: 80px;
}

.writingHolder img{
  left: 0;
  width: 100%;
}

.writing {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
}

.opening {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: "Indie Flower", cursive;
  font-size: 1.2rem;
}

.welcomeText{
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: "Indie Flower", cursive;
  font-size: 1.2rem;
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
</style>