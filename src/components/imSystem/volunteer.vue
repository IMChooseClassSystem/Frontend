<template>
  <div class="card">
    <div class="card-body">
      <h3 class="text-center">{{ msg }}</h3>
      <hr />
      <div class="row">
        <MDBTable striped hover sm class="col">
          <thead>
            <tr>
              <th scope="col">志願序</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Sport</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <draggable v-model="volunteerStore.myList" tag="tbody" item-key="id">
            <template #item="{ element, index }">
              <tr>
                <td scope="row">{{ index + 1 }}</td>
                <td>{{ element.id }}</td>
                <td>{{ element.name }}</td>
                <td>{{ element.sport }}</td>
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
                    :disabled="index == volunteerStore.myList.length - 1"
                    @click="move(index, index + 1)"
                  >
                    <MDBIcon icon="arrow-down"></MDBIcon>
                  </MDBBtn>
                </td>
              </tr>
            </template>
          </draggable>
        </MDBTable>
        <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
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
  volunteerStore.myList.move(from, to);
}
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
