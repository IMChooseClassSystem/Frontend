<template>
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
          <h1 class="modal-title fs-5" id="changePasswordTitle">更改密碼</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4">
          <MDBInput
            label="請輸入舊密碼"
            v-model="userStore.oldPassword"
            class="mb-4"
            @keydown.enter="userStore.changePassword()"
          />
          <MDBInput
            label="設定您的新密碼"
            v-model="userStore.newPassword"
            class="mb-4"
            @keydown.enter="userStore.changePassword()"
          />
          <MDBInput
            label="再次輸入新密碼"
            v-model="userStore.confirmNewPassword"
            class="mb-4"
            @keydown.enter="userStore.changePassword()"
          />
          <!----><!----><!----><!----><!----><!----><!----><!----><!---->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="userStore.changePassword()"
          >
            儲存變更
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from "../../stores/user";
import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";
const userStore = useUserStore();
</script>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
