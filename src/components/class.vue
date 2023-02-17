<template>
  <div class="card">
    <div class="card-body">
      <h3 class="text-center">{{ msg }}</h3>
      <hr />
      <MDBTable striped>
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
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr></tbody
      ></MDBTable>
    </div>
  </div>
</template>
<script setup>
import { MDBTable } from "mdb-vue-ui-kit";
</script>
<script>
export default {
  name: "classTable",
  data: () => {
    return {};
  },
  props: ["msg"],
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
</style>
