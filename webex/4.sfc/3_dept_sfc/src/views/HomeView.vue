<template>
  <div class="home">
    <h3>HOME VIEW</h3>
    <main-content :msg="msg"></main-content>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
export default {
  components: { MainContent },
  data() {
    return {
      msg: "SSAFY에 오신 것을 환영합니다.",
    };
  },
};
</script>
