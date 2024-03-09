<script setup>
import Card from "./helpers/Card.vue";

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
      description="Bienvenue sur mon site de présentation, je vous invite à naviguer pour en savoir plus sur mon profil"
      linkDescription="Ou téléchargez mon CV en pdf"
      link="https://vitejs.dev/guide/"
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
