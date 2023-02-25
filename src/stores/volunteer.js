import { ref, computed } from "vue";
import { defineStore } from "pinia";

// export const useVolunteerStore = defineStore('volunteer', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
// volunteerList: [
//   { id: 1, name: "Abby", sport: "basket" },
//   { id: 2, name: "Brooke", sport: "foot" },
//   { id: 3, name: "Courtenay", sport: "volley" },
//   { id: 4, name: "David", sport: "rugby" },
// ],
//   return { count, doubleCount, increment }
// })
export const useVolunteerStore = defineStore("volunteerList", {
  state: () => {
    return {
      volunteerList: [],
      index: 0,
      selected: "",
      test: 123,
    };
  },
  actions: {
    saveVolunteerList() {
      // console.log("in");

      // this.volunteerList.forEach((element) => console.log(element.id));
      this.test * 2;
    },
    test(num) {
      console.log(num);
    },
  },
});
