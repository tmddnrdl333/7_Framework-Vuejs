<template>
  <div class="regist">
    <h1 class="underline">부서 등록</h1>
    <div class="regist_form">
      <label for="deptNo">부서번호</label>
      <input type="text" id="deptNo" v-model="deptNo" /><br />
      <label for="dName">부서명</label>
      <input type="text" id="dName" v-model="dName" /><br />
      <label for="loc">지역</label>
      <input type="text" id="loc" v-model="loc" /><br />
      <button @click="registDept">등록</button>
      <button @click="moveList">목록</button>
    </div>
  </div>
</template>

<script>
import Constant from "@/common/Constant.js";
export default {
  data() {
    return {
      deptNo: "",
      dName: "",
      loc: "",
    };
  },
  created() {
    console.log("DeptRegistForm Comp.");
  },
  methods: {
    registDept() {
      this.$store
        .dispatch(Constant.REGIST_DEPT, {
          dept: {
            deptNo: this.deptNo,
            dName: this.dName,
            loc: this.loc,
          },
        })
        .then(() => {
          alert("부서 등록에 성공하였습니다.");
          this.moveList();
        });
    },
    moveList() {
      this.$router.push("/dept/list");
    },
  },
};
</script>

<style></style>
