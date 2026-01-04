<script setup>

</script>

<template>
    <main>
        <section>
            <h1>Events</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, debitis nostrum reprehenderit, inventore quo quaerat pariatur necessitatibus, in cumque molestias asperiores cum voluptas aspernatur? Voluptates facere maxime assumenda aliquam iure.</p>
        </section>
        <section>
            <h2>Kommende events</h2>
            <article class="event">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p class="date">DATO</p>
                <p class="dis">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sint debitis eveniet sunt asperiores fugit nulla tenetur illum aperiam blanditiis sit recusandae, distinctio provident molestias? Cupiditate iusto nobis vel possimus.</p>
                <p class="image">BILLEDE
                </p>
            </article>
            <article class="event">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p class="date">DATO</p>
                <p class="dis">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sint debitis eveniet sunt asperiores fugit nulla tenetur illum aperiam blanditiis sit recusandae, distinctio provident molestias? Cupiditate iusto nobis vel possimus.</p>
                <p class="image">BILLEDE
                </p>
            </article>
        </section>
    </main>
</template>

<style scoped>
.event{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h3{
        grid-column: 1 / -1;
    }

    .dis{
        grid-column: 1;
    }

    .date{
        grid-column: 1;
        margin: 0;
    }

    .image{
        grid-column: 2;
        background: red;
    }

}
</style>