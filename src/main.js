import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import commonUtils from '@/utils/commonUtils.js'
import 'element-ui/lib/theme-chalk/index.css'


Vue.prototype.commonUtils = commonUtils // 全局挂载工具类
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
