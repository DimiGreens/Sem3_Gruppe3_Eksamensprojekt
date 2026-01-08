<!--Dette kode er inspireret af denne codepen https://codepen.io/tarunraotd/pen/Njoween uploadet af Tarun Rao TD -->
<script setup>
// Her importeres Ref og OnMounted fra vue så der kan laves reaktive variabler og sørger for at kompontnetn kan køre i DOM.
import { ref, onMounted } from 'vue'
// Her oprettes en reaktiv Boolean som styrer om mail og message vises
const showFields = ref(false)
// Her oprettes en reaktiv Boolean som styrer kuvert flappen
const letterAnimate = ref(true)
// Her oprettes en reaktiv Boolean som knap animationen
const buttonAnimate = ref(false)
// Her oprettes en reaktiv string som send knappen (Her sættes den til at starte med at vise send)
const buttonText = ref('Send')
// Her oprettes en reaktiv Boolean som disabler knappen så der ikke sendes en mail.
const sent = ref(false)

// Her fortæller vi med onMounted at kompnenten skal køre når den er lagt i dommen. med en timer som beder den kører efter 1sekund. letterAnimate.value sættes til false for at fjerne animationen (åbne flappen) og showFields sættes til true for at få vist email og message feltet.
onMounted(() => {
  setTimeout(() => {
    letterAnimate.value = false
    showFields.value = true
  }, 1000)
})

// I dette stykke kalder vi funktionen sendEmail. Her gør letterAnimate at flappen folder end, showFields ikke bliver vist og buttonAnimate animationen bliver sat til at køre. Til slut beder vi setTimeout vise en loading inden at den efter 2sekunder viser sendt.
const sendEmail = () => {
  letterAnimate.value = true
  showFields.value = false
  buttonAnimate.value = true
  buttonText.value = '...'

  setTimeout(() => {
    buttonText.value = 'Sendt ;)'
    sent.value = true
  }, 2000)
}
</script>

<template>
<main>
  <div class="letter-wrapper">
    <div class="letter" :class="{ animate: letterAnimate }">
      <form>
        <input
          v-if="showFields"
          type="email"
          placeholder="Email"
          required
        />

        <textarea
          v-if="showFields"
          placeholder="Message"
          required
        />

        <input
          type="button"
          :value="buttonText"
          :class="{ animate: buttonAnimate }"
          @click="sendEmail"
          :disabled="sent"
        />
      </form>
    </div>
  </div>
</main>
</template>

<style scoped>
.letter-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 30px 0 30px;
}

form {
  height: 100%;
}

input, textarea {
  display: block;
  width: calc(95% - 10px);
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px dashed var(--purpleMenuMain);
  outline: none;
  background: none;
  color: var(--purpleMenuMain);
}

input {
  height: 20%;
}

textarea {
  height: 60%;
}

input::placeholder, textarea::placeholder {
  color: var(--purpleMenuMain);
}

input[type="button"] {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  right: 105px;
  bottom: -45px;
  border: none;
  color: var(--yellowMenuMain);
  background: var(--headerCircleButtons);
  cursor: pointer;
  transition: bottom 2s ease-in;
  box-shadow: var(--stdShadow);
}

input[type="button"].animate {
  bottom: calc(50% - 40px);
  right: calc(50% - 40px);
}

input[type="button"]:hover:not(:disabled) {
  background: var(--buttonsBlue);
  color: var(--yellowMenuMain);
  box-shadow: var(--hoverShadow);
}

.letter {
  position: relative;
  width: 300px;
  height: 300px;
  background: var(--yellowMenuMain);
}   

.letter::before {
  content: "";
  position: absolute;
  top: -150px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 150px 150px 150px;
  border-color: transparent transparent var(--yellowMenuSecondary) transparent;
  transform-origin: 100% 100%;
  transition: transform 1s ease-in, border-color 1s ease-in;
}

.letter.animate::before {
  transform: rotateX(180deg);
  border-color: transparent transparent var(--yellowMenuSecondary) transparent;
}

@media (min-width: 700px) {
  form {
    font-size: 22px;
  }

  form > input,
  form > textarea {
    font-size: 20px;
    padding: 12px;
    margin: 12px;
  }

  form > input[type="button"] {
    width: 70px;
    height: 70px;
    right: 125px;
    bottom: -50px;
    font-size: 15px;
  }

  form > input[type="button"].animate {
    bottom: calc(50% - 35px);
    right: calc(50% - 35px);
  }

  .letter {
    width: 350px;
    height: 350px;
  }

  .letter::before {
    top: -175px;
    border-width: 0 175px 175px 175px;
  }
}
</style>