import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './layout/MainLayout.vue'
import UserLayout from './layout/UserLayout.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',  /*激活样式*/
  mode: 'history',
  base: `${process.env.BASE_URL}`,
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: ()=>import('./views/Home/Home.vue'),
          meta: {
            auth: true,
            title: '主页'
          },
          children:[
            {
              path: 'child1',
              name: 'child1',
              component: () => import('./views/Home/Pages/Child1/Child1.vue'),
              meta: {
                auth: true,
                title: 'child1'
              },
            },
            {
              path: 'child2',
              name: 'child2',
              component: () => import('./views/Home/Pages/Child2/Child2.vue'),
              meta: {
                auth: true,
                title: 'child2'
              },
            },
            {
              path: 'child3',
              name: 'child3',
              component: () => import('./views/Home/Pages/Child3/Child3.vue'),
              meta: {
                auth: true,
                title: 'child3'
              },
            },
            {
              path: 'child4',
              name: 'child4',
              component: () => import('./views/Home/Pages/Child4/Child4.vue'),
              meta: {
                auth: true,
                title: 'child4'
              },
            },
            {
              path: '/home',
              redirect:'/home/child1'
            }
          ]
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List/List.vue'),
          meta: {
            auth: true,
            title: '列表'
          },
        },
        {
          path: 'page1',
          name:'page1',
          component: ()=> import('./views/Page1/Page1.vue'),
          meta: {
            auth: true,
            title: 'page1'
          },
          beforeEnter(to,from,next) {
            /*
          路由独享首位
          */
            console.log(to)
            console.log(from)
            console.log(next)
            if(from.name==='list'){  /*page1页面将只能从list页面切换进入*/
              next()
            }else {
              next(false)
            }
          }
        },
        {
          path: 'page2',
          name:'page2',
          component: ()=> import('./views/Page2/Page2.vue'),
          meta: {
            auth: true,
            title: 'page2'
          },
        },
        {
          path: 'nextTick',
          name:'nextTick',
          component: ()=> import('./views/nextTick/nextTick.vue'),
          meta: {
            auth: true,
            title: 'nextTick'
          },
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
    },
    {
      path:'*',
      component: ()=>import('./views/NotFound/NotFound'),  /*添加404页面*/
      meta: {
        auth: false,
        title: '404'
      },
    }
  ]
})
