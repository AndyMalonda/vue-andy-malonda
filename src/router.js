import { createRouter, createWebHistory } from "vue-router";
import HeaderNavItem from "./components/HeaderNavItem.vue";
import BackToTop from "./components/helpers/BackToTop.vue";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/",
    component: HeaderNavItem,
  },
  {
    path: "/back-to-top",
    component: BackToTop,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
