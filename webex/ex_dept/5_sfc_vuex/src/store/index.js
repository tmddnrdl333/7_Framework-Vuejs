import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// let p = { name: "taehee", age: 20 };
// let nm = "age";
// p[nm];

import Constant from "@/common/Constant.js";
import axios from "axios";

export default new Vuex.Store({
  state: {
    depts: [],
    dept: {},
  },
  getters: {
    depts(state) {
      console.log("store getters depts.");
      return state.depts;
      // return state.depts.filter((item) => item.loc == "서울");
    },
  },
  mutations: {
    // 직접 데이터를 변화시키는 변이작업
    [Constant.SET_DEPTS](state, payload) {
      state.depts = payload.depts;
    },
    [Constant.SET_DEPT](state, payload) {
      state.dept = payload.dept;
    },
  },
  actions: {
    [Constant.GET_DEPTS]({ commit }) {
      // 백엔드 통신후 받아오는 데이터를 변이작업으로 호출
      axios
        .get("http://127.0.0.1:8080/myapp_rest/api/depts")
        .then(({ data }) => commit(Constant.SET_DEPTS, { depts: data }));
    },

    [Constant.GET_DEPT](context, payload) {
      axios
        .get(`http://127.0.0.1:8080/myapp_rest/api/depts/${payload.deptNo}`)
        .then(({ data }) => context.commit(Constant.SET_DEPT, { dept: data }));
    },

    [Constant.MODIFY_DEPT](context, payload) {
      return axios
        .put(
          `http://127.0.0.1:8080/myapp_rest/api/depts/${payload.dept.deptNo}`,
          {
            deptNo: payload.dept.deptNo,
            dName: payload.dept.dName,
            loc: payload.dept.loc,
          }
        )
        .then(() => {
          console.log("store : 부서 수정에 성공하였습니다.");
        });
    },

    [Constant.DELETE_DEPT](context, payload) {
      return axios
        .delete(`http://127.0.0.1:8080/myapp_rest/api/depts/${payload.deptNo}`)
        .then(() => {
          console.log("store : 부서 삭제에 성공하였습니다.");
        });
    },

    [Constant.REGIST_DEPT](context, payload) {
      return axios
        .post(`http://127.0.0.1:8080/myapp_rest/api/depts`, payload.dept)
        .then(() => {
          console.log("store : 부서 등록에 성공하였습니다.");
        });
    },
  },
});
