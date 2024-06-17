const { createRouter, createWebHistory } = VueRouter;

import event from "./event.js";


const routes = [
    { path: "/event", component: event },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
