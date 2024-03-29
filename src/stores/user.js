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
      isShow: true,
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      changePasswordClose: ref(null),
    };
  },
  getters: {
    token() {
      return localStorage.getItem("token");
    },
    username() {
      return localStorage.getItem("username");
    },
    teacherID() {
      return localStorage.getItem("teacherID");
    },
    permission() {
      return localStorage.getItem("permission");
    },
    adminShow() {
      if (localStorage.getItem("permission") === "1") {
        return false;
      } else {
        return this.isShow;
      }
    },
  },
  actions: {
    changePassword() {
      axios
        .post(
          "http://163.17.135.4:443/api/teacher/updatePassword",
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
          this.changePasswordClose.click();
        })
        .catch(function (error) {
          console.log(error);
          alert(error.response.data.message);
        });
    },
  },
});
