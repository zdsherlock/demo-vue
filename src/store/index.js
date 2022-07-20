import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 传入一个state对象，接收传过来的参数num
    countAdd (state, num) {
      state.count += num
    }
  },
  // 组件通过dispatch方法触发actions里面的countAdd方法，然后actions提交mutations里面的countAdd方法
  actions: {
    // 接收组件传过来的参数num,Action接受一个与store实例具有相同方法的属性的context对象
    countAdd (context, num) {
      context.commit('countAdd', num)
    }
  },
  modules: {}
})
