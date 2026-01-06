<script setup>
import { ref, onMounted } from 'vue'

const svgRef = ref<SVGSVGElement | null>(null)

onMounted(() => {
  if (!svgRef.value) return

  const paths = svgRef.value.querySelectorAll<SVGPathElement>('path')
  let totalDelay = 0

  paths.forEach((path) => {
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    path.style.animation = `draw 2s ease forwards ${totalDelay}s`
    totalDelay += 0.05 // adjust delay between paths
  })
})
</script>

<template>
  <div class="svg-wrapper">
    <svg
      ref="svgRef"
      width="266"
      height="23"
      viewBox="0 0 266 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="animated-svg"
    >
      <!-- Example path -->
      <path
        d="M258.142 17.592C257.918 17.656 257.79 17.688 257.758 17.688C257.63 17.688 257.494 17.624 257.35 17.496C256.822 16.712 256.438 15.344 256.198 13.392C255.974 11.44 255.862 9.76 255.862 8.352C255.862 8.128 256.022 8.016 256.342 8.016C256.822 8.016 257.062 8.28 257.062 8.808C257.062 8.952 257.054 9.072 257.038 9.168C257.182 8.832 257.454 8.488 257.854 8.136C258.254 7.784 258.718 7.488 259.246 7.248C259.774 7.008 260.31 6.888 260.854 6.888C262.566 6.888 263.814 7.648 264.598 9.168C265.382 10.672 265.774 12.544 265.774 14.784C265.774 15.552 265.694 16.168 265.534 16.632C265.374 17.08 265.158 17.304 264.886 17.304C264.598 17.304 264.454 17.216 264.454 17.04C264.566 16.192 264.622 15.36 264.622 14.544C264.622 12.48 264.262 10.92 263.542 9.864C262.822 8.792 261.87 8.256 260.686 8.256C260.11 8.256 259.55 8.4 259.006 8.688C258.478 8.976 258.046 9.376 257.71 9.888C257.39 10.4 257.23 10.984 257.23 11.64C257.23 12.376 257.27 13.016 257.35 13.56C257.43 14.104 257.558 14.76 257.734 15.528C257.926 16.28 258.062 16.968 258.142 17.592Z"
        stroke="black"
        fill="none"
        stroke-width="1"
      />
    </svg>
  </div>
</template>

<style scoped>
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

.animated-svg path {
  stroke-linecap: round;
  stroke-linejoin: round;
  /* Important: make the stroke visible */
  stroke: black;
  fill: none;
}
</style>
