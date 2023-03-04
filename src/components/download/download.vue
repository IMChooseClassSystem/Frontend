<template>
  <MDBDropdown
    v-model="dropdown1"
    v-show="userStore.permission == 0"
    class="mx-2"
  >
    <MDBDropdownToggle size="sm" @click="dropdown1 = !dropdown1">
      下載檔案
    </MDBDropdownToggle>
    <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
      <MDBDropdownItem href="#" @click="downloadSequence()">
        志願序
      </MDBDropdownItem>
      <MDBDropdownItem href="#">教師帳號</MDBDropdownItem>
      <MDBDropdownItem href="#">外系授課與超鐘點</MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</template>

<script>
import { MDBSpinner } from "mdb-vue-ui-kit";
export default {
  data: () => {
    return {};
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
import { ref, onMounted } from "vue";
import { useUserStore } from "../../stores/user";
import { useClassStore } from "../../stores/class";
import axios from "axios";
const userStore = useUserStore();
const classStore = useClassStore();
const dropdown1 = ref(false);

function downloadSequence() {
  axios({
    url: "/classExport", // File URL Goes Here
    method: "GET",
    responseType: "blob",
  }).then((res) => {
    var FILE = window.URL.createObjectURL(new Blob([res.data]));
    var docUrl = document.createElement("a");
    docUrl.href = FILE;
    docUrl.setAttribute("download", "志願序.xlsx");
    document.body.appendChild(docUrl);
    docUrl.click();
  });
}
</script>
