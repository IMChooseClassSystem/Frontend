import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

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
      teacherID: 0,
      adminShow: true,
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };
  },
  actions: {
    changePassword() {
      axios
        .post(
          "/teacher/updatePassword",
          {
            password: this.oldPassword,
            new_password: this.newPassword,
            confirm_new_password: this.confirmNewPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((data) => {
          alert(data.data.message + "!");
          this.oldPassword = "";
          this.newPassword = "";
          this.confirmNewPassword = "";
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    },
  },
});
