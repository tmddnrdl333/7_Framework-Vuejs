import MainContentView from '../views/MainContentView.js';
import DeptListView from '../views/DeptListView.js';
import DeptRegistView from '../views/DeptRegistView.js';
import DeptDetailView from '../views/DeptDetailView.js';

const routes = [
  {
    path: '/',
    component: MainContentView,
  },
  {
    path: '/dept/list',
    component: DeptListView,
  },
  {
    path: '/dept/regist',
    component: DeptRegistView,
  },
  {
    path: '/dept/detail/:deptNo',
    component: DeptDetailView,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
