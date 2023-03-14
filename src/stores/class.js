import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from "./user";
export const useClassStore = defineStore("classList", {
  state: () => {
    return {
      courseList: [],
      classQueryList: [],
      kindList: [],
      classList: [],
      sortType: "",
      isReverse: false,
      kind: -1,
      year: -1,
      loading: false,
      page: 1,
    };
  },
  getters: {
    totalPages: (state) => {
      return Math.ceil(state.courseList.length / 25);
    },
    courseData: (state) => {
      return state.courseList.sort(function (a, b) {
        if (state.isReverse) return b[state.sortType] - a[state.sortType];
        else return a[state.sortType] - b[state.sortType];
      });
    },
  },
  actions: {
    async getCourse() {
      const userStore = useUserStore();
      await axios
        .post("http://163.17.135.4:8000/api/classQuery", {
          permission: userStore.permission,
          kind: this.kind,
          getyear: this.year,
        })
        .then((data) => {
          this.courseList = data.data;
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    },
    async getClassQuery() {
      axios
        .post("http://163.17.135.4:8000/api/classListQuery")
        .then((data) => {
          this.classQueryList = data.data;
          this.kindList = data.data[0].content;
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    },
    setClass() {
      this.classList = [];
      this.year = -1;
      this.classQueryList[1].content.forEach((element) => {
        if (element.kind_ID == this.kind) {
          element.class_id.forEach((item, key) => {
            this.classList.push({
              classID: item,
              className: element.class_name[key],
            });
          });
        }
      });
      this.getCourse();
    },

    changeType(type) {
      if (this.sortType == type) {
        this.isReverse = !this.isReverse;
      } else {
        this.isReverse = false;
      }
      this.sortType = type;
    },
    deleteCourse(CID) {
      axios
        .delete(`http://163.17.135.4:8000/api/deleteClass?C_ID=${CID}`)
        .then((data) => {
          alert(data.data.message + "!");
          this.getCourse();
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    },
    handleClassFileUpload(file) {
      this.loading = true;
      const form = new FormData();
      form.append("file", file);
      axios
        .post("http://163.17.135.4:8000/api/classImport", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {
          this.loading = false;
          alert(data.data.message + "!");
          this.getCourse();
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
          alert(error.response.data.message);
        });
    },
    handleFinalFileUpload(file) {
      this.loading = true;
      const form = new FormData();
      form.append("file", file);
      axios
        .post("http://163.17.135.4:8000/api/finalImport", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {
          this.loading = false;
          alert(data.data.message + "!");
          this.getCourse();
        })
        .catch((error) => {
          this.loading = false;
          console.log(error.response.data.message);
          alert(error.response.data.message);
        });
    },
  },
});
