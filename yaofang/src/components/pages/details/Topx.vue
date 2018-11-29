<template>
	<!-- <div></div>"  -->
	<div class="topx">
		<div class="zuo">
			<i @click="fanhui" class="fa fa-angle-left" aria-hidden="true"></i>
			<span class="jiage">商品价格</span>
		</div>
		<i class="fa fa-search" aria-hidden="true"></i>
	</div>
</template>

<script>

	export default{
		name:'Topx',
		components:{},
		data(){
			return{
				
			}
		},
		methods:{
			fanhui(){
				this.$router.push("/shouye")
			}
		}
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.topx{
		position:fixed;
		z-index:999;
		top: 0px; 
		left: 0px;
		right: 0px;
		background-color: #fff;
		.w(375);
		.h(41);
		border-bottom:1px solid #e5e5e5;
		.zuo{
			float:left;
			.w(222);
			.h(41);
			.fa{
				float:left;
				.lh(41);
				padding-left:15px;
				.fs(30);
				color:@bg-header;
			}
			.jiage{
				.w(68);
				.h(41);
				text-align: center;
				float:right;
				.lh(41);
				.fs(17);
			}
		}
		.fa-search{
			float:right;
			.lh(41);
			padding-right:24px;
			.fs(22);
			color:@bg-header;
		}
	}
</style>