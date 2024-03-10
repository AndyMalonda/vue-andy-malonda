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
      title="Développeur Fullstack"
      description="
      <p>
        Je suis actuellement basé à <strong>Chalon-sur-Saône</strong>,
        et je suis prêt à déménager pour un poste qui me correspond.
      </p>
      <p>
        Je recherche prioritairement sur <strong>Lyon</strong> et ses
        environs.
      </p>
      <p>
        J'admets une préférence pour les grandes villes, mais je suis
        ouvert à toute proposition. Je suis également ouvert à des opportunités de télétravail.
      </p>
      <p>
        Faites un tour sur mon site pour en savoir plus sur moi et mon parcours.
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
