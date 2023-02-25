<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand mt-2 mt-lg-0">
        <img
          src="/imlogo.png"
          alt="IM logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        教師授課意願系統
      </a>
      <div class="d-flex align-items-center">
        <uploadFile></uploadFile>
        <teacherAdmin></teacherAdmin>
        <MDBDropdown v-model="dropdown">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown = !dropdown"
            >{{ userStore.username }}
          </MDBDropdownToggle>
          <MDBDropdownMenu
            ><MDBDropdownItem
              href="#"
              @click="userStore.adminShow = false"
              v-show="(userStore.permission == 0) & userStore.adminShow"
              >切換教師畫面</MDBDropdownItem
            >
            <MDBDropdownItem
              href="#"
              @click="userStore.adminShow = true"
              v-show="(userStore.permission == 0) & !userStore.adminShow"
              >切換管理畫面</MDBDropdownItem
            >
            <MDBDropdownItem href="#changePassword" data-bs-toggle="modal"
              >更改密碼
            </MDBDropdownItem>

            <MDBDropdownItem href="#" @click="logout()">登出</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <changePassword></changePassword>
      </div>
    </div>
  </nav>
</template>
<script setup>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const dropdown = ref(false);
const router = useRouter();
function logout() {
  userStore.$reset();
  router.replace({ path: "home" });
}
</script>
<script>
import changePassword from "../components/modal/changePassword.vue";
import teacherAdmin from "../components/modal/teacher_admin.vue";
import uploadFile from "../components/upload/upload.vue";
export default {
  components: {
    changePassword,
    teacherAdmin,
  },
  data: () => {
    return { modalShow: true, file: "" };
  },
  methods: {},
};
</script>
