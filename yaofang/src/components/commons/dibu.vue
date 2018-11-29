<template>
  <div class="dibu">
		<ul>
			<li
			v-for="(item,index) in navlist"
			:key="index"
			@click="goPage(item.path,index)"
			:class="navtab == index ? 'item-cn-active' : 'acuti'"
			>
				<i class="fa" :class="item.biao"  aria-hidden="true"></i>
				<span class="wenzi">{{item.name}}</span>
			</li>
		</ul>
  </div>
</template>

<script>
	// import  store from './store'
export default {
  name: 'Dibu',
	props:['show'],
  data () {
    return {
			nav:[]
			// navIndex:0,
// 			navlist:[
// 				{name:'首页',path:'/shouye',biao:'fa-university',id:'yi'},
// 				{name:'分类',path:'/fenlei',biao:'fa-th-large',id:'er'},
// 				{name:'购物车',path:'/gouwuche',biao:'fa-cart-plus',id:'san'},
// 				{name:'账号',path:'/zhanghao',biao:'fa-user-o',id:'si'}]
				
    }
  },
	methods:{
		goPage(path,index){
			console.log(index)
			// 把索引传到仓库
			this.$store.commit('setNavlist',index)
			// this.navIndex = index
			this.$router.push(path)	
			
		}
	},
	computed: {
		navlist() {
			return this.$store.getters.getNavlist
		},
		// 从仓库拿回来索引
		navtab() {
			return this.$store.getters.getidx
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url('../../styls/main.less');
	.dibu{
		position:fixed;
		bottom:0;
		left:0;
		background:#fff;
		ul{
			list-style-type:none;
			.w(375);
			.h(48);
			border-top:1px solid #ccc;
			li{
				float:left;
				.w(93);
				.h(40);
				.wenzi{
					.fs(12);
					display:block;
					.margin(5,0,0,0);
					text-align:center;
					
				}
				.fa{
					.fs(20);
					display:block;
					.margin(5,0,0,0);
					text-align:center;
					// color:@color-dibu;
				}
			}
		}
	}
	.acuti{
		color:@color-dibu;
	}
	.item-cn-active{
		color: #00aa22;
	}
</style>
