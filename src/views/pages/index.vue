<template>
  <div class="col-6">
    <classTable msg="開課課程" />
  </div>
  <div class="col-6">
    <volunteer msg="已選課程" />
  </div>
</template>
<style></style>
<script>
import classTable from "/src/components/imSystem/class.vue";
import volunteer from "../../components/imSystem/volunteer.vue";
export default {
  components: {
    classTable,
    volunteer,
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
