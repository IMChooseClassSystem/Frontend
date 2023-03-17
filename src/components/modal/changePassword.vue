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
            @keydown.enter="changePassword()"
          />
          <MDBInput
            label="設定您的新密碼"
            v-model="userStore.newPassword"
            class="mb-4"
            @keydown.enter="changePassword()"
          />
          <MDBInput
            label="再次輸入新密碼"
            v-model="userStore.confirmNewPassword"
            class="mb-4"
            @keydown.enter="changePassword()"
          />
          <!----><!----><!----><!----><!----><!----><!----><!----><!---->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            ref="Close"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="changePassword()"
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
import { ref } from "vue";
import axios from "axios";
const userStore = useUserStore();
const Close = ref(null);
function changePassword() {
  axios
    .post(
      "http://163.17.135.4:8000/api/teacher/updatePassword",
      {
        password: userStore.oldPassword,
        new_password: userStore.newPassword,
        confirm_new_password: userStore.confirmNewPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
      }
    )
    .then((data) => {
      alert(data.data.message + "!");
      userStore.oldPassword = "";
      userStore.newPassword = "";
      userStore.confirmNewPassword = "";
      Close.value.click();
    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.data.message);
    });
}
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
