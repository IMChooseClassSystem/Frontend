import { createRouter, createWebHistory } from "vue-router";

import Layout from "/src/layout/layout.vue";

import home from "/src/views/home.vue";
import login from "/src/views/pages/login.vue";
import index from "/src/views/pages/index.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "/index",
          name: "index",
          component: index,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/home",
      name: "home",
      component: home,
    },
  ],
});

export default router;
