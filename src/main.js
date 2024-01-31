import { createApp } from "vue";
import App from "./App.vue";
import "./styles/styles.css";
import router from "./Router.js";

createApp(App).use(router).mount("#app");
