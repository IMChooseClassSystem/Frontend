import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
import axios from "axios";

export const useVolunteerStore = defineStore("volunteerList", {
  state: () => {
    return {
      volunteerList: [],
      index: 0,
      selected: "",
      chosedClass: [],
      volunteerCIDList: [],
      remark: "",
      overClass: 0,
    };
  },
  getters: {
    creditTotal: (state) => {
      let creditUp = 0;
      let creditDown = 0;
      state.volunteerList.forEach((element) => {
        if (element.kind_year_id == 0) {
          creditUp += parseInt(element.credit);
        } else if (element.kind_year_id == 1) {
          creditDown += parseInt(element.credit);
        } else if (element.kind_year_id == 2) {
          creditDown += parseInt(element.credit.substring(0, 1));
          creditUp += parseInt(element.credit.substring(0, 1));
        }
      });
      return `上學期已選 : ${creditUp} 學分，下學期已選 : ${creditDown} 學分`;
    },
  },
  actions: {
    async saveVolunteerList() {
      const userStore = useUserStore();
      const postVolunteerList = {};
      const CIDArray = [];
      const sequenceArray = [];
      this.volunteerList.forEach((element, index) => {
        CIDArray.push(element.C_ID);
        sequenceArray.push(index + 1);
      });
      postVolunteerList.teacher_id = userStore.teacherID;
      postVolunteerList.C_ID = CIDArray;
      postVolunteerList.sequence = sequenceArray;
      await axios
        .post("/addSequence", postVolunteerList)
        .then((data) => {
          if (data.data.message == "Sequence added successfully") {
          }
        })
        .catch(function (error) {
          const error_message = JSON.parse(error.response.data);
          for (const [, value] of Object.entries(error_message)) {
            alert(value);
          }
        });
      await axios
        .post("/addRemark", {
          teacher_ID: userStore.teacherID,
          remark: this.remark,
          over_class: this.overClass,
        })
        .then((data) => {
          if (data.data.message == "Remark successfully added") {
            alert("儲存成功!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getTeacherSequence() {
      const userStore = useUserStore();
      await axios
        .post("/sequenceQuery", { teacher_id: userStore.teacherID })
        .then((data) => {
          this.volunteerList = data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.volunteerList.forEach((element) => {
        this.volunteerCIDList.push(element.C_ID);
      });
      await axios
        .post("/remarkQuery", { teacher_ID: userStore.teacherID })
        .then((data) => {
          if (data.data != "") {
            this.remark = data.data[0].remark;
            this.overClass = data.data[0].over_class;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addVolunteer() {
      this.chosedClass.forEach((element) => {
        if (!this.volunteerCIDList.includes(element.C_ID)) {
          this.volunteerList.push(element);
          this.volunteerCIDList.push(element.C_ID);
        }
      });
      this.chosedClass = [];
    },
  },
});
