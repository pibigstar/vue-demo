import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局导入Element
import ElementUI from './engine/elementConfig'
// 导入Element样式
import '../theme/index.css'

import Axios from "axios"

import { initFilter } from './engine/filter'

import i18n from './i18n'

// 将axios挂载到原型上
Vue.prototype.$axios = Axios;

// 初始化filter
initFilter()

Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
