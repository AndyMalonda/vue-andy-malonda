<script setup>
import { onMounted, ref } from "vue";
import Header from "./components/Header.vue";
import HeaderNav from "./components/HeaderNav.vue";
import Presentation from "./components/Presentation.vue";
import Timeline from "./components/Timeline.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import BackToTop from "./components/helpers/BackToTop.vue";

const sections = [
  { id: "about-me", component: Presentation },
  { id: "cursus", component: Timeline },
  { id: "skills", component: Skills },
  { id: "contact", component: Contact },
];

const sectionsRefs = ref([]);
const sectionsPositions = ref([]);

const setSectionRef = (index) => {
  return (el) => {
    sectionsRefs.value[index] = el;
  };
};

const scrollToSection = (index) => {
  sectionsRefs.value[index].scrollIntoView({ behavior: "smooth" });
};

const magnetNavigation = () => {
  console.log(window.scrollY);
};

const setSectionViewHeight = () => {
  const sectionViews = document.querySelectorAll(".section-view");
  sectionViews.forEach((sectionView) => {
    const height =
      Math.ceil(sectionView.scrollHeight / window.innerHeight) * 100;
    sectionView.style.height = `${height}vh`;

    sectionsPositions.value.push(sectionView.offsetTop);
  });
};

// log key/value of sectionsPositions
console.log(sectionsPositions.value);

// we should find 4 key/value pairs


onMounted(() => {
  setSectionViewHeight();
  window.addEventListener("resize", setSectionViewHeight);
  window.addEventListener("scroll", magnetNavigation);
});
</script>

<template>
  <div id="landingView" class="section-view">
    <header class="bg-primary rounded-left">
      <img
        alt="Portrait"
        class="logo rounded-circle"
        src="./assets/profile.jpeg"
        width="175"
        height="175"
      />

      <div class="wrapper">
        <Header name="Andy Malonda" />
      </div>
    </header>

    <main class="my-auto">
      <HeaderNav />
    </main>
  </div>

  <div
    v-for="(section, index) in sections"
    :key="index"
    :id="section.id"
    class="section-view"
    :ref="setSectionRef(index)"
  >
    <component :is="section.component" />
  </div>

  <BackToTop />
</template>

<style scoped>
.section-view {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: column;
  scroll-margin-top: 80px;
}

header {
  line-height: 1.5;
  padding-top: 1rem;
}

.logo {
  display: block;
  margin: 20px auto;
  border: 5px solid var(--color-tertiary);
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.3);
}

.rounded-circle {
  border-radius: 50% !important;
}

@media (min-width: 1024px) {
  #landingView {
    flex-direction: row;
    border-radius: 1rem;
    border: 1px solid var(--color-border);
    margin-top: 0;
    margin-bottom: 0;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem;
  }

  .rounded-left {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
