import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    name:'韩梅梅',
    slider:false,
		idx:0,
	navlist:[
		{name:'首页',path:'/shouye',biao:'fa-university',id:'yi'},
		{name:'分类',path:'/fenlei',biao:'fa-th-large',id:'er'},
		{name:'购物车',path:'/gouwuche',biao:'fa-cart-plus',id:'san'},
		{name:'账号',path:'/zhanghao',biao:'fa-user-o',id:'si'}]
  },
  mutations: {
    setName(state,name){
    	state.name=name
    },
    sliderShow(state,val){
    	state.slider=val
    },
		setNavlist(state,index){
			state.idx=index
		}
  },
  getters: {
		getNavlist: state => {
		return state.navlist
	},
		getidx: state => {
		return state.idx
	}
	}
 
})
//state 存放所有全局状态值（全局变量） 这里的数据只能通过mutation里的方法修改
//mutations 里面有一堆方法  方法的作用是修改  state 里的值
export default store