<template>
	<!-- <div></div> -->
	<div class="home-prods">
		<ul>
			<li 
			v-for='(item,index) in prods' 
			:key='index'>
				<img class="imgs" :src="'https://c1.yaofangwang.net'+item.intro_image+'_syp.jpg'">
				<p class="p1"><span>{{item.alias_cn}}</span>&nbsp;<span>{{item.name_cn}}</span></p>
				<p class="p2">{{item.price|baoliu}}￥</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Home-prods',
		components:{},
		data(){
			return{
				prods:[],
			}
		},
		methods:{
			getData(){
				this.$axios.get('api/Handler/Handler.ashx?method=GetPagerEliteLabelMedicine&pageindex=1&timestamp=1542781417865')
					.then((res)=>{
						this.prods=this.prods.concat(res.data.item.slice(12,16));
						console.log(res.data.item[0].alias_cn);
						console.log(this.prods)
					})
					.catch((err)=>{
						console.log(err);
					})
			}
		},
		created(){
			this.getData()
			
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.home-prods{
		.w(375);
		.h(130);
		background:#fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		ul{
			list-style-type:none;
			li{
				float:left;
				.w(107);
				.h(130);
				img{
					display:block;
					.w(80);
					.h(80);
					margin:auto;
				}
				.p1{
					.fs(12);
					text-align:center;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.p2{
					.fs(12);
					text-align:center;
					.padding(5,0,0,0);
					color:#C91B1A;
				}
			}
		}
		
	}
</style>