<template>
  <div class="card">
    <div class="card-body">
      <div class="row g-3">
        <div class="col-md-3">
          <label for="inputState" class="form-label">學制</label>
          <select id="inputState" class="form-select" v-model="kindID">
            <option value="none" selected>--請選擇--</option>
            <option
              v-for="(kind, key) in classStore.kindList"
              :value="kind.kind_ID"
              :key="key"
            >
              {{ kind.kind_name }}
            </option>
          </select>
        </div>
        <div class="col-md-3 mx-auto">
          <label for="inputState" class="form-label">班級</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useClassStore } from "../stores/class";
import axios from "axios";
const classStore = useClassStore();
axios
  .post("/kindQuery")
  .then((data) => {
    classStore.kindList = data.data;
  })
  .catch(function (error) {
    const error_message = JSON.parse(error.response.data);
    for (const [, value] of Object.entries(error_message)) {
      alert(value);
    }
  });
</script>
<script>
export default {
  data() {
    return { kindID: "" };
  },
  methods: {},
  created() {
    this.kindID = "none";
  },
};
</script>
