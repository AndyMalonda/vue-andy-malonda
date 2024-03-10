<script setup>
import { ref, computed } from "vue";
// src\components\helpers\dateMethods.js
import {
  toDate,
  calculateDuration,
  formatDate,
} from "./helpers/dateMethods.js";

const data = [
  {
    startDate: "04/2022",
    endDate: null,
    text: "Développeur logiciel",
    subtext: "Vertech', Chalon-sur-Saône, France",
    description:
      "Conception d'applications complexes pour l'industrie de la verrerie, Test et déploiement de solutions de supervision et de contrôle qualité, Évolution technologique et fonctionnelle, Membre de l'équipe BDD et des outils de reporting",
    competences:
      "Javascript, C# (.NET framework), SQL (Oracle and MySQL), Git, Windows PowerShell, MongoDB, Node.js, Docker, Kendo UI, Bootstrap, NHibernate, OpenXML, Selenium, Méthode agile, JIRA, Documentation WikiJS, Intégration continue via Jenkins",
  },
  {
    startDate: "08/2019",
    endDate: "08/2020",
    text: "Représentant service client",
    subtext: "Uber, Lisbonne, Portugal",
    description:
      "COE Specialist II - Point de contact de l'équipe en charge des coursiers partenaires Uber Eats",
    competences:
      "Appels inbound and outbound, Traitement de tickets, Mentoring, Communication interne, Conception et rédaction de process",
  },
  {
    startDate: "04/2018",
    endDate: "08/2019",
    text: "Téléconseiller",
    text: "Représentant service client",
    subtext: "Teleperformance, Lisbonne, Portugal",
    description:
      "Travail pour une grande enseigne de voyages en ligne et une entreprise de vente de fournitures de bureau destinée aux professionnels",
    competences:
      "Résolution de problèmes, Contact client, Relation B2B, Suivi affaires, Prise de commande",
  },
  {
    startDate: "2012",
    endDate: "2018",
    text: "Divers emplois",
    subtext: "Principalement en intérim, Lyon, France",
    description:
      "Manutention, Restauration, Accueil, Livraison, Nettoyage, et plus",
    competences:
      "Polyvalence, Adaptabilité, Travail en équipe, Gestion du stress",
  },
  {
    startDate: "12/2021",
    endDate: "04/2022",
    text: "Développeur web et web mobile",
    subtext: "OpenClassrooms",
    description: "Formation en ligne sur les technologies web et mobile",
    competences: "HTML, CSS, Javascript, React, Node.js, Express, MongoDB, Git",
  },
  {
    startDate: "2015",
    endDate: "2017",
    text: "BTS Communication",
    subtext: "ICOGES Lyon, puis Lycée la Martinière Duchère",
    description: null,
    competences: null,
  },
  {
    startDate: "2013",
    endDate: "2014",
    text: "L1 Lettres Modernes",
    subtext: "Université Lyon 3",
    description: null,
    competences: null,
  },
  {
    startDate: "2012",
    endDate: "2013",
    text: "L1 Anthropologie",
    subtext: "Université Lyon 2",
    description: null,
    competences: null,
  },
  {
    startDate: "2009",
    endDate: "2012",
    text: "Bac Littéraire",
    subtext: "Lycée de la Plaine de l'Ain",
    description: null,
    competences: null,
  },
];

// Trier les données par ordre chronologique inversé (dates de début)
const sortedData = computed(() => {
  return dataWithDuration.sort((a, b) => {
    const dateA = toDate(a.startDate);
    const dateB = toDate(b.startDate);

    return dateB - dateA;
  });
});

// Ajouter une propriété calculée `duration` à chaque objet de `data`
const dataWithDuration = data.map((item) => {
  return {
    ...item,
    duration: calculateDuration(item.startDate, item.endDate),
  };
});

const expandedItem = ref(null);

const toggleExpand = (index) => {
  if (expandedItem.value === index) {
    expandedItem.value = null;
  } else {
    expandedItem.value = index;
  }
};
</script>

<template>
  <div>
    <h2>Parcours</h2>
    <div class="timeline">
      <div class="timeline-line"></div>
      <div class="event" v-for="(item, index) in sortedData" :key="index">
        <div class="date-range">
          <span v-if="item.endDate">
            {{ formatDate(item.startDate) }} -
            {{ formatDate(item.endDate) }} ({{ item.duration }})
          </span>
          <span v-else>
            Depuis {{ formatDate(item.startDate) }} ({{ item.duration }})
          </span>
        </div>
        <h3>{{ item.text }}</h3>
        <p>{{ item.subtext }}</p>
        <div class="icon-wrapper" v-if="item.description || item.competences">
          <span class="icon" @click="toggleExpand(index)">
            {{ expandedItem === index ? "" : "&#x25BC;" }}
          </span>
        </div>
        <transition name="grow-shrink">
          <div class="details" v-if="expandedItem === index">
            <p v-if="item.description">
              <strong>Description:</strong>
              <br />
              <span v-html="item.description"></span>
            </p>
            <p v-if="item.competences">
              <strong>Compétences:</strong>
              <br />
              <span v-html="item.competences"></span>
            </p>
          </div>
        </transition>
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
  background-color: #ccc;
}

.event {
  position: relative;
  width: 50%;
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: left;
  z-index: 1;
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
  color: #777;
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
