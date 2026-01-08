<script setup>

</script>

<template>
    <main>
        <h1>Book bord</h1>
        <p>Her på siden kan du booke bord hos Café Ulla Terkelsen, London. Har du ønske om bestemte siddepladser så skriv det med i kommentaren når du booker.</p>
        <div class="btnHolder">
            <!-- Her bruger vi vores "Button"-komponent med teksten 'Book bord' -->
            <Button label="Book bord" to="#"/>
        </div>
        <h3>Bord plan</h3>
        <p>Tryk på bordene for at se nummer, pladser og tilgøngelighed.</p>
        <div class="imgHolder">
            <!-- Billede/PNG lavet ved brug af generativ AI -->
            <img src="../assets/img/bordplan.png" alt="">
        </div>
    </main>
</template>

<style scoped>
.btnHolder{
    display: flex;
    justify-content: center;
}

.imgHolder{
    display: flex;
    justify-content: center;
}

img{
    width: 320px;
}
</style>