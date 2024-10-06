<script setup>
import { defineProps } from 'vue';
import { formatDate } from './helpers/dateMethods';

const props = defineProps({
  resumeData: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <div>
    <h2>Projets Personnels</h2>
    <div class="projects">
      <div v-if="resumeData && resumeData.projects.length > 0">
        <div class="project" v-for="(project, index) in resumeData.projects" :key="index">
          <h3>
            <span v-html="project.name"></span>
            <span v-if="project.url">
              - <span v-html="project.url"></span>
            </span>
          </h3>
          <p>
            <span v-if="project.startDate">{{ formatDate(project.startDate) }}</span>
            <span v-if="project.endDate"> - {{ formatDate(project.endDate) }}</span>
          </p>
          <p v-html="project.description"></p>
          <ul>
            <li v-for="(highlight, highlightIndex) in project.highlights" :key="highlightIndex" v-html="highlight"></li>
          </ul>
        </div>
      </div>
      <div v-else>
        <p>Aucun projet disponible pour le moment.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #f0f4f8;
  border-radius: 8px;
}

.project {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 8px;
}

.project:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.project h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: var(--color-primary, #007bff);
}

.project h3 a {
  text-decoration: none;
  color: inherit;
}

.project h3 a:hover {
  text-decoration: underline;
}

.project p {
  margin: 0.5rem 0;
  line-height: 1.6;
  color: #333;
}

.project ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.project ul li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.project ul li:last-child {
  margin-bottom: 0;
}

</style>