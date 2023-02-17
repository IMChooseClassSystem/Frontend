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
        <!-- <div class="dropdown">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow nav-link"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            USER
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a class="dropdown-item" href="#">更改密碼</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">登出</a>
            </li>
          </ul>
        </div> -->
        <MDBBtn class="mx-3" size="sm" color="primary"
          >新增/查詢教師密碼</MDBBtn
        >
        <MDBDropdown v-model="dropdown">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown = !dropdown"
            >User</MDBDropdownToggle
          >
          <MDBDropdownMenu>
            <MDBDropdownItem href="#changePassword" data-bs-toggle="modal"
              >更改密碼</MDBDropdownItem
            >
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

const dropdown = ref(false);
</script>
<script>
import changePassword from "../components/modal/changePassword.vue";
export default {
  components: {
    changePassword,
  },
};
</script>
