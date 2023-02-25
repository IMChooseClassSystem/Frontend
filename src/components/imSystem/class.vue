<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex">
        <h3 class="text-center flex-grow-1 p-2 my-auto">{{ msg }}</h3>
        <button
          type="button"
          class="btn btn-success col-auto p-2 btn-sm"
          @click="submitClass()"
          v-show="!userStore.adminShow"
        >
          選擇課程
        </button>
      </div>
      <hr />
      <MDBTable striped sm class="text-center">
        <thead>
          <tr>
            <th v-show="!userStore.adminShow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-square-fill green"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
                ></path>
              </svg>
            </th>
            <th v-show="userStore.adminShow">#</th>
            <th>修別</th>
            <th>系所</th>
            <th>學制</th>
            <th>年級</th>
            <th>課程名稱</th>
            <th>學年/學期</th>
            <th>學分</th>
            <th>時數(上課/實習)</th>
            <th v-show="userStore.adminShow">教師列表</th>
            <th v-show="userStore.adminShow">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, key) in classStore.classList.slice(
              pageStart,
              pageStart + offset
            )"
            :key="key"
          >
            <td v-show="userStore.adminShow">{{ pageStart + key + 1 }}</td>
            <td v-show="!userStore.adminShow">
              <input
                class="form-check-input"
                type="checkbox"
                :value="item"
                v-model="chosedClass"
              />
            </td>
            <td>{{ item.course }}</td>
            <td>{{ item.outkind }}</td>
            <td>{{ item.kind }}</td>
            <td>{{ item.getyear }}</td>
            <td>{{ item.curriculum }}</td>
            <td>{{ item.kindyear }}</td>
            <td>{{ item.creditUP }}/{{ item.creditDN }}</td>
            <td>{{ item.hourUP }}/{{ item.hourTUP }}</td>
            <td v-show="userStore.adminShow"></td>
            <td v-show="userStore.adminShow">
              <button type="button" class="btn btn-outline-danger btn-sm">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </MDBTable>
    </div>
    <paginate
      v-model="page"
      :page-count="classStore.totalPages"
      :page-range="10"
      :click-handler="setPage(page)"
      :prev-text="'&laquo;'"
      :next-text="'&raquo;'"
      class="mx-auto"
    >
    </paginate>
  </div>
</template>
<script setup>
import { MDBTable } from "mdb-vue-ui-kit";
import { useClassStore } from "../../stores/class";
import { useUserStore } from "../../stores/user";
import { useVolunteerStore } from "../../stores/Volunteer";
import axios from "axios";
import { computed, ref } from "vue";
import Paginate from "vuejs-paginate-next";
const classStore = useClassStore();
const userStore = useUserStore();
const volunteerStore = useVolunteerStore();
const currentPage = ref(1);
const page = ref(1);
const offset = 25;
const chosedClass = ref([]);

axios
  .post("/classQuery")
  .then((data) => {
    classStore.classList = data.data;
  })
  .catch(function (error) {});

function setPage(idx) {
  currentPage.value = idx;
}

const pageStart = computed(() => {
  return (currentPage.value - 1) * offset;
});
function submitClass() {
  for (var i = 0; i < chosedClass.value.length; i++) {
    if (!volunteerStore.volunteerList.includes(chosedClass.value[i])) {
      volunteerStore.volunteerList.push(chosedClass.value[i]);
    }
  }
  chosedClass.value = [];
}
</script>
<script>
export default {
  name: "classTable",
  data: () => {
    return {};
  },

  methods: {},
  props: ["msg"],
};
</script>
<style scoped>
/* .buttons {
  margin-top: 35px;
} */
.green {
  color: green;
}
</style>
