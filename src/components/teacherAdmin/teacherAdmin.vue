<template>
  <MDBDropdown
    v-model="dropdown1"
    v-show="userStore.permission == 0"
    class="ms-2 me-4"
  >
    <MDBDropdownToggle size="sm" @click="dropdown1 = !dropdown1">
      教師管理
    </MDBDropdownToggle>
    <MDBDropdownMenu aria-labelledby="dropdownMenuButton"
      ><MDBDropdownItem href="#createTeacher" data-bs-toggle="modal"
        >新增教師</MDBDropdownItem
      >
      <MDBDropdownItem href="#editTeacherPassword" data-bs-toggle="modal"
        >重設教師密碼
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
  <createTeacher></createTeacher>
  <editTeacherPassword></editTeacherPassword>
</template>

<script>
import createTeacher from "../modal/createTeacher.vue";
import editTeacherPassword from "../modal/editTeacherPassword.vue";
export default {
  inject: ["reload"],
  data: () => {
    return { modalShow: true, file: "", loading: false };
  },
  components: { createTeacher, editTeacherPassword },
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
const userStore = useUserStore();
const classStore = useClassStore();
const dropdown1 = ref(false);
</script>
