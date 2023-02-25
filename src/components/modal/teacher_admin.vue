<template>
  <MDBBtn
    class="mx-3"
    size="sm"
    color="primary"
    v-show="userStore.permission == 0"
    href="#teacherAdmin"
    data-bs-toggle="modal"
    >新增/查詢教師密碼
  </MDBBtn>
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

          <select class="form-select mt-4" v-model="permission">
            <option value="none" selected disabled>系統權限</option>
            <option value="1">教師</option>
            <option value="0">系統管理者</option>
          </select>
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

<script>
export default {
  name: "teacherAdmin",
  data: () => {
    return {
      modalShow: true,
      teacherAccount: "",
      teacherPassword: "",
      teacherName: "",
      permission: "",
    };
  },

  methods: {
    addTeacher: function () {
      if (this.permission == "none") {
        this.permission = 1;
      }
      this.$http
        .post("/teacher/register", {
          account: this.teacherAccount,
          password: this.teacherPassword,
          name: this.teacherName,
          permission: this.permission,
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
  created() {
    this.permission = "none";
  },
  props: [],
};
</script>
<script setup>
import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";
import { ref } from "vue";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const dropdown = ref(false);
</script>
