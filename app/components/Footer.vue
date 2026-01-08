<script setup>

</script>

<template>
<footer>
    <section class="footerLinks">
        <img src="../assets/img/ullaTLogo.jpg" alt="Cafe logo" class="cafeLogo">
        <div class="SoMe">
            <FontAwesomeIcon class="icon" :icon="['fab', 'facebook']" />
            <FontAwesomeIcon class="icon" :icon="['fab', 'instagram']" />
        </div>
    </section>
    <section class="info">
        <div class="contactSection">
            <h4>Adresse</h4>
            <p>Kastetvej 36</p>
            <p>9000 Aalborg</p>
            <p class="contact"><FontAwesomeIcon :icon="['fas', 'phone']" class="contantIcon" /> +45 98 15 80 00</p>
            <p class="contact"><FontAwesomeIcon :icon="['fas', 'envelope']" class="contantIcon" /> cafeullaterkelsenlondon@gmail.com</p>
        </div>
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
.contantIcon{
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.contact{
    display: flex;
    align-items: center;
}

.contactSection{
    margin-bottom: 40px;
}

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
    margin: 5px 10px;
    font-family: "Indie Flower", cursive;
}

.info h4{
    margin: 10px 10px;
    font-family: "Poppins", sans-serif;
}

.cafeLogo{
    width: 100px;
    height: 80px;
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