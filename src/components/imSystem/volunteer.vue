<template>
  <div class="card">
    <div class="card-body">
      <h3 class="text-center my-3">{{ msg }}</h3>
      <hr />
      <div class="row">
        <MDBTable striped hover sm class="col text-center">
          <thead>
            <tr>
              <th scope="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-trash3-fill red"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                  ></path>
                </svg>
              </th>
              <th scope="col">志願序</th>
              <th scope="col">修別</th>
              <th scope="col">系所</th>
              <th scope="col">學制</th>
              <th scope="col">年級</th>
              <th scope="col">課程名稱</th>
              <th scope="col">學年/學期</th>
              <th scope="col">學分</th>
              <th scope="col">時數(上課/實習)</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <draggable
            v-model="volunteerStore.volunteerList"
            tag="tbody"
            item-key="id"
          >
            <template #item="{ element, index }">
              <tr>
                <td>
                  <MDBBtn
                    size="sm"
                    color="link"
                    @click="deleteVolunteer(index)"
                  >
                    <img src="../../assets/close.png" />
                  </MDBBtn>
                </td>
                <td scope="row">{{ index + 1 }}</td>
                <td>{{ element.course }}</td>
                <td>{{ element.outkind }}</td>
                <td>{{ element.kind }}</td>
                <td>{{ element.getyear }}</td>
                <td>{{ element.curriculum }}</td>
                <td>{{ element.kindyear }}</td>
                <td>{{ element.creditUP }}/{{ element.creditDN }}</td>
                <td>{{ element.hourUP }}/{{ element.hourTUP }}</td>
                <td>
                  <MDBBtn
                    size="sm"
                    color="link"
                    :ripple="{ color: 'dark' }"
                    :disabled="index == 0"
                    @click="move(index, index - 1)"
                  >
                    <MDBIcon icon="arrow-up"></MDBIcon>
                  </MDBBtn>
                  <MDBBtn
                    size="sm"
                    color="link"
                    :ripple="{ color: 'dark' }"
                    :disabled="index == volunteerStore.volunteerList.length - 1"
                    @click="move(index, index + 1)"
                  >
                    <MDBIcon icon="arrow-down"></MDBIcon>
                  </MDBBtn>
                </td>
              </tr>
            </template>
          </draggable>
        </MDBTable>

        <div class="row">
          <p class="text-center">123</p>
        </div>
        <hr class="opacity-25" />
        <div class="row mb-2">
          <p class="col-auto my-auto ms-4">
            是否於外系授課 <br />請寫下外系課程
          </p>
          <textarea
            class="form-control col mx-4"
            id="otherClasses"
            rows="3"
          ></textarea>
        </div>
        <hr />
        <div class="d-flex">
          <p class="flex-grow-1 mx-4">是否要超鐘點</p>
          <div class="mx-4">
            <input
              class="form-check-input"
              type="radio"
              id="overclassY"
              value="1"
              name="overClassRadio"
              checked=""
            />
            <label class="form-check-label me-4" for="flexRadioDefault1">
              是
            </label>

            <input
              class="form-check-input"
              type="radio"
              value="0"
              id="overclassN"
              name="overClassRadio"
              checked="checked"
            />
            <label class="form-check-label" for="flexRadioDefault2"> 否 </label>
          </div>
        </div>

        <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
      </div>
      <div class="row">
        <button
          type="button"
          class="btn btn-primary mx-auto col-auto"
          @click="test"
        >
          儲存
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.active {
  background-color: #faecd1;
}
.table.table-hover tbody tr:hover {
  background-color: #ffecb3;
}
.red {
  color: red;
}
</style>

<script setup>
import { MDBTable, MDBIcon, MDBBtn } from "mdb-vue-ui-kit";
import { useVolunteerStore } from "../../stores/volunteer";
const volunteerStore = useVolunteerStore();
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};
function move(from, to) {
  volunteerStore.volunteerList.move(from, to);
}
function deleteVolunteer(index) {
  volunteerStore.volunteerList.splice(index, 1);
}
const test = () => {
  volunteerStore.test(12);
};
</script>
<script>
import draggable from "vuedraggable";
import moveUpDown from "./moveUpDown.vue";
export default {
  name: "volunteer",
  display: "Table",
  order: 8,
  components: {
    draggable,
  },
  props: ["msg"],
  data() {
    return {
      dragging: false,
    };
  },
  methods: {
    // selected: function (index) {
    //   this.activeIndex = index;
    // },
  },
};
</script>
