<template>
  <div class="card">
    <div class="card-body">
      <h3 class="text-center">{{ msg }}</h3>
      <hr />
      <div class="row">
        <MDBTable striped class="col">
          <thead>
            <tr>
              <th scope="col">志願序</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Sport</th>
            </tr>
          </thead>
          <draggable v-model="volunteerStore.myList" tag="tbody" item-key="id">
            <template #item="{ element, index }">
              <tr
                @click="
                  (volunteerStore.selected = element.id),
                    (volunteerStore.index = index)
                "
                :class="[{ active: volunteerStore.selected === element.id }]"
              >
                <td scope="row">{{ index + 1 }}</td>
                <td>{{ element.id }}</td>
                <td>{{ element.name }}</td>
                <td>{{ element.sport }}</td>
              </tr>
            </template>
          </draggable>
        </MDBTable>
        <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
        <div class="col-1 my-auto">
          <moveUpDown></moveUpDown>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.active {
  background-color: #faecd1;
}
.col-1 {
  width: 6% !important;
}
</style>
<script setup>
import { MDBTable, MDBIcon, MDBBtn } from "mdb-vue-ui-kit";
import { useVolunteerStore } from "../../stores/volunteer";
const volunteerStore = useVolunteerStore();
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
