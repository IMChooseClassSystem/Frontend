<template>
  <div class="row">
    <MDBBtn
      color="primary"
      class="mb-2"
      @click="moveUp(volunteerStore.index, volunteerStore.index - 1)"
    >
      <MDBIcon icon="arrow-up"></MDBIcon>
    </MDBBtn>
    <MDBBtn
      color="primary"
      class="mt-2"
      @click="moveDown(volunteerStore.index, volunteerStore.index + 1)"
    >
      <MDBIcon icon="arrow-down"></MDBIcon>
    </MDBBtn>
  </div>
</template>
<script setup>
import { MDBBtn, MDBIcon } from "mdb-vue-ui-kit";
// import { useVolunteerStore } from "../../stores/volunteer";
const volunteerStore = useVolunteerStore();
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

function moveUp(from, to) {
  if (from != 0) {
    volunteerStore.myList.move(from, to);
    volunteerStore.index = to;
  }
}
function moveDown(from, to) {
  if (from != volunteerStore.myList.length - 1) {
    volunteerStore.myList.move(from, to);
    volunteerStore.index = to;
  }
}
</script>
<style></style>
<script>
export default {
  props: ["selected", ""],
  data() {
    return { myList: "" };
  },

  methods: {},
};
</script>
