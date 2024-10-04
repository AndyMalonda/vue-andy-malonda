<template>
  <nav class="top-nav">
    <a v-for="section in sections" :key="section.id" :href="'#' + section.id" class="nav-link">
      <component :is="section.navItem.icon" class="nav-icon" />
      <span>{{ section.navItem.heading }}</span>
    </a>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.nav-icon {
  width: 24px;
  height: 24px;
}
</style>