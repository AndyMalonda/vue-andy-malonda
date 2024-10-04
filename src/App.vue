<!-- App.vue -->
<script setup>
import { onMounted, ref } from "vue";
import Presentation from "./components/Presentation.vue";
import Timeline from "./components/Timeline.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import BackToTop from "./components/helpers/BackToTop.vue";
import LandingView from "./components/LandingView.vue";

const resumeData = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/src/assets/resume.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    resumeData.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch resume data:', error);
  }

  console.log(resumeData.value);
});

const sections = [
  { id: "landing-view", component: LandingView },
  { id: "about-me", component: Presentation },
  { id: "skills", component: Skills },
  { id: "cursus", component: Timeline },
  { id: "contact", component: Contact },
];

const sectionsRefs = ref([]);

const setSectionRef = (index) => {
  return (el) => {
    sectionsRefs.value[index] = el;
  };
};

</script>

<template>
  <div
    v-for="(section, index) in sections"
    :key="index"
    :id="section.id"
    class="section-view"
    :ref="setSectionRef(index)"
  >
  <component :is="section.component" :resume-data="resumeData" />
</div>

  <BackToTop />
</template>

<style scoped>
.section-view {
  display: flex;
  min-height: 100vh;
  margin-bottom: 1rem;
  flex-direction: column;
  scroll-margin-top: 80px;
}
</style>