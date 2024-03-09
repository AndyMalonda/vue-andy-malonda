<script setup>
import HeaderNavItem from "./HeaderNavItem.vue";
import UserIcon from "./icons/IconUser.vue";
import BriefcaseIcon from "./icons/IconBriefcase.vue";
import ToolsIcon from "./icons/IconTools.vue";
import ChatIcon from "./icons/IconChat.vue";

const navItems = [
  {
    icon: UserIcon,
    heading: "Présentation",
    sectionId: "#aboutMe",
  },
  {
    icon: BriefcaseIcon,
    heading: "Parcours",
    sectionId: "#cursus",
  },
  {
    icon: ToolsIcon,
    heading: "Compétences",
    sectionId: "#skills",
  },
  {
    icon: ChatIcon,
    heading: "Contact",
    sectionId: "#contact",
  },
];
</script>

<template>
  <HeaderNavItem v-for="item in navItems" :key="item.heading" :item="item">
    <template #icon>
      <component :is="item.icon" />
    </template>
    <template #heading>{{ item.heading }}</template>
  </HeaderNavItem>
</template>
