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

export default {
  components: {
    SkillItem,
  },
  setup() {
    const skills = [
      {
        name: "HTML",
        icon: HTMLIcon,
        iconProps: { icon: "html5", size: "3rem" },
        description: "Maîtrise de HTML5 et des balises sémantiques.",
      },
      {
        name: "CSS",
        icon: CSSIcon,
        iconProps: { icon: "css3", size: "3rem" },
        description:
          "Maîtrise de CSS3, des grilles et des flexbox, ainsi que des préprocesseurs comme Sass.",
      },
      {
        name: "Bootstrap",
        icon: BootstrapIcon,
        iconProps: { icon: "bootstrap", size: "3rem" },
        description:
          "Maîtrise du framework Bootstrap, de ses composants et de sa grille.",
      },
      {
        name: "JavaScript",
        icon: JSIcon,
        iconProps: { icon: "js", size: "3rem" },
        description:
          "Maîtrise de JavaScript ES6, des promesses, de la programmation orientée objet et des API Web.",
      },
      {
        name: "jQuery",
        icon: JQueryIcon,
        iconProps: { icon: "jquery", size: "3rem" },
        description:
          "Maîtrise de jQuery, de ses sélecteurs, de ses animations et de ses requêtes AJAX.",
      },
      {
        name: ".NET",
        icon: DotnetIcon,
        iconProps: { icon: "dotnet", size: "3rem" },
        description:
          "Maîtrise du framework .NET, de C# et de la programmation orientée objet.",
      },
      {
        name: "C#",
        icon: CSharpIcon,
        iconProps: { icon: "csharp", size: "3rem" },
        description:
          "Maîtrise du langage C#, de la programmation orientée objet et des API .NET.",
      },
      {
        name: "MySQL",
        icon: MySQLIcon,
        iconProps: { icon: "mysql", size: "3rem" },
        description:
          "Maîtrise de MySQL, de la création de bases de données et de requêtes SQL.",
      },
      {
        name: "Oracle",
        icon: OracleIcon,
        iconProps: { icon: "oracle", size: "3rem" },
        description:
          "Maîtrise d'Oracle, de la création de bases de données et de requêtes SQL.",
      },
      {
        name: "Git",
        icon: GitIcon,
        iconProps: { icon: "git", size: "3rem" },
        description:
          "Maîtrise de Git, de la gestion de versions, des branches et des conflits.",
      },
      {
        name: "Docker",
        icon: DockerIcon,
        iconProps: { icon: "docker", size: "3rem" },
        description:
          "Maîtrise de Docker, de la création de conteneurs et de la gestion d'images.",
      },
    ];

    return { skills };
  },
};
</script>

<template>
  <div class="skills-grid">
    <SkillItem
      v-for="skill in skills"
      :key="skill.name"
      :name="skill.name"
      :icon="skill.icon"
      :description="skill.description"
    />
  </div>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;
}
</style>
