<template>
  <div
    class="modal fade"
    id="teacherAdmin"
    tabindex="-1"
    aria-labelledby="teacherAdminTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="teacherAdminTitle">
            新增/查詢教師密碼
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4">
          <MDBInput label="教師姓名" v-model="teacherName" />
          <div class="row mb-4 mt-2">
            <label class="form-label col my-auto"
              >*欲查詢帳號密碼請輸入此欄後，按下"查詢"</label
            >
            <button type="button" class="btn btn-primary col-auto">查詢</button>
          </div>
          <MDBInput label="教師帳號" v-model="teacherAccount" class="mb-4" />
          <MDBInput label="教師密碼" v-model="teacherPassword" />
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
          <button type="button" class="btn btn-primary" @click="addTeacher()">
            新增
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { MDBInput } from "mdb-vue-ui-kit";
</script>

<script>
export default {
  name: "teacherAdmin",
  data: () => {
    return { modalShow: true };
  },

  methods: {
    addTeacher: function () {
      this.$http
        .post("/teacher/register", {
          account: this.teacherAccount,
          password: this.teacherPassword,
          name: this.teacherName,
          permission: 1,
        })
        .then((data) => {
          if (data.data.message == "User successfully registered") {
            alert("新增成功!");
            this.$refs.Close.click();
          }
        })
        .catch(function (error) {
          const error_message = JSON.parse(error.response.data);
          for (const [, value] of Object.entries(error_message)) {
            alert(value);
          }
        });
    },
  },
  props: [],
};
</script>
