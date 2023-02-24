<template>
  <div class="card">
    <div class="card-body">
      <h3 class="text-center">{{ msg }}</h3>
      <hr />
      <MDBTable striped sm class="text-center">
        <thead>
          <tr>
            <th>
              <i class="fas fa-check-square text-success"></i>
            </th>
            <th>修別</th>
            <th>系所</th>
            <th>學制</th>
            <th>年級</th>
            <th>課程名稱</th>
            <th>學年/學期</th>
            <th>學分</th>
            <th>時數(上課/實習)</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, key) in classStore.classList.slice(
              pageStart,
              pageStart + offset
            )"
          >
            <td></td>
            <td>{{ item.course }}</td>
            <td>{{ item.outkind }}</td>
            <td>{{ item.kind }}</td>
            <td>{{ item.getyear }}</td>
            <td>{{ item.curriculum }}</td>
            <td>{{ item.kindyear }}</td>
            <td>{{ item.creditUP }}/{{ item.creditDN }}</td>
            <td>{{ item.hourUP }}/{{ item.hourTUP }}</td>
          </tr>
        </tbody>
      </MDBTable>
    </div>
    <paginate
      v-model="page"
      :page-count="classStore.totalPages"
      :page-range="5"
      :click-handler="setPage(page)"
      :prev-text="'&laquo;'"
      :next-text="'&raquo;'"
      :container-class="pagination"
      class="mx-auto"
    >
    </paginate>
  </div>
</template>
<script setup>
import { MDBTable } from "mdb-vue-ui-kit";
import { useClassStore } from "../../stores/class";
import axios from "axios";
import { computed, ref } from "vue";
import Paginate from "vuejs-paginate-next";
const classStore = useClassStore();
const currentPage = ref(1);
const page = ref(1);
const offset = 25;
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
</script>
<script>
export default {
  name: "classTable",
  data: () => {
    return {};
  },

  method: {},
  props: ["msg"],
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
</style>
