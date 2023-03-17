<template>
  <div
    class="modal fade"
    id="deleteTeacher"
    tabindex="-1"
    aria-labelledby="teacherAdminTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="teacherAdminTitle">刪除教師</h1>
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
            @keydown.enter="deleteTeacher()"
          />
          <MDBInput
            label="教師帳號"
            v-model="teacherAccount"
            class="mb-4"
            @keydown.enter="deleteTeacher()"
          />
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
            @click="deleteTeacher()"
          >
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deleteTeacher",
  data: () => {
    return {
      modalShow: true,
    };
  },
  methods: {},

  props: [],
};
</script>
<script setup>
import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
import axios from "axios";
const userStore = useUserStore();
const teacherName = ref("");
const teacherAccount = ref("");
const Close = ref(null);
function deleteTeacher() {
  var yes = confirm(`確定刪除 ${teacherName.value} 此教師？`);

  if (yes) {
    axios
      .post(
        "http://163.17.135.4:8000/api/teacher/deleteTeacher",
        {
          account: teacherAccount.value,
          name: teacherName.value,
        },
        {
          headers: {
            Authorization: `Bearer ${userStore.token}`,
          },
        }
      )
      .then((data) => {
        alert(data.data.message + "!");
        Close.value.click();
        teacherAccount.value = "";
        teacherName.value = "";
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  } else {
    alert(`取消刪除 ${teacherName.value} 此教師`);
  }
}
</script>
