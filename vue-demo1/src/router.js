import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './layout/MainLayout.vue'
import UserLayout from './layout/UserLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      meta: {
        auth: true,
        title: '主页'
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: ()=>import('./views/Home/Home.vue'),
        }
      ]
    },
    {
      path: '/user',
      name: 'UserLayout',
      component: UserLayout,
      meta: {
        auth: false,
        title: '用户'
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: ()=>import('./views/Login/Login.vue'),
          meta: {
            auth: false,
            title: '登录'
          },
        },
        {
          path: 'register',
          name: 'register',
          component: ()=>import('./views/Register/Register.vue'),
          meta: {
            auth: false,
            title: '注册'
          },
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
