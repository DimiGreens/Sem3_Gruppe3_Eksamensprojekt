<script setup>

</script>

<template>
    <main>
        <section>
            <h1>Events</h1>
            <p>Her kan du se hvilke events vi hoster, både kommende og tideligere afholdte events. Hvis der er noget der interessere dig så kan du kontakte os og købe billet, og hvis du opdager et event der tideligere er afholdt så hold dig opdateret da vi godt kan finde på at hoste et event lignende igen.</p>
        </section>
        <section>
            <h2>Kommende events</h2>
            <article class="event">
                <h3>Musik Bingo - 90'erne</h3>
                <p class="image">BILLEDE</p>
                <p class="dis">I denne udgave af vores velkendte musik bingo er genren 90’erne. Kom og vær med til en fest og vind lækre præmier når din plade er fuld</p>
                <p class="date">15/01-2026</p>
                <div class="btnHolder">
                    <!-- Her bruger vi vores "Button"-komponent med teksten 'Book bord' hvor den linker til 'book' siden -->
                    <Button label="Book bord" to="/book"/>
                </div>
            </article>
            <article class="event">
                <h3>ULLAUNPLUGGED - Kira Skov</h3>
                <p class="image">BILLEDE</p>
                <p class="dis">Kom og vær med til et brag af en fest, når Kira Skov endnu engang besøger caféen. Kira har alle sine kendte numre med og vi sørger for øl bag baren.</p>
                <p class="date">16/01-2026</p>
                <div class="btnHolder">
                    <!-- Her bruger vi vores "Button"-komponent med teksten 'Book bord' hvor den linker til 'book' siden -->
                    <Button label="Book bord" to="/book"/>
                </div>
            </article>
            <article class="event">
                <h3>ULLAUNPLUGGED - LOFN</h3>
                <p class="image">BILLEDE</p>
                <p class="dis">Kan du huske denne ikoniske duo? De ligger vejen forbi Café Ulla Terkelsen London endnu engang, kom og vær med til et hyggeligt selskab og gode toner når LOFN gæster os igen.</p>
                <p class="date">27/01-2026</p>
                <div class="btnHolder">
                    <!-- Her bruger vi vores "Button"-komponent med teksten 'Book bord' hvor den linker til 'book' siden -->
                    <Button label="Book bord" to="/book"/>
                </div>
            </article>
            <article>
                <h3>Har du nogle spørgsmål?</h3>
                <p>Vi vil så gerne servicerer dig! Fandt du ikke hvad du søgte eller er du en kunstner, som gerne vil optræde hos os? Tøv ikke med at sende til spørgsmål afsted i vores retning.</p>
                <div class="btnHolder">
                    <!-- Her bruger vi vores "Button"-komponent med teksten 'Kontakt os her' hvor den linker til 'contact' siden -->
                    <Button label="Kontakt os her" to="contact"/>
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>
.btnHolder{
    display: flex;
    justify-content: center;
}
</style>