<template>
  <div class="regist">
    <h1 class="underline">부서 상세 정보</h1>
    <div class="regist_form">
      <label for="deptNo">부서번호</label>
      <input type="text" id="deptNo" v-model="dept.deptNo" readonly /><br />
      <label for="dName">부서명</label>
      <input type="text" id="dName" v-model="dept.dName" /><br />
      <label for="loc">지역</label>
      <input type="text" id="loc" v-model="dept.loc" /><br />
      <button @click="modifyDept">수정</button>
      <button @click="deleteDept">삭제</button>
      <button @click="moveList">목록</button>
    </div>
  </div>
</template>

<script>
import Constant from "@/common/Constant.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      deptNo: 0,
    };
  },
  computed: {
    dept() {
      return { ...this.$store.state.dept };
    },
  },
  created() {
    console.log("DeptDetail Comp.");
    this.deptNo = this.$route.params.deptNo;
    this.getDept({ deptNo: this.deptNo });
  },

  methods: {
    // getDept(deptNo) {
    //   this.$store.dispatch(Constant.GET_DEPT, { deptNo });
    // },
    ...mapActions([Constant.GET_DEPT]),

    modifyDept() {
      this.$store
        .dispatch(Constant.MODIFY_DEPT, { dept: this.dept })
        .then(() => {
          alert("수정에 성공하였습니다.");
          this.moveList();
        });
    },
    deleteDept() {
      // axios
      //   .delete(`http://127.0.0.1:8080/myapp_rest/api/depts/${this.deptNo}`)
      //   .then(() => {
      //     alert("삭제에 성공하였습니다.");
      //     this.moveList();
      //   });
      this.$store
        .dispatch(Constant.DELETE_DEPT, { deptNo: this.deptNo })
        .then(() => {
          alert("삭제에 성공하였습니다.");
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
