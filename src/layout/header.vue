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
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            匯入檔案
          </button>
          <ul class="dropdown-menu">
            <li>
              <button
                class="dropdown-item"
                type="button"
                @click="$refs.file.click()"
              >
                課程資料
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">最終授課資料</button>
            </li>
          </ul>
        </div>
        <input
          ref="file"
          type="file"
          class="d-none"
          v-on:change="handleFileUpload()"
        />
        <MDBBtn
          class="mx-3"
          size="sm"
          color="primary"
          v-show="userStore.permission == 0"
          href="#teacherAdmin"
          data-bs-toggle="modal"
          >新增/查詢教師密碼
        </MDBBtn>
        <teacherAdmin></teacherAdmin>
        <MDBDropdown v-model="dropdown">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown = !dropdown"
            >{{ userStore.username }}
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#changePassword" data-bs-toggle="modal"
              >更改密碼
            </MDBDropdownItem>
            <MDBDropdownItem :to="{ name: 'home' }">登出</MDBDropdownItem>
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
const userStore = useUserStore();
const dropdown = ref(false);
const dropdown1 = ref(false);
</script>
<script>
import changePassword from "../components/modal/changePassword.vue";
import teacherAdmin from "../components/modal/teacher_admin.vue";
export default {
  components: {
    changePassword,
    teacherAdmin,
  },
  data: () => {
    return { modalShow: true, file: "" };
  },
  methods: {
    handleFileUpload: function () {
      this.file = this.$refs.file.files[0];
      console.log(this.$refs.file.files[0]);
      const form = new FormData();
      form.append("file", this.file);
      this.$http
        .post("/classImport", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {
          alert(data.data[0].msg + "!");
        })
        .catch(function (error) {
          const error_message = JSON.parse(error.response.data);
          for (const [, value] of Object.entries(error_message)) {
            alert(value);
          }
        });
    },
  },
};
</script>
