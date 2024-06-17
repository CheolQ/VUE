import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import EmpView from "../views/EmpView.vue";
import NestedView from "../views/NestedComponent.vue";
import EmpFormView from "../views/EmpForm.vue";


const routes = [
  { path: "/empForm",    component: EmpFormView },
  { path: "/nested",    component: NestedView },
  { path: "/emp",    component: EmpView },
  { 
    path: "/emp",
    component: () =>
      import(
        /* webpackChunkName: "emp", webpackPrefecth: true */ "../views/EmpView.vue"
      ),
  },
  {
    path: "/user",
    component: UserView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
