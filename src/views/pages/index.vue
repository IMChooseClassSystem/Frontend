<template>
  <div class="row">
    <div class="col-lg-6">
      <classTable msg="開課課程" />
    </div>
    <div class="col-lg-6">
      <volunteer msg="已選課程" />
    </div>
  </div>
</template>
<style></style>
<script>
import classTable from "/src/components/imSystem/class.vue";
import volunteer from "../../components/imSystem/volunteer.vue";
import moveUpDown from "../../components/imSystem/moveUpDown.vue";
export default {
  components: {
    classTable,
    volunteer,
    moveUpDown,
  },
  data: () => {
    return {
      title: "A1",
      textA2: "A2",
      dataFromChild: "",
      dataFromGrandSon: "", //接收来自GrandSon的消息
    };
  },
};
</script>
