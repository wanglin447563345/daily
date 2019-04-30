import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import { Button, Table } from 'iview';

Vue.config.productionTip = false

Vue.component('Button', Button);
Vue.component('Table', Table);

router.beforeEach((to, from, next) => {
  /* 页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  /* 判断该路由是否需要登录权限 */
  if (to.matched.some(record => record.meta.auth)) {
    //是否登录
    if(localStorage.getItem('userId')){
      next();
    } else {
      next({
        path: '/user/login',
      })
    }

  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
