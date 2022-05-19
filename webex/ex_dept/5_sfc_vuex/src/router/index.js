import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView.vue";
import DeptListView from "@/views/DeptListView.vue";
import DeptDetailView from "@/views/DeptDetailView.vue";
import DeptRegistFormView from "@/views/DeptRegistFormView.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: MainView },
  { path: "/index.html", redirect: "/" },
  { path: "/dept/list", component: DeptListView },
  {
    path: "/dept/regist_form",
    component: DeptRegistFormView,
  },
  { path: "/dept/detail/:deptNo", component: DeptDetailView },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
