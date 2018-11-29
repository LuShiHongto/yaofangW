//路由文件的基本配置
import Vue from 'vue'
import VueRouter from 'vue-router';

//如果使用模块化机制编程,导入Vue和VueRouter,要调用Vue.use(VueRouter)
Vue.use(VueRouter)

import Shouye from '../components/pages/shouye/Shouye'
import Fenlei from '../components/pages/fenlei/Fenlei'
import Gouwuche from '../components/pages/gouwuche/Gouwuche'
import Zhanghao from '../components/pages/zhanghao/Zhanghao'
import Details from '../components/pages/details/Details'

// //实例化组件
const router = new VueRouter({
	routes:[
		{path:'/',redirect:'/shouye'},
		{path:'/shouye',component:Shouye,name:'shouye'},
		{path:'/fenlei',component:Fenlei,name:'fenlei'},
		{path:'/gouwuche',component:Gouwuche,name:'gouwuche'},
		{path:'/zhanghao',component:Zhanghao,name:'zhanghao'},
		{path:'/details',component:Details,name:'details'},
		
	]
})

export default router