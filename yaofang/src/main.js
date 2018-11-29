// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入路由 
import router from './router'

//全局less
import './styls/reset.less'

//引入axios，挂载全局
import Axios from 'axios'
Vue.prototype.$axios=Axios

//引入动画
import '../node_modules/animate.css'
Vue.config.productionTip = false

//引入mint-ui挂载全局
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//全局过滤器
Vue.filter('baoliu', function (value) {
	value = Number(value);//踩坑！！！没有把valu转换成数字类型
  return value.toFixed(2);
})
import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
