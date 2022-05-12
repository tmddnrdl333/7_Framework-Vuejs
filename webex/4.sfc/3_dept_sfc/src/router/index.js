import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DeptView from "@/views/DeptView.vue";
import DeptList from "@/components/dept/DeptList.vue";
import DeptRegist from "@/components/dept/DeptRegist.vue";
import DeptDetail from "@/components/dept/DeptDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/dept",
    component: DeptView,
    children: [
      {
        path: "list",
        component: DeptList,
      },
      {
        path: "regist",
        component: DeptRegist,
      },
      {
        path: "detail/:deptNo",
        component: DeptDetail,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
