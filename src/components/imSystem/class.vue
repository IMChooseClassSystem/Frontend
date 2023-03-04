<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex">
        <h3 class="text-center flex-grow-1 p-2 my-auto">{{ msg }}</h3>
        <button
          type="button"
          class="btn btn-success col-auto p-2 btn-sm"
          @click="volunteerStore.addVolunteer()"
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
            <th
              class="click text-primary"
              @click="classStore.changeType('course_id')"
            >
              修別
              <span
                class="icon"
                :class="{ inverse: classStore.isReverse }"
                v-if="classStore.sortType == 'course_id'"
              >
                <i class="fas fa-angle-up text-success"></i>
              </span>
            </th>
            <th>系所</th>
            <th
              class="click text-primary"
              @click="classStore.changeType('kind')"
            >
              學制<span
                class="icon"
                :class="{ inverse: classStore.isReverse }"
                v-if="classStore.sortType == 'kind'"
              >
                <i class="fas fa-angle-up text-success"></i>
              </span>
            </th>
            <th
              class="click text-primary"
              @click="classStore.changeType('getyear')"
            >
              班級<span
                class="icon"
                :class="{ inverse: classStore.isReverse }"
                v-if="classStore.sortType == 'getyear'"
              >
                <i class="fas fa-angle-up text-success"></i>
              </span>
            </th>
            <th>課程名稱</th>
            <th
              class="click text-primary"
              @click="classStore.changeType('kind_year_id')"
            >
              學年/學期<span
                class="icon"
                :class="{ inverse: classStore.isReverse }"
                v-if="classStore.sortType == 'kind_year_id'"
              >
                <i class="fas fa-angle-up text-success"></i>
              </span>
            </th>
            <th>學分</th>
            <th>時數<br />(上課/實習)</th>
            <th v-show="userStore.adminShow">教師列表</th>
            <th v-show="userStore.adminShow">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, key) in classStore.courseData.slice(
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
                v-model="volunteerStore.chosedClass"
              />
            </td>
            <td>{{ item.course }}</td>
            <td>{{ item.outkind }}</td>
            <td>{{ item.kind_name }}</td>
            <td>{{ item.class_name }}</td>
            <td>{{ item.curriculum }}</td>
            <td>{{ item.kind_year }}</td>
            <td>{{ item.credit }}</td>
            <td>{{ item.hour }}</td>
            <td v-show="userStore.adminShow">{{ item.orderlistsequence }}</td>
            <td v-show="userStore.adminShow">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="deleteCourse(item.C_ID, item.curriculum)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </MDBTable>
    </div>
    <paginate
      v-model="classStore.page"
      :page-count="classStore.totalPages"
      :page-range="10"
      :click-handler="setPage(classStore.page)"
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
import { computed, ref } from "vue";
import Paginate from "vuejs-paginate-next";
import { inject } from "vue";
const classStore = useClassStore();
const userStore = useUserStore();
const volunteerStore = useVolunteerStore();
const currentPage = ref(1);

const offset = 25;
const reload = inject("reload");
classStore.getCourse();
function setPage(idx) {
  currentPage.value = idx;
}

const pageStart = computed(() => {
  return (currentPage.value - 1) * offset;
});
function deleteCourse(CID, className) {
  var yes = confirm(`確定刪除 ${className} 此課程？`);

  if (yes) {
    classStore.deleteCourse(CID);
    reload;
  } else {
    alert(`取消刪除 ${className} 此課程`);
  }
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
.table th.click {
  cursor: pointer;
}

.icon {
  display: inline-block;
}
.icon.inverse {
  transform: rotate(180deg);
}
</style>
