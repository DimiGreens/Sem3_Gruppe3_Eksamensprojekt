<script setup>
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
  <NuxtLink :to="to" class="blob-btn">
    <svg
      width="260"
      height="150"
      viewBox="0 0 260 150"
      xmlns="http://www.w3.org/2000/svg"
      role="button"
      :aria-label="label"
    >
      <!-- Sky-blob -->
      <path
        d="M70,80
          C40,80 35,55 55,45
          C60,25 95,25 110,40
          C130,20 170,25 180,45
          C205,45 215,70 195,85
          C190,105 150,110 130,100
          C110,115 75,110 70,90Z"
        fill="#2ab7b0"
      />

      <!-- Tekst -->
      <text
        x="50%"
        y="45%"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="#ffffff"
        font-size="1rem"
      >
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
