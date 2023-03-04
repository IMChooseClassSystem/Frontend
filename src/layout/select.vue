<template>
  <div class="card">
    <div class="card-body">
      <div class="row g-3">
        <div class="col-md-3">
          <label for="inputState" class="form-label">學制</label>
          <select
            id="inputState"
            class="form-select"
            v-model="classStore.kind"
            @change="
              classStore.setClass();
              classStore.page = 1;
            "
          >
            <option value="-1" selected>--請選擇--</option>
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
          <select
            id="inputState"
            class="form-select"
            v-model="classStore.year"
            @change="
              classStore.getCourse();
              classStore.page = 1;
            "
          >
            <option value="-1" selected>--請選擇--</option>
            <option
              v-for="item in classStore.classList"
              :value="item.classID"
              :key="item.classID"
            >
              {{ item.className }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useClassStore } from "../stores/class";

const classStore = useClassStore();
classStore.getClassQuery();
</script>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
