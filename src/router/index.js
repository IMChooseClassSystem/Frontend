import { createRouter, createWebHistory } from "vue-router";

import Layout from "/src/layout/layout.vue";

import home from "/src/views/pages/home.vue";
import login from "/src/views/pages/login.vue";
import index from "/src/views/pages/index.vue";
import { useUserStore } from "../stores/user";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      redirect: "",
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
      path: "",
      name: "home",
      component: home,
    },
  ],
});

router.beforeResolve((to) => {
  const userStore = useUserStore();
  if (to.name == "index" && userStore.token == "") {
    return { name: "login" };
  } else {
    return true;
  }
});
export default router;
