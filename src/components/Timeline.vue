<script setup>
import { computed } from "vue";
import {
  formatDate,
  addDurationToData,
  sortDataByStartDate,
} from "./helpers/dateMethods.js";

const props = defineProps({
  resumeData: {
    type: Object,
    required: true,
  },
});

// Automatiquement calculer les données triées et avec la durée pour chaque élément
const sortedWorkData = computed(() => {
  if (props.resumeData && props.resumeData.work) {
    const workWithDuration = addDurationToData(props.resumeData.work);
    return sortDataByStartDate(workWithDuration);
  }
  return [];
});
</script>

<template>
  <div>
    <h2>Parcours</h2>
    <div class="timeline">
      <div class="timeline-line"></div>
      <div class="event" v-for="(item, index) in sortedWorkData" :key="index">
        <div class="date-range">
          <span v-if="item.endDate">
            {{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }} ({{ item.duration }})
          </span>
          <span v-else>
            Depuis {{ formatDate(item.startDate) }} ({{ item.duration }})
          </span>
        </div>
        <h3 v-html="item.position"></h3>
        <p v-html="item.company"></p>
        <p v-if="item.summary">
          <em v-html="item.summary"></em>
        </p>

        <div class="details">

          <div v-if="item.projects && item.projects.length">
            <!-- Affichage des projets principaux -->
            <div v-for="(project, projectIndex) in item.projects" :key="projectIndex">
              <strong>{{ project.name }}</strong>
              <p v-if="project.description">{{ project.description }}</p>

              <!-- Affichage des sous-projets s'ils existent -->
              <ul v-if="project.subProjects && project.subProjects.length">
                <li v-for="(subProject, subProjectIndex) in project.subProjects" :key="subProjectIndex">
                  <strong>{{ subProject.name }}</strong>
                  <p>{{ subProject.description }}</p>

                  <!-- Boucle pour les highlights des sous-projets -->
                  <ul v-if="subProject.highlights && subProject.highlights.length">
                    <li v-for="(highlight, highlightIndex) in subProject.highlights" :key="highlightIndex">
                      {{ highlight }}
                    </li>
                  </ul>
                </li>
              </ul>

              <!-- Si pas de sous-projets, on affiche les highlights des projets -->
              <ul v-else-if="project.highlights && project.highlights.length">
                <li v-for="(highlight, highlightIndex) in project.highlights" :key="highlightIndex">
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.timeline-line {
  position: absolute;
  left: 4%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--vt-c-divider-light-1);
}

.event {
  position: relative;
  margin: 1.5rem 0;
  padding: 1.5rem;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  width: 80%;
  margin-left: 50px;
}

.event:hover {
  box-shadow: 0 4px 8px var(--vt-c-divider-light-1);
}

.icon-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  cursor: pointer;
}

.date-range {
  font-weight: bold;
  color: var(--vt-c-divider-dark-1);
  margin-bottom: 0.5rem;
}

.details {
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  overflow: hidden;
}

.details strong {
  font-weight: bold;
}

.details p {
  margin-bottom: 0.5rem;
}

/* grow-shrink transition for details */
.grow-shrink-enter-active {
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.grow-shrink-leave-active {
  transition: all 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06);
}

.grow-shrink-enter-from,
.grow-shrink-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

.grow-shrink-enter-to,
.grow-shrink-leave-from {
  opacity: 1;
  transform: scaleY(1);
}
</style>
