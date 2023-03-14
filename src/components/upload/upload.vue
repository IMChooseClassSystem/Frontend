<template>
  <MDBDropdown
    v-model="dropdown1"
    v-show="userStore.permission == 0"
    class="mx-2"
  >
    <MDBDropdownToggle size="sm" @click="dropdown1 = !dropdown1">
      <MDBSpinner v-show="classStore.loading" tag="span" size="sm" />
      匯入檔案
    </MDBDropdownToggle>
    <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
      <MDBDropdownItem href="#" @click="$refs.classfile.click()">
        課程資料
      </MDBDropdownItem>
      <MDBDropdownItem href="#" @click="$refs.finalfile.click()"
        >最終授課資料</MDBDropdownItem
      >
    </MDBDropdownMenu>
  </MDBDropdown>

  <input
    ref="classfile"
    type="file"
    class="d-none"
    v-on:change="
      classStore.handleClassFileUpload($refs.classfile.files[0]);
      $refs.classfile.value = null;
    "
  />
  <input
    ref="finalfile"
    type="file"
    class="d-none"
    v-on:change="
      classStore.handleFinalFileUpload($refs.finalfile.files[0]);
      $refs.finalfile.value = null;
    "
  />
</template>

<script>
import { MDBSpinner } from "mdb-vue-ui-kit";
export default {
  inject: ["reload"],
  data: () => {
    return { modalShow: true, file: "", loading: false };
  },
  components: {
    MDBSpinner,
  },
  methods: {},
};
</script>
<script setup>
import {
  MDBBtn,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
import { useClassStore } from "../../stores/class";
const userStore = useUserStore();
const classStore = useClassStore();
const dropdown1 = ref(false);
</script>
