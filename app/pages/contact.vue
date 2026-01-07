<script setup>

</script>

<template>
<main>
    <section>
        <h1>Kontakt os her</h1>
        <p>Hvad kan vi hjælpe dig med i dag? Giv et kald eller send os en mail herunder.</p>
    </section>
    <section>
        <p><FontAwesomeIcon :icon="['fas', 'phone']" class="fontIcon" /> +45 98 15 80 00</p>
    </section>
    <section>
        <h3>Send en mail</h3>
        <form action="#">
            <p>Email</p>
            <input type="text">
            <p>Emne</p>
            <input type="text">
            <p>Din besked</p>
            <input type="text">
        </form>
        <div class="btnHolder">
            <Button label="Send" to="#"/>
        </div>
    </section>
</main>
</template>

<style scoped>
.fontIcon{
    width: 30px;
    height: 30px;
}

section:nth-of-type(2) p{
    display: flex;
    align-items: center;
}

.btnHolder{
    display: flex;
    justify-content: center;
}

form{
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-right: 10px;

    p{
        margin: 0.2rem 0;
    }

    input{
        width: 100%;
    }

    input:nth-of-type(3){
        height: 70px;
    }
}
</style>