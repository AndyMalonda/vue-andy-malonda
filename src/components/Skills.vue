<script setup>
import { defineProps } from 'vue';

// Define props to receive the resume data
const props = defineProps({
  resumeData: {
    type: Object, // Expecting an object containing skills data
    required: true,
  },
});
</script>

<template>
  <div class="skills-container" v-if="resumeData && resumeData.skills && resumeData.skills.length">
    <div 
      class="skills-section" 
      v-for="(section, index) in resumeData.skills" 
      :key="index"
    >
      <h2>{{ section.name }}</h2>
      <div class="tags-container">
        <span 
          class="tag" 
          v-for="(keyword, kIndex) in section.keywords" 
          :key="kIndex" 
          v-html="keyword"
        >
        </span>
      </div>
    </div>
  </div>
  <p v-else>Loading skills data...</p> <!-- Loading message while waiting for data -->
</template>

<style scoped>
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.skills-section {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--color-secondary);
  cursor: pointer;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.tag:hover {
  background: var(--color-tertiary);
}

@media (max-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr;
  }

  .tag {
    font-size: 0.8rem;
  }
}
</style>
