<script setup>
// Vi importere vores komponent
import MenuBook from '~/components/MenuBook.vue'
// Vi importere vigtige elementer fra Vue
import { onMounted, nextTick, ref } from 'vue'

// Vi importere vores SVG'er til menukort
import burger from '@/assets/img/burger.svg'
import drink from '@/assets/img/drink.svg'
import party from '@/assets/img/party.svg'
import christmasImg from '@/assets/img/christmas.svg'
import newYear from '@/assets/img/newYear.svg'

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
const normal = [
  {
    title: 'Morgenmad',
    items: [
      { name: 'Toast', price: 135, desc: "m. skinke og ost. Servers m. spejlæg på toppen" },
      { name: 'Krydret toast', price: 135, desc: "m. oksekødspølse. Servers m. spejlæg på toppen" },
      { name: 'Avocadomad', price: 98, desc: " m. tomat, mayonnaise og friske urter" },
      { name: 'Hjemmebagt brød', price: 56, desc: "m. ost, marmelade og smør" },
    ],
  },
  {
    title: 'Frokost',
    items: [
      { name: 'Smørrebrød med kartoffel', price: 139, desc: "m. urtemayo & ristet løg" },
      { name: 'Smørrebrød med rørt laks', price: 139, desc: "m. avocado" },
      { name: 'Smørrebrød med falafel', price: 139, desc: "m. hummus & tomatpesto" },
      { name: 'Smørrebrød med læsørejer,', price: 145, desc: "m. æg & citronmayo" },
    ],
  },
  {
    title: 'Aftensmad',
    items: [
      { name: 'Cheeseburger', price: 165, desc: "Oksekød m. smeltet ost, salat, tomat, hustets sylt." },
      { name: 'Andeburger', price: 169, desc: "Confiteret and i briochebolle med frisk salat, husets sylt." },
      { name: 'Blomkålsburger', price: 159, desc: "Vegetarburger m. soltørret tomat, salat, husets sylt." },
    ],
  },
]

const drinks = [
  {
    title: 'Kolde drikke',
    items: [
      { name: '', price: 28, desc: "Æblejuice" },
      { name: '', price: 28, desc: "Appelsinjuice" },
      { name: '', price: 46, desc: "Rabarbersaft m. vanilje" },
      { name: '', price: 46, desc: "Hyldeblomstsaft m. citron" },
      { name: '', price: 48, desc: "Citronlemonade" },
      { name: '', price: 34, desc: "Handcock - Se udvalget i baren" },
    ],
  },
  {
    title: 'Varme drikke',
    items: [
      { name: '', price: 32, desc: "Kaffe - Sort fra kanden" },
      { name: '', price: 15, desc: "Refil på kaffen" },
      { name: '', price: 85, desc: "Stempelkande" },
      { name: '', price: 30, desc: "Espresso" },
      { name: '', price: 48, desc: "Cafe late" },
      { name: '', price: 48, desc: "Cappuccino" },
    ],
  },
  {
    title: 'Vine',
    items: [
      { name: '', price: 85, desc: "Nr 1: Altkirch - Klassisk og sprød" },
      { name: '', price: 80, desc: "Nr 2: Urban riesling - Ukompliceret og sød" },
      { name: '', price: 75, desc: "Nr 7: Cap de Coste - Fin og mild" },
      { name: '', price: 48, desc: "Nr 14: Côtes Du Rhône - En saftig lækkerbisken" },
      { name: '', price: 85, desc: "Nr 15: Primotivo/Cabernet Sauvignon - Fyldig m. bid" },
    ],
  },
  {
    title: 'Champagne & Cocktails',
    items: [
      { name: 'Nr 26: Albert Sounit, Crémant de Bourgogne', price: 500, desc: "- Elegant, fuld af forføremde friskhed" },
      { name: 'Nr 27: Albert Sounit, Caprice rose, demi-sec', price: 500, desc: "- Frisk, fyldig og eksotisk" },
      { name: 'Nr 28: Champagne R De ruinart Brut', price: 1200, desc: "- Den perfekte ledsager til nærmest alt" },
    ]
  }
]

const parties = [
  {
    title: "Ulla's Tapasbar",
    items: [
      { name: '', price: 275, desc: "PLANKE M SKINKE, BASILIKUMSPESTO, TOMAT OG SYLTEDE RØDLØG PØLSE M. SOLTØRRET TOMATPESTO OG OLIVEN KARTOFFELPIZZA M. TRØFFELOLIE OG ROSMARIN SLIDERS M. OKSEKØD CHILIHUMMUS M. GROVE STÆNGER GRØN GUDINDESALAT M. KYLLING HVIDLØGSBRØD M. OST PASTASALAT M. FRISKE URTER OG FETA Min 20 personer. Pris pr. person:" },
    ],
  },
  {
    title: 'Alle Elsker',
    items: [
      {
      name: 'Vælg mellem', price: 329, desc: "Høns i asparges | Nachoes m. kylling | Rejemad m. dild og citron. Min 30 personer. Pris pr. person:"
    }
  ]
  }
]

const christmas = [
  {
    title: "Julefrokost",
    items: [
      {
        name: "Julebuffet", price: 379, desc: "MARINEREDE SILD M. KARRYSALAT, SYLTEDE RØDLØG, KAPARS. ÆG, REJER OG CITRON PANERET FISKEFILET M. REMOULADE OG CITRON LUN LEVERPOSTEJ M. BACON CHAMPIGNON LUNE FRIKADELLER M. HJEMMMELAVET RØDKÅL GRØNLANGKÅL, SENNEP OG HJEMMEBAGT RUGBRØD RIBBENSTEG M. BRUN SAUCE OG SMØRSTEGTE KARTOFLER. Min 25 personer. Pris pr. person:"
      }
    ]
  }
]

const newYearsEve = [
  {
    title: "Nytårs menu",
    items: [
      {
        name: "Ulla's nytår",
        price: 899,
        desc: "Kold agurketatar med rejer, røget laks og dildcreme Tern af friske agurker og rødløg vendt i citron og friske urter, toppet med dildcreme og håndpillet rejer. Servers med rugbrødscroutoner og urter. Hjemmebagt brød og rørt smør."
      }
    ]
  }
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
        <MenuBook :pages="normal" :coverTitle="'Ullas mad'" :coverSubtitle="'Noget til alle smage'" :coverImage="burger" />
        <MenuBook :pages="drinks" :colors="['#f6dfa2', '#f4d78b']" :coverTitle="'Ullas Drinkkevarer'" :coverSubtitle="'Noget til alle smage'" :coverImage="drink" />
        <h3>Har vi vækket apetitten?</h3>
        <div class="btnHolder">
          <Button label="Book bord" to="/book" />
        </div>
        <h3>Til de særlige anledninger</h3>
        <MenuBook :pages="parties" :colors="['#c4e3b5', '#b4d6a4']" :coverTitle="'Ullas Fest-menu'" :coverSubtitle="'Til særlige anledninger'" :coverImage="party" />
        <div class="btnHolder">
          <Button label="Send forespørgsel" to="/contact"/>
        </div>
        <MenuBook :pages="christmas" :colors="['#acd0ec', '#97c4e7']" :coverImage="christmasImg" />
        <div class="btnHolder">
          <Button label="Book bord" to="/book" />
        </div>
        <MenuBook :pages="newYearsEve" :colors="['#c7b1e7', '#b99de1']" :coverImage="newYear" />
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
