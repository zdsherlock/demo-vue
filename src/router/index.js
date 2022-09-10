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
  },
  // 自定义右键
  {
    path: '/custRightClickForTable',
    name: 'CustRightClickForTable',
    component: () =>
      import(
        /* webpackChunkName: "CustRightClickForTable" */ '@/views/CustRightClick/CustRightClickForTable.vue'
      )
  },
  // render练习
  {
    path: '/DemoRender',
    name: 'DemoRender',
    component: () =>
      import(/* webpackChunkName: "DemoRender" */ '@/views/Demo/DemoRender.vue')
  },
  // 进程展示练习
  {
    path: '/progressSteps',
    name: 'ProgressSteps',
    component: () =>
      import(/* webpackChunkName: "ProgressSteps" */ '@/views/ProgressSteps/ProgressSteps.vue')
  },
  // select练习
  {
    path: '/diffSelect',
    name: 'DiffSelect',
    component: () =>
      import(/* webpackChunkName: "DiffSelect" */ '@/views/SelectDemo/DiffSelect.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
