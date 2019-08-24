import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '主页'
      },
      // 懒加载模式
      component: () => import(/* webpackChunkName: "about" */ './pages/home/index.vue')
    },
    {
      path: '/axios',
      name: 'axios',
      meta: {
        title: 'axios使用'
      },
      // 懒加载模式
      component: () => import(/* webpackChunkName: "about" */ './pages/axios/index.vue')
    },
    {
      path: '/table',
      name: 'table',
      meta: {
        title: '表格组件封装使用'
      },
      // 懒加载模式
      component: () => import(/* webpackChunkName: "about" */ './pages/table/index.vue')
    },
    {
      path: '/filter',
      name: 'filter',
      meta: {
        title: 'filter使用'
      },
      // 懒加载模式
      component: () => import(/* webpackChunkName: "about" */ './pages/filter/index.vue')
    },
    {
      path: '/i18n',
      name: 'i18n',
      meta: {
        title: 'i18n使用'
      },
      // 懒加载模式
      component: () => import(/* webpackChunkName: "about" */ './pages/i18n/index.vue')
    },
    {
      path: '/input',
      name: 'input',
      meta: {
        title: '自定义组件'
      },
      // 懒加载模式
      component: () => import(/* webpackChunkName: "about" */ './pages/input/index.vue')
    }
  ]
})
