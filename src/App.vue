<script setup>
import { onMounted, ref } from "vue";

// Components
import Presentation from "@/components/Presentation.vue";
import Timeline from "@/components/Timeline.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";
import BackToTop from "@/components/helpers/BackToTop.vue";
import LandingView from "@/components/LandingView.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import MobileTopNav from "@/components/MobileTopNav.vue";
import StickyTopNav from "@/components/StickyTopNav.vue";
import Projects from "@/components/Projects.vue";

// Icons
import UserIcon from "@/components/icons/IconUser.vue";
import BriefcaseIcon from "@/components/icons/IconBriefcase.vue";
import ToolsIcon from "@/components/icons/IconTools.vue";
import ChatIcon from "@/components/icons/IconChat.vue";
// import ProjectIcon from "@/components/icons/IconProject.vue"; // Add an icon for projects

const resumeData = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/src/assets/resume.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    resumeData.value = await response.json();
  } catch (error) {
    console.error("Failed to fetch resume data:", error);
  }
});

const sections = [
  { id: "landing-view", component: LandingView, navItem: null },
  {
    id: "about-me",
    component: Presentation,
    navItem: { icon: UserIcon, heading: "Présentation" },
  },
  {
    id: "skills",
    component: Skills,
    navItem: { icon: ToolsIcon, heading: "Compétences" },
  },
  {
    id: "cursus",
    component: Timeline,
    navItem: { icon: BriefcaseIcon, heading: "Parcours" },
  },
  {
    id: "projects",
    component: Projects,
    navItem: { icon: null, heading: "Projets" },
  },
  {
    id: "contact",
    component: Contact,
    navItem: { icon: ChatIcon, heading: "Contact" },
  },
];

const sectionsRefs = ref([]);
const setSectionRef = (index) => {
  return (el) => {
    sectionsRefs.value[index] = el;
  };
};

const isNavVisible = ref(true);
const isStickyNavVisible = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isNavVisible.value = false;
    isStickyNavVisible.value = true;
  } else {
    isNavVisible.value = true;
    isStickyNavVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="app-container">
    <header>
      <div class="desktop-nav">
        <nav :class="['side-nav', { 'hidden': !isNavVisible }]">
          <HeaderNav :sections="sections" />
        </nav>
        <StickyTopNav v-if="isStickyNavVisible" :sections="sections.filter(section => section.navItem)" />
      </div>
      <div class="mobile-nav">
        <MobileTopNav :sections="sections.filter(section => section.navItem)" />
      </div>
    </header>
    <main class="main-content">
      <div
        v-for="(section, index) in sections"
        :key="section.id"
        :id="section.id"
        class="section-view"
        :ref="setSectionRef(index)"
      >
        <component :is="section.component" :resume-data="resumeData" />
      </div>
    </main>
    <BackToTop />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  overflow-y: auto;
}

#landing-view {
  width: 85%;
  transition: width 0.3s ease-in-out; /* Add transition for width */
}

.side-nav {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  padding-right: 0%;
  width: 20%;
}

.side-nav.hidden {
  transform: translateX(120%);
}

.section-view {
  margin-bottom: 1rem;
  scroll-margin-top: 80px;
}

/* Styles for small screens */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
  }

  .main-content {
    width: 100%;
  }

  #landing-view {
    width: 100%;
    transition: none;
  }
}

/* Styles for larger screens */
@media (min-width: 769px) {
  .desktop-nav {
    display: block;
  }

  .mobile-nav {
    display: none;
  }
}
</style>