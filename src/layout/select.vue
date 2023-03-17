<template>
  <div class="card">
    <div class="card-body">
      <div class="row g-3 my-auto">
        <div class="col-md-3 mx-auto">
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
        <div class="col-md-3 mx-auto">
          <label for="search" class="form-label">課程</label>
          <MDBInput
            v-model="classStore.search"
            inputGroup
            :formOutline="false"
            wrapperClass="mb-3"
            placeholder="輸入課程名稱"
            aria-label="輸入課程名稱"
            aria-describedby="button-addon2"
            id="search"
            @keydown.enter="classStore.searchClass()"
          >
            <MDBBtn color="primary" @click="classStore.searchClass()">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInput>
        </div>
        <div class="col-md-1 my-auto">
          <MDBBtn color="primary" class="mx-4" size="lg" @click="reset()"
            >重設 <MDBIcon icon="redo"
          /></MDBBtn>

          <!-- <i class="fas fa-redo"></i> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useClassStore } from "../stores/class";
import { MDBInput, MDBBtn, MDBIcon } from "mdb-vue-ui-kit";
import { ref } from "vue";

const classStore = useClassStore();
classStore.getClassQuery();
function reset() {
  classStore.kind = -1;
  classStore.year = -1;
  classStore.page = 1;
  classStore.search = "";
  classStore.getCourse();
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
