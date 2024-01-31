import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Homepage.vue";
import About from "./pages/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "houses",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
