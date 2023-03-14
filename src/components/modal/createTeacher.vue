<template>
  <div
    class="modal fade"
    id="createTeacher"
    tabindex="-1"
    aria-labelledby="teacherAdminTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="teacherAdminTitle">新增教師</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4">
          <MDBInput
            label="教師姓名"
            v-model="teacherName"
            class="mb-4"
            @keydown.enter="addTeacher()"
          />
          <MDBInput
            label="教師帳號"
            v-model="teacherAccount"
            class="mb-4"
            @keydown.enter="addTeacher()"
          />
          <MDBInput
            label="教師密碼"
            v-model="teacherPassword"
            @keydown.enter="addTeacher()"
          />

          <select
            class="form-select mt-4"
            v-model="permission"
            v-show="false"
            @keydown.enter="addTeacher()"
          >
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
  name: "createTeacher",
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
        .post("http://163.17.135.4:8000/api/teacher/register", {
          account: this.teacherAccount,
          password: this.teacherPassword,
          name: this.teacherName,
          permission: this.permission,
        })
        .then((data) => {
          alert(data.data.message + "!");
          this.$refs.Close.click();
          this.teacherAccount = "";
          this.teacherName = "";
          this.teacherPassword = "";
          this.permission = "none";
        })
        .catch((error) => {
          console.log(error.response);
          alert(error.response.data.message);
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
