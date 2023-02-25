import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useClassStore = defineStore("classList", {
  state: () => {
    return {
      classList: [],
      kindList: [],
    };
  },
  getters: {
    totalPages: (state) => {
      return Math.ceil(state.classList.length / 25);
    },
  },
});
