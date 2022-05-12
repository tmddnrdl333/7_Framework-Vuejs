<template>
  <div>
    <h1 class="underline">부서 등록</h1>
    <table>
      <colgroup>
        <col style="width: 30%" />
        <col style="width: 70%" />
      </colgroup>
      <tbody>
        <tr>
          <td>Dept No.</td>
          <td>
            <input
              type="text"
              required="required"
              readonly="readonly"
              v-model="dept.deptNo"
            />
          </td>
        </tr>
        <tr>
          <td>Dept Name</td>
          <td>
            <input type="text" required="required" v-model="dept.dName" />
          </td>
        </tr>
        <tr>
          <td>Dept Location</td>
          <td>
            <input type="text" required="required" v-model="dept.loc" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button style="width: 30%" @click="modifyDept">수정</button>
            <button style="width: 30%" @click="removeDept">삭제</button>
            <button style="width: 30%" @click="moveList">목록</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "@/api/http.js";
export default {
  data() {
    return {
      dept: {
        detpNo: "",
        dName: "",
        loc: "",
      },
    };
  },

  methods: {
    getDeptDetail(deptNo) {
      http
        .get(deptNo)
        .then((response) => (this.dept = response.data))
        .catch((error) => alert(error));
    },

    modifyDept() {
      http
        .put("" + this.dept.deptNo, this.dept)
        .then(() => {
          alert("부서 수정에 성공하였습니다.");
          this.moveList();
        })
        .catch((error) => alert("부서 수정에 실패했습니다.\n" + error));
    },
    removeDept() {
      http
        .delete("" + this.dept.deptNo, this.dept.deptNo)
        .then(() => {
          alert("부서 삭제에 성공하였습니다.");
          this.moveList();
        })
        .catch((error) => alert("부서 삭제에 실패했습니다.\n" + error));
    },
    moveList() {
      this.$router.push("/dept/list");
    },
  },
  created() {
    let deptNo = this.$route.params.deptNo;
    this.getDeptDetail(deptNo);
  },
};
</script>

<style></style>
