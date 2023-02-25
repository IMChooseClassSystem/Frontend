<template>
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle btn-sm"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      v-show="userStore.permission == 0"
    >
      匯入檔案
    </button>
    <ul class="dropdown-menu">
      <li>
        <button class="dropdown-item" type="button" @click="$refs.file.click()">
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
</template>
<script>
export default {
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
<script setup>
import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
const userStore = useUserStore();
</script>
