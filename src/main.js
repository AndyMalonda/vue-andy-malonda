import "./assets/main.css";
import "./assets/bootstrap.css";
import "./router.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

createApp(App).use(router).mount("#app");
