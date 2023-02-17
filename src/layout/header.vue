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
        <div
          class="modal fade"
          id="changePassword"
          tabindex="-1"
          aria-labelledby="changePasswordTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="changePasswordTitle">
                  更改密碼
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body p-4">
                <form action="" class="mb-4">
                  <div class="form-outline mb-4" style="">
                    <input
                      class="form-control"
                      type="password"
                      id="MDBInput-102844"
                    /><label class="form-label" for="MDBInput-102844"
                      >請輸入舊密碼</label
                    ><!----><!----><!----><!---->
                    <div class="form-notch">
                      <div class="form-notch-leading" style="width: 9px"></div>
                      <div class="form-notch-middle" style="width: 92px"></div>
                      <div class="form-notch-trailing"></div>
                    </div>
                  </div>
                  <!----><!----><!----><!----><!----><!----><!----><!----><!---->
                  <div class="form-outline mb-4" style="">
                    <input
                      class="form-control"
                      type="password"
                      id="MDBInput-298797"
                    /><label class="form-label" for="MDBInput-298797"
                      >設定您的新密碼</label
                    ><!----><!----><!----><!---->
                    <div class="form-notch">
                      <div class="form-notch-leading" style="width: 9px"></div>
                      <div class="form-notch-middle" style="width: 112px"></div>
                      <div class="form-notch-trailing"></div>
                    </div>
                  </div>
                  <div class="form-outline mb-4" style="">
                    <input
                      class="form-control"
                      type="password"
                      id="MDBInput-298797"
                    /><label class="form-label" for="MDBInput-298797"
                      >再次輸入新密碼</label
                    ><!----><!----><!----><!---->
                    <div class="form-notch">
                      <div class="form-notch-leading" style="width: 9px"></div>
                      <div class="form-notch-middle" style="width: 112px"></div>
                      <div class="form-notch-trailing"></div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  關閉
                </button>
                <button type="button" class="btn btn-primary">儲存變更</button>
              </div>
            </div>
          </div>
        </div>
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
