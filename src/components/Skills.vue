<script>
import SkillItem from "./SkillItem.vue";
import BootstrapIcon from "./icons/IconBootstrap.vue";
import HTMLIcon from "./icons/IconHTML.vue";
import CSSIcon from "./icons/IconCSS.vue";
import JSIcon from "./icons/IconJavascript.vue";
import JQueryIcon from "./icons/IconJQuery.vue";
import DotnetIcon from "./icons/IconDotnet.vue";
import CSharpIcon from "./icons/IconCSharp.vue";
import MySQLIcon from "./icons/IconMySQL.vue";
import OracleIcon from "./icons/IconOracle.vue";
import GitIcon from "./icons/IconGit.vue";
import DockerIcon from "./icons/IconDocker.vue";
import MongoDBIcon from "./icons/IconMongoDB.vue";
import PowerShellIcon from "./icons/IconPowerShell.vue";
import JiraIcon from "./icons/IconJira.vue";
import AgileIcon from "./icons/IconAgile.vue";

export default {
  components: {
    SkillItem,
  },
  setup() {
    const skills = [
      {
        category: "Développement web",
        skills: [
          {
            name: "HTML",
            icon: HTMLIcon,
            iconProps: { icon: "html5", size: "3rem" },
            description:
              "Capable de créer des structures de page web sémantiques avec HTML5.",
          },
          {
            name: "CSS",
            icon: CSSIcon,
            iconProps: { icon: "css3", size: "3rem" },
            description:
              "Expérimenté dans la création de mises en page responsives avec CSS3 et les préprocesseurs comme Sass.",
          },
          {
            name: "Bootstrap",
            icon: BootstrapIcon,
            iconProps: { icon: "bootstrap", size: "3rem" },
            description:
              "Capable de créer rapidement des interfaces utilisateur réactives avec Bootstrap.",
          },
          {
            name: "JavaScript",
            icon: JSIcon,
            iconProps: { icon: "js", size: "3rem" },
            description:
              "Connaissance approfondie de JavaScript ES6, de la programmation orientée objet et des API Web.",
          },
          {
            name: "jQuery",
            icon: JQueryIcon,
            iconProps: { icon: "jquery", size: "3rem" },
            description:
              "Expérimenté dans l'utilisation de jQuery pour manipuler le DOM et effectuer des requêtes AJAX.",
          },
        ],
      },
      {
        category: "Développement back-end",
        skills: [
          {
            name: ".NET",
            icon: DotnetIcon,
            iconProps: { icon: "dotnet", size: "3rem" },
            description:
              "Familiarisé avec le framework .NET et la programmation orientée objet avec C#.",
          },
          {
            name: "C#",
            icon: CSharpIcon,
            iconProps: { icon: "csharp", size: "3rem" },
            description:
              "Expérimenté dans la programmation orientée objet avec C# et les API .NET.",
          },
          {
            name: "MySQL",
            icon: MySQLIcon,
            iconProps: { icon: "mysql", size: "3rem" },
            description:
              "Capable de gérer des bases de données relationnelles avec MySQL.",
          },
          {
            name: "Oracle",
            icon: OracleIcon,
            iconProps: { icon: "oracle", size: "3rem" },
            description:
              "Capable de gérer des bases de données relationnelles avec Oracle.",
          },
          {
            name: "MongoDB",
            icon: MongoDBIcon,
            iconProps: { icon: "mongodb", size: "3rem" },
            description:
              "Expérimenté dans la création et la gestion de bases de données NoSQL avec MongoDB.",
          },
        ],
      },
      {
        category: "Outils et méthodes",
        skills: [
          {
            name: "Git",
            icon: GitIcon,
            iconProps: { icon: "git", size: "3rem" },
            description:
              "Expérimenté dans l'utilisation de Git pour la gestion de versions de code et la résolution de conflits.",
          },
          {
            name: "Docker",
            icon: DockerIcon,
            iconProps: { icon: "docker", size: "3rem" },
            description:
              "Familiarisé avec la création et la gestion de conteneurs Docker.",
          },
          {
            name: "PowerShell",
            icon: PowerShellIcon,
            iconProps: { icon: "powershell", size: "3rem" },
            description:
              "Familiarisé avec l'automatisation de tâches et la gestion de systèmes avec PowerShell.",
          },
          {
            name: "Jira",
            icon: JiraIcon,
            iconProps: { icon: "jira", size: "3rem" },
            description:
              "Expérimenté dans la gestion de projets et de tickets avec Jira.",
          },
          {
            name: "Agile",
            icon: AgileIcon,
            iconProps: { icon: "agile", size: "3rem" },
            description:
              "Familiarisé avec les méthodes agiles de développement logiciel, notamment Scrum et Kanban.",
          },
        ],
      },
    ];

    return { skills };
  },
};
</script>

<template>
  <div class="skills-grid">
    <div v-for="category in skills" :key="category.category">
      <h2>{{ category.category }}</h2>
      <div class="row">
        <SkillItem
          v-for="skill in category.skills"
          :key="skill.name"
          :name="skill.name"
          :icon="skill.icon"
          :iconProps="skill.iconProps"
          :description="skill.description"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
</style>
