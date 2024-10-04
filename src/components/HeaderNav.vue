<!-- HeaderNav.vue -->
<script setup>
import { computed } from 'vue';
import HeaderNavItem from "./HeaderNavItem.vue";

const props = defineProps({
  sections: {
    type: Array,
    default: () => []
  }
});

const navItems = computed(() => 
  (props.sections || [])
    .filter(section => section && section.navItem)
    .map(section => ({
      ...section.navItem,
      sectionId: `#${section.id}`
    }))
);
</script>

<template>
  <div class="nav-container">
    <HeaderNavItem 
      v-for="item in navItems" 
      :key="item.heading" 
      :item="item"
    >
      <template #icon>
        <component :is="item.icon" />
      </template>
      <template #heading>{{ item.heading }}</template>
    </HeaderNavItem>
  </div>
</template>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>