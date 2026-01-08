<script setup>
// Vores knap-komponent som bruger props til at bestemme teksten og hvor den skal sende brugeren til
// Vi definere hvilke slags props denne komponent skal modtage når den bliver brugt.
// Når denne komponent bliver brugt skal man bare tilføje :label="" og :to="" i sit element
defineProps({
  label: {
    type: String,
    default: "Se menuerne"
  },
  to: {
    type: String,
    default: "/"
  }
})
</script>

<template>
  <!-- :to="" bliver indsat fra den side man bruger denne komponent -->
  <NuxtLink :to="to" class="blob-btn">
    <svg
      width="260"
      height="150"
      viewBox="-10 -10 140 60"
      xmlns="http://www.w3.org/2000/svg"
      role="button"
      :aria-label="label"
    >
      <path d="M82 5.5C107.921 -1.45824 117 16 117 22.527C117 27 111.565 35.6704 102.367 37.9898C93.1694 40.3092 81.8115 37.0234 77.2823 35.0905C73.7983 33.1577 63.6947 30.4517 51.1523 35.0905C38.6098 39.7294 27.8094 40.2448 23.977 39.9227C13.1766 38.312 -6.33386 30.8383 2.02776 13.8292C10.3894 -3.1798 24.3254 -0.989237 30.2482 2.23217C38.095 6.5 56.079 12.4582 82 5.5Z" fill="#39AFA5"/>
      <text
  x="44%"
  y="41%"
  dy="-0.15em"
  text-anchor="middle"
  dominant-baseline="middle"
  fill="#ffffff"
  font-size="0.6rem"
>
<!-- label bliver indsat via props fra den side man bruge komponenten -->
  {{ label }}
</text>
    </svg>
  </NuxtLink>
</template>

<style scoped>
.blob-btn {
  display: inline-block;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.blob-btn:hover {
  transform: scale(1.03);
}
</style>
