<template>
  <div class="card">
    <div class="card-body">
      <h3 class="text-center">{{ msg }}</h3>
      <hr />
      <MDBTable striped>
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
            <tr
              @click="selected = element.id"
              :class="[{ active: selected === element.id }]"
            >
              <td scope="row">{{ index + 1 }}</td>
              <td>{{ element.id }}</td>
              <td>{{ element.name }}</td>
              <td>{{ element.sport }}</td>
              <td>
                <a
                  class="m-1"
                  href="#!"
                  role="button"
                  style="color: rgb(59, 89, 152)"
                  v-show="index != 0"
                  ><i class="fas fa-arrow-up"></i>
                  <!-- <MDBIcon iconStyle="fab" icon="arrow-up" size="lg"></MDBIcon> -->
                </a>
              </td>
              <td>
                <a
                  class="m-1"
                  href="#!"
                  role="button"
                  style="color: rgb(59, 89, 152)"
                  v-show="index != volunteerStore.myList.length - 1"
                  ><i class="fas fa-arrow-down"></i>
                  <!-- <MDBIcon iconStyle="fab" icon="arrow-up" size="lg"></MDBIcon> -->
                </a>
              </td>
            </tr>
          </template>
        </draggable>
      </MDBTable>
      <rawDisplayer class="col-3" :value="list" title="List" />
    </div>
  </div>
</template>
<style>
.active {
  background-color: #faecd1;
}
</style>
<script setup>
import { MDBTable, MDBIcon } from "mdb-vue-ui-kit";
import { useVolunteerStore } from "../../stores/volunteer";
const volunteerStore = useVolunteerStore();
</script>
<script>
import draggable from "vuedraggable";

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
      selected: "",
    };
  },
  methods: {
    // selected: function (index) {
    //   this.activeIndex = index;
    // },
  },
};
</script>
