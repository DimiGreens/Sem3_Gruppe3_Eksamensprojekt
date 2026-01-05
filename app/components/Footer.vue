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
    <section class="info">
        <h4>Adresse</h4>
        <p>Kastetvej 36</p>
        <p>9000 Aalborg</p>
        <p>Tlf: 98 15 80 00</p>
        <p>Mail: cafeullaterkelsenlondon@gmail.com</p>
        <h4>Åbningstider</h4>
        <p>Mandag: lukket</p>
        <p>Tirsdag: 11:00 - 23:30</p>
        <p>Onsdag: 11:00 - 23:30</p>
        <p>Torsdag: 11:00 - 23:30</p>
        <p>Fredag: 13:00 - 02:00</p>
        <p>Lørdag: 10:00 - 02:00</p>
        <p>Søndag: lukket</p>
    </section>
</footer>
</template>

<style scoped>

footer{
    background-color: var(--navGray);
}

.info{
    color: var(--backgroundPink);
}

.info p{
    margin: 0;
}

.footerLinks{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    color: var(--backgroundPink);
    .SoMe{
        display: flex;
        gap: 2rem;
    }
}
</style>