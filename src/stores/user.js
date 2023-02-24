import { ref, computed } from "vue";
import { defineStore } from "pinia";

// export const useVolunteerStore = defineStore('volunteer', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "",
      username: "",
      permission: 0,
    };
  },
});
