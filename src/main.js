import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

import BootstrapVue from 'bootstrap-vue'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource)
Vue.use(VueRouter);
Vue.use(BootstrapVue)


const router= new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})


router.beforeEach((to,from,next)=>{
  console.log('%cglobal beforeEach', 'background: #222; color: #bada55');
  console.log("to:", to, ",from:", from);
  next();
});

router.beforeResolve((to,from,next)=>{
  console.log('%cglobal beforeResolve', 'background: #222; color: #bada55');
  next();
});

router.afterEach((to,from)=>{
  console.log('%cglobal afterEach', 'background: #222; color: #bada55');
  //next();
});
