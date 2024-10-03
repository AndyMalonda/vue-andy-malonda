<script setup>
import Card from "./helpers/Card.vue";
import cv from "../assets/CV_Andy_MALONDA.pdf";

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="color-secondary">{{ name }}</h1>

    <Card
      title="Développeur Full stack C# / JavaScript / SQL"
      description="
      <p>
        J'habite à <strong>Lyon</strong>, dans le 9e (Gare de Vaise).
      </p>
      <p>
        J'ai mon <strong>permis B</strong>, mais pas de véhicule personnel. Je donc cherche idéalement un poste situé <strong>intramuros</strong>, mais je suis ouvert à toute opportunité dans un rayon raisonnable (accessible vélo ou transports en commun).
      </p>
      <p>
        Je n'ai pas d'exigences concernant le <strong>télétravail</strong>, je préfère généralement être au bureau et travailler en équipe.
      </p>
      <p>
        Je ne souhaite pas travailler dans le secteur de la défense.
      </p>
      <p>
        Je suis disponible <strong>immédiatement.</strong>
      </p>
      <p>
        Faites un tour sur mon site pour en savoir plus sur mon parcours et mes compétences.
      </p>
      "
      linkDescription="Ou téléchargez directement mon CV en pdf"
      :link="cv"
    />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  color: white;
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
