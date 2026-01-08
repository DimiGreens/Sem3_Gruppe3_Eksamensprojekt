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
    </main>
</template>

<style scoped>
.btnHolder{
    display: flex;
    justify-content: center;
}
</style>