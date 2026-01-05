<script setup>

</script>

<template>
<main>
    <section>
        <h1>Kontakt os her</h1>
        <p>Har du klager, forslag, eller en speciel anmodning til os, så kan du kontakte os her, ved at ringe eller skrive en mail til os.</p>
    </section>
    <section>
        <h3>Kontaktinfo</h3>
        <p>Mail: CAFEULLATERKELSENLONDON@Gmail.com</p>
        <p>Tlf: 98 15 80 00</p>
        <p>Bedst at tage kontakt mellem 10:00 - 12:00</p>
    </section>
    <section>
        <h3>Adresse</h3>
        <p>Kastevej 36</p>
        <p>9000 Aalborg</p>
    </section>
    <section>
        <h3>Send en mail</h3>
        <form action="#">
            <input type="text">
            <input type="text">
            <input type="text">
            <button>Send</button>
        </form>
    </section>
</main>
</template>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        margin: 0.5rem 0;
        width: 100%;
    }

    input:nth-of-type(3){
        height: 70px;
    }
}
</style>