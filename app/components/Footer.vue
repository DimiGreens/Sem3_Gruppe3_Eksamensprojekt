<script setup>

</script>

<template>
<footer>
    <section class="footerLinks">
        <p>LOGO</p>
        <div class="SoMe">
            <p>FB</p>
            <p>IG</p>
        </div>
    </section>
</footer>
</template>

<style scoped>
.footerLinks{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--navGray);
    color: var(--backgroundPink);

    .SoMe{
        display: flex;
        gap: 2rem;
    }

}
</style>