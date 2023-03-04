<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <RouterView v-if="isRouterAlive" />
</template>

<style scoped>
.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
<script>
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  data: () => {
    return { isRouterAlive: true };
  },
  methods: {
    reload() {
      console.log("reload occure");
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
