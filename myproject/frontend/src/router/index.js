import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VuetifyView from '../views/VuetifyView.vue'
import DataBinding from '../Components/CompositionDataBindingView.vue'
import CompositionMouse from '../views/CompositionMouseView.vue'

const routes = [
  {
    path: '/CompositionMouse',
    name: 'CompositionMouse',
    component: CompositionMouse
  },
  {
    path: '/composition',
    name: 'composition',
    component: DataBinding
  },
  {
    path: '/VuetifyView',
    name: 'VuetifyView',
    component: VuetifyView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginForm.vue')
  },

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
