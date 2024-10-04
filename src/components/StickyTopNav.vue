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
  handleScroll(); // Initial check
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
  background-color: var(--theme-background-color, #ffffff); /* Use theme background color */
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px; /* Set a fixed height */
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  border-bottom-left-radius: 15px; /* Add border radius to the bottom */
  border-bottom-right-radius: 15px; /* Add border radius to the bottom */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow for better visual separation */
}

.nav-link {
  display: flex;
  flex: 1; /* Distribute buttons equally horizontally */
  height: 100%; /* Make buttons 100% height */
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
  border-bottom-left-radius: 8px; /* Round bottom-left corner */
  border-bottom-right-radius: 8px; /* Round bottom-right corner */
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  color: var(--theme-text-color, #333); /* Use theme text color */
}

.nav-button:hover,
.nav-link.active .nav-button {
  color: var(--color-secondary); /* Change text color on hover or when active */
  transform: translateY(-3px);
  text-decoration: underline var(--color-secondary); /* Add underline on hover or when active */
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
</style>