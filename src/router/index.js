import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () =>
      import(/* webpackChunkName: "form" */ '../views/InputTest/Form.vue')
  },
  {
    path: '/objAdd',
    name: 'ObjAddTest',
    component: () =>
      import(
        /* webpackChunkName: "objAdd" */ '../views/ObjAddTest/ObjAddTest.vue'
      )
  },
  {
    path: '/slotTest',
    name: 'slotTest',
    component: () =>
      import(
        /* webpackChunkName: "slotTest" */ '../views/SlotTest/SlotTest.vue'
      )
  },
  {
    path: '/datePickerTest',
    name: 'DatePickerTest',
    component: () =>
      import(
        /* webpackChunkName: "DatePickerTest" */ '../views/DatePickerTest/DatePickerTest.vue'
      )
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () =>
      import(
        /* webpackChunkName: "DatePickerTest" */ '../views/Computed/Computed.vue'
      )
  },
  // vuex练习
  {
    path: '/testvuex',
    name: 'VueXDom',
    component: () => import('@/views/VueXDom/VueXParent.vue')
  },
  // 数据看板
  {
    path: '/dataView',
    name: 'DataView',
    component: () =>
      import(/* webpackChunkName: "DataView" */ '@/views/DataView/DataView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
