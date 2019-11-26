import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../login/Login'
import Layout from '../layout/Layout'
import Dashboard from '../pages/Dashboard'
import Echarts from '../echarts/Echarts'
import Calendar from '../pages/Calendar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: { name: 'calendar' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'echarts',
        name: 'echarts',
        component: Echarts
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: Calendar
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
