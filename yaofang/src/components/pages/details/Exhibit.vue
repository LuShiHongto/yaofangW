<template>
	<!-- <div></div>"  -->
	<div class="exhibit">
		<img class="img" :src="'https://c1.yaofangwang.net'+prods[1]+'_syp.jpg'">
		<div class="txt">
			<p class="th1">{{prods[2]}} {{prods[0]}}(<span>{{prods[4]}}</span>)</p>
			<p class="p1">￥{{prods[3]|baoliu}}~￥{{prods[3]*3.5|baoliu}}</p>
			<p class="p2"><span>批准文号：</span><img src="https://m.yaofangwang.com/common/handler/imagetext.ashx?code=5B1C9D34D1EAC0CDD35E323D4890AEE3&type=md2"></p>
			<p class="p3">生产企业：浙江新东港药业股份有限公司</p>
			<p class="p4">打开App领20元优惠券</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Exhibit',
		data(){
			return{
				 prods:[]
			}
		},
		methods:{
			
		},
		created(){
		
			console.log(this.$route.params)
			if(this.$route.params.alias !=undefined){
					localStorage.setItem("alias",this.$route.params.alias)//存储名字为alias值为this.$route.params.alias的变量
					localStorage.setItem("image",this.$route.params.image)
					localStorage.setItem("name",this.$route.params.name)
					localStorage.setItem("price",this.$route.params.price)
					localStorage.setItem("standard",this.$route.params.standard)
					
				}
					
			this.prods.push(localStorage.getItem("alias"),localStorage.getItem("image"),localStorage.getItem("name"),
			localStorage.getItem("price"),localStorage.getItem("standard"))
			//caibin,读取保存在localStorage对象里名为name的变量的值

		}
		
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.exhibit{
		.w(375);
		.h(207);
		.padding(42,0,0,0);
		background:#fff;
		.img{
			float:left;
			.w(80);
			.h(80);
			margin:10px;
		}
		.txt{
			float:right;
			.w(255);
			.h(165);
			padding:10px;
			.th1{
				.w(255);
				.h(42);
				.fs(16);
				margin-bottom:5px;
			}
			.p1{
				.fs(16);
				.padding(10,0,10,0);
				color: #FF4000;
			}
			.p2{
				overflow: hidden;
				.fs(12);
				span{
					float:left;
					color: #999 !important;
				}
				img{
					float:left;
					.xw(190);
					.h(20);
				}
			}
			.p3{
				.fs(12);
				.margin(8,0,8,0);
				color: #999 !important;
			}
			.p4{
				.w(140);
				.h(23);
				.fs(13);
				border: 1px solid #FF4000;
				color: red!important;
				background-color: #FEF8F8;
				
				.lh(23);
			}
		}
	}
</style>