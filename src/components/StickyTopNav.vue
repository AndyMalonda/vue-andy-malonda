<template>
  <nav class="sticky-top-nav">
    <a
      v-for="section in sections"
      :key="section.id"
      :href="'#' + section.id"
      class="nav-link"
      :class="{ active: activeSection === section.id }"
    >
      <button class="nav-button">
        <component :is="section.navItem.icon" class="nav-icon" />
        <span>{{ section.navItem.heading }}</span>
      </button>
    </a>
  </nav>
</template>

<script setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
});

const activeSection = ref(null);

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  for (const section of props.sections) {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementBottom = elementTop + rect.height;
      if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
        activeSection.value = section.id;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.sticky-top-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: var(--theme-background-color, #ffffff);
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--top-desktop-nav-height);
  z-index: 1000;
  transition: height 0.3s ease-in-out, transform 0.3s ease-in-out;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sticky-top-nav:hover {
  height: calc(var(--top-desktop-nav-height) + 30px);
}

.nav-link {
  display: flex;
  flex: 1;
  height: 100%;
  text-decoration: none;
}

.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  color: var(--theme-text-color, #333);
}

.nav-button:hover,
.nav-link.active .nav-button {
  transform: translateY(-3px);
  text-decoration: underline;
}

.nav-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.nav-button:hover .nav-icon,
.nav-link.active .nav-icon {
  transform: scale(1.1);
}

.nav-link:hover .nav-button {
    font-weight: bold;
    color: var(--color-primary);
}
</style>