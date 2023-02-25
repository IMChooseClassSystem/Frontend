import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";

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
    };
  },
  actions: {
    saveVolunteerList() {
      const userStore = useUserStore();
      const postVolunteerList = {};
      const CIDArray = [];
      const sequenceArray = [];
      this.volunteerList.forEach((element, index) => {
        CIDArray.push(element.C_ID);
        sequenceArray.push(index);
      });
      postVolunteerList.teacher_id = userStore.teacherID;
      postVolunteerList.C_ID = CIDArray;
      postVolunteerList.sequence = sequenceArray;
    },
  },
});
