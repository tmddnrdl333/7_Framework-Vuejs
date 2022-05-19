<template>
  <div>
    <h1 class="underline">부서 목록</h1>
    <div v-if="depts.length > 0">
      <table style="width: 80%">
        <colgroup>
          <col style="width: 10%" />
          <col style="width: 30%" />
          <col style="width: 30%" />
          <col style="width: 30%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>부서번호</th>
            <th>이름</th>
            <th>지역</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dept, index) in depts" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ dept.deptNo }}</td>

            <td>
              <router-link :to="'detail/' + dept.deptNo">{{
                dept.dName
              }}</router-link>
            </td>
            <td>{{ dept.loc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center">등록된 부서가 없습니다.</div>
  </div>
</template>

<script>
import Constant from "@/common/Constant.js";
import { mapGetters, mapActions } from "vuex";

export default {
  // computed: {
  //   depts() {
  //     // return this.$store.state.depts;
  //     return this.$store.getters.depts;
  //   },
  computed: mapGetters(["depts"]),
  created() {
    console.log("DeptList Comp.");
    this.getDepts();
  },
  // methods: {
  //   getDepts() {
  //     this.$store.dispatch(Constant.GET_DEPTS);
  //   },
  // },
  methods: mapActions([Constant.GET_DEPTS]),
};
</script>

<style></style>
