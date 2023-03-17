<template>
  <MDBDropdown
    v-model="dropdown1"
    v-show="userStore.permission == 0"
    class="ms-2 me-4"
  >
    <MDBDropdownToggle size="sm" @click="dropdown1 = !dropdown1">
      系統管理
    </MDBDropdownToggle>
    <MDBDropdownMenu aria-labelledby="dropdownMenuButton"
      ><MDBDropdownItem href="#createTeacher" data-bs-toggle="modal"
        >新增教師</MDBDropdownItem
      >
      <MDBDropdownItem href="#editTeacherPassword" data-bs-toggle="modal"
        >重設教師密碼
      </MDBDropdownItem>
      <MDBDropdownItem href="#deleteTeacher" data-bs-toggle="modal"
        >刪除教師
      </MDBDropdownItem>
      <MDBDropdownItem href="#" data-bs-toggle="modal" @click="resetOrder()"
        >清除教師志願序
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
  <createTeacher></createTeacher>
  <editTeacherPassword></editTeacherPassword>
  <deleteTeacher></deleteTeacher>
</template>

<script>
import createTeacher from "../modal/createTeacher.vue";
import editTeacherPassword from "../modal/editTeacherPassword.vue";
import deleteTeacher from "../modal/deleteTeacher.vue";
export default {
  inject: ["reload"],
  data: () => {
    return { modalShow: true, file: "", loading: false };
  },
  components: { createTeacher, editTeacherPassword, deleteTeacher },
  methods: {},
};
</script>
<script setup>
import {
  MDBBtn,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
import { useClassStore } from "../../stores/class";
import axios from "axios";
const userStore = useUserStore();
const classStore = useClassStore();
const dropdown1 = ref(false);
function resetOrder() {
  var yes = confirm(`確定清除所有教師志願序？`);

  if (yes) {
    axios
      .delete("http://163.17.135.4:8000/api/teacher/resetOrder", {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
      })
      .then((data) => {
        alert(data.data.message + "!");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
    reload;
  } else {
    alert(`取消清除所有教師志願序!`);
  }
}
</script>
