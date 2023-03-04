<template>
  <div class="row" v-show="!userStore.adminShow">
    <div class="col-lg-6">
      <classTable msg="開課課程" />
    </div>
    <div class="col-lg-6">
      <volunteer msg="已選課程" />
    </div>
  </div>
  <div class="row" v-show="userStore.adminShow">
    <div class="col">
      <classTable msg="開課課程" />
    </div>
  </div>
</template>
<style></style>
<script setup>
import { useUserStore } from "../../stores/user";
const userStore = useUserStore();
</script>

<script>
import classTable from "/src/components/imSystem/class.vue";
import volunteer from "../../components/imSystem/volunteer.vue";
// import moveUpDown from "../../components/imSystem/moveUpDown.vue";
export default {
  components: {
    classTable,
    volunteer,
    // moveUpDown,
  },
  data: () => {
    return {};
  },
};
</script>
