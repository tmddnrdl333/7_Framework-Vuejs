<template>
  <div>
    <h1 class="underline">부서 목록</h1>
    <b-table-simple>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 20%" />
        <col style="width: 40%" />
        <col style="width: 30%" />
      </colgroup>
      <b-thead>
        <b-tr>
          <b-th>번호</b-th>
          <b-th>부서번호</b-th>
          <b-th>부서명</b-th>
          <b-th>지역</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(dept, index) in depts" :key="dept.deptNo">
          <b-td>{{ index + 1 }}</b-td>
          <b-td>{{ dept.deptNo }}</b-td>
          <b-td>
            <router-link :to="'/dept/detail/' + dept.deptNo">{{
              dept.dName
            }}</router-link>
          </b-td>
          <b-td>{{ dept.loc }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import http from "@/api/http.js";
export default {
  data() {
    return {
      depts: [], // 백엔드 통신 후의 데이터로 채워짐!
    };
  },
  methods: {
    getDepts() {
      // axios 이용해서 백엔드 통신후 자신의 depts 데이터 채우는 작업!
      http
        .get("")
        .then((response) => (this.depts = response.data))
        .catch((error) => alert(error));
    },
  },
  created() {
    this.getDepts();
  },
};
</script>

<style></style>
