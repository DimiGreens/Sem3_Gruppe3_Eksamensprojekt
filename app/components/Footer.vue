<script setup>

</script>

<template>
<footer>
    <section class="footerLinks">
        <img src="../assets/img/CafeLogo.png" alt="Cafe logo" class="cafeLogo">
        <div class="SoMe">
            <FontAwesomeIcon class="icon" :icon="['fab', 'facebook']" />
            <FontAwesomeIcon class="icon" :icon="['fab', 'instagram']" />
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

.icon{
    width: 40px;
    height: 40px;
}

footer{
    background-color: var(--navGray);
}

.info{
    color: var(--backgroundPink);
}

.info p{
    margin: 0 10px;
}

.info h4{
    margin: 10px 10px
}

.cafeLogo{
    width: 70px;
    height: 50px;
}

.footerLinks{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    color: var(--backgroundPink);
    .SoMe{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
}
</style>