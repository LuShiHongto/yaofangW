<template>
	<!-- <div></div>"  -->
	<div class="prod"
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled='loading'
			infinite-scroll-distance="49">
		<div class="adbg">—————商城推荐—————</div>
		<ul>
			<li v-for='(item,index) in prods'
			:key='index'
			:class="{'jishu':index%2 != 1}"
			@click="chuancan(item.alias_cn,item.name_cn,item.intro_image,item.standard,item.price)">
				<img :src="'https://c1.yaofangwang.net'+item.intro_image+'_syp.jpg'">
				<p class="p1 gong">{{item.alias_cn}}&nbsp;{{item.name_cn}}</p>
				<p class="p2 gong">{{item.standard}}</p>
				<p class="p3 gong">{{item.price|baoliu}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

	export default{
		name:'Prod',
		components:{},
		data(){
			return{
				prods:[],
				loading:false,//不可以请求
				current:0,
				total:3
			}
		},
		methods:{
				chuancan(alias,name,image,standard,price){
					this.$router.push({name:'details',params:{
						alias:alias,
						name:name,
						image:image,
						standard:standard,
						price:price
					}})
			},
			loadMore(){
				this.loading=true;
				setTimeout(() => {
					this.loading = false;
				}, 2500);
				this.getData();
			},
		
			getData(){
				if(this.current==this.total){
					Toast({
						message:'已经到底了',
						position:'bottom',
						duration:500
					});
					this.loading=false;
					return false
				}
				this.$axios.get('api/Handler/Handler.ashx',{params:{
					method:'GetPagerEliteLabelMedicine',
					pageindex:this.current+1,
					timestamp:1542870466341
				}	
			})
					.then((res)=>{
						this.prods=this.prods.concat(res.data.item);
						console.log(res)
						this.current+=1
					})
					.catch((err)=>{
						console.log(err)
					})
			}
			
		},
		created(){
		
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.prod{
		overflow:hidden;
		.adbg{
			.w(375);
			.h(50);
			.fs(16);
			text-align: center;
			.lh(50);
			color: #333;
		}
		ul{
			list-style-type:none;
			li{
				.w(185);
				.h(272);
				float:left;
				background:#fff;
				margin-bottom:5px;
				img{
					display:block;
					margin:auto;
					.w(164);
					.h(164);
					.padding(10,0,0,0);
				}
				.p1{
					.w(163);
					.fs(14);
					margin:auto;
					.padding(5,0,15,0);
					color: #000;
				}
				.p2{
					.fs(10);
					.padding(0,0,10,0);
					color: #999;
				}
				.p3{
					.fs(12);
					color: #FF3F00;
				}
				.gong{
					text-align:center;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			
		}
		.jishu{
			margin-right:5px;
		}
		
	}
</style>