<script setup>
import { defineProps } from "vue";
import Section from "./helpers/Section.vue";
import { calculateAge } from "./helpers/dateMethods.js";

const props = defineProps({
  resumeData: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <div v-if="resumeData">
    <Section>
      <h1 class="color-primary mb-4 section-title">Présentation</h1>
      <p class="lead mb-4">
        Je suis <strong>{{ resumeData.basics.name }}</strong>, un <strong>{{ resumeData.basics.label }}</strong> de
        {{ calculateAge(new Date(resumeData.basics.birthDate)) }} ans.
      </p>
      <p class="lead mb-4" v-html="resumeData.basics.summary"></p>
      <!-- <p class="lead mb-4">
        Mon parcours professionnel atypique m'a permis d'acquérir une expérience variée et de développer des compétences
        transversales. Après avoir essayé plusieurs domaines études dont la
        communication, j'ai décidé de me réorienter vers le développement web en
        autodidacte. Cette démarche m'a permis de découvrir ma véritable passion
        pour la programmation et de rejoindre <strong>Vertech'</strong>, une
        entreprise spécialisée dans les solutions MES pour l'industrie de la
        verrerie, en tant que <strong>Software Engineer</strong>.
      </p>
      <p class="lead mb-4">
        Au sein de l'équipe R&D de Vertech, je conçois des applications complexes
        pour l'industrie de la verrerie, je teste et déploie des solutions de
        supervision et de contrôle qualité en France et à l'international. Je
        travaille principalement sur les bases de données (Oracle et MySQL),
        JavaScript, C#, .NET CORE, et l'intégration continue, en suivant des
        méthodes de développement agiles.
      </p>
      <p class="lead mb-4">
        Mon expérience chez Vertech est ma première en tant que développeur, et je
        suis enthousiaste à l'idée de contribuer à des projets innovants dans
        l'industrie ou ailleurs. Je suis constamment à la recherche de nouvelles
        opportunités pour améliorer mes compétences et apprendre de nouvelles
        technologies. Je suis ouvert à l'apprentissage continu et aux nouvelles
        expériences, alors n'hésitez pas à me contacter !
      </p> -->
    </Section>
  </div>
</template>
