<script setup>

</script>

<template>
    <main>
        <section>
            <h1>Om os</h1>
            <p>Inden åbningstid- mest efter lukketid (og ja, måske lidt indimellem)</p>
            <p>Om at drive cafe eller farverig bodega I vestbyen. Her er livet fyldt med tåbelige indfald, vanvittige ideer og store drømme. Her danses der gennem både op og nedture, men vinylerne spinder i baggrunden og gamle røverhistorier bliver genfortalt. Der er venskaber, der har fulgt os i årevis- de blev skabt over en kop kaffe, en sen øl eller et grin midt i travlheden. For dem er vi evigt taknemmelig (Jeg håber aldrig det stopper). Her er fyldt med voldsomme følelser, særligt når det gælder Aab, musikken, stolene, valg af farver, ja selv trappen er et emne. Men her er også fyldt med små fællesskaber, bogklubber, keramik, teater, strikkeklubber og selvfølgelig, den største - musikken altid musikken.</p>
            <p>Vi ved jo godt at solen står op i øst- men den går altså ned med stil i vest</p>
        </section>
        <section>
            <h3>Personalet's galleri</h3>
            <!-- Vores 'PhotoStack'-komponent som indeholder billeder stylet efter Polariod-billeder, hvor man kan trykke og se alle billeder i et slideshow -->
            <PhotoStack />
            <h3>Caféens galleri</h3>
            <!-- Vores 'PhotoStack'-komponent som indeholder billeder stylet efter Polariod-billeder, hvor man kan trykke og se alle billeder i et slideshow -->
            <PhotoStack2 />
        </section>
        <section>
            <h3>Har vi overbevist dig endnu?</h3>
            <p>Så synes vi at du burde gå ned og booke bord hos os, vi lover vi ikke skuffer dig.</p>
            <div class="btnHolder">
                <!-- Her bruger vi vores "Button"-komponent med teksten 'Book bord' hvor den linker til 'book' siden -->
                <Button label="Book bord" to="/book"/>
            </div>
        </section>
        <section>
            <h3>Har du flere spørgsmål?</h3>
            <p>Vi vil så gerne servicere dig! Fandt du ikke hvad du søgte eller har du spørgsmål til os, så kontakt os ved at klikke på knappen herunder.</p>
            <div class="btnHolder">
                <!-- Her bruger vi vores "Button"-komponent med teksten 'Kontakt' hvor den linker til 'contact' siden -->
                <Button label="Kontakt" to="/contact"/>
            </div>
        </section>
        

    </main>
</template>

<style scoped>
.btnHolder{
    display: flex;
    justify-content: center;
}
</style>