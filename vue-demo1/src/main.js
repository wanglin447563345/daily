import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/iview.js'
import cookie from 'js-cookie'
import { Layout,Row,Col,Card,Menu,Header,Content,Footer,Sider,Carousel,CarouselItem,MenuItem ,Button, Table, Form, Input,Icon, FormItem, Message } from 'iview';

Vue.config.productionTip = false

Vue.component('Layout', Layout);
Vue.component('Menu', Menu);
Vue.component('Col', Col);
Vue.component('Card', Card);
Vue.component('Row', Row);
Vue.component('MenuItem', MenuItem);
Vue.component('Carousel', Carousel);
Vue.component('CarouselItem', CarouselItem);
Vue.component('Header', Header);
Vue.component('Content', Content);
Vue.component('Footer', Footer);
Vue.component('Sider', Sider);
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Form', Form);
Vue.component('Input', Input);
Vue.component('Icon', Icon);
Vue.component('FormItem', FormItem);
Vue.component('Message', Message);

router.beforeEach((to, from, next) => { /*这里处理用户是否登录，未登录跳到登陆页面*/
  /* 页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  /* 判断该路由是否需要登录权限 */
  if (to.matched.some(record => record.meta.auth)) {
    //是否登录
    if(cookie.get('userId')){
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
