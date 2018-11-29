<template>
	<!-- <div></div> -->
	<div class="floor">
		<div class="fooro" v-for="(item,index) in navlist"
		:key="index"
		>
			<div class="ftitle clearfix">
				<div class="title zxyp" :class="item.toue"><i class="fa" :class="item.paot" aria-hidden="true"></i>{{item.name}}</div>
				<a href="javascript:;" class="more" :title="item.name">更多<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
			</div>
			<div class="sublist clearfix bt1">
				<img :src="item.p1" class="geyu yuge">
				<img :src="item.p2" class="yuge">
			</div>
			<div class="ml bt1">
					<img :src="item.p3" class="geyu yuge">
					<img :src="item.p4" class="geyu yuge">
					<img :src="item.p5" class="geyu yuge">
					<img :src="item.p6" class="yuge">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Floor',
		components:{},
		data(){
			return{
				navlist:[
					{name:'中医西药',paot:'fa-gratipay',toue:'gratipay',p1:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/b56428ad-a56d-4ef2-8de8-94e79ca0dbb07069.jpg',p2:'https://c1.yaofangwang.net/Common/Upload/Imggg/20180410/8d9a6f47-bd64-4add-ad63-2cd19f312c239493.jpg',p3:'https://c1.yaofangwang.net/Common/Upload/Imggg/20180410/ce225c4a-34ee-4f35-a876-08b76cba28ee8176.jpg',p4:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/40f2f788-3f11-4a97-b64b-412183d9ce326954.jpg',p5:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/52a0a48c-b91e-4ac1-a35a-9b38d1ab38311506.jpg',p6:'https://c1.yaofangwang.net/Common/Upload/Imggg/20180410/377080b1-815c-4e27-9e90-97d06b65cf3e9382.jpg'},
					{name:'养生保健',paot:'fa-pagelines',toue:'pagelines',p1:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/c7158295-1a45-483d-a7f9-00b1d0db2aac1779.jpg',p2:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/11441b22-d7a5-461b-91d3-feb893a3cc744667.jpg',p3:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/b2c28202-fbba-4603-9aaf-544681c6a82d6340.jpg',p4:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/283554fe-be61-4fd7-8ce7-698ffc00c8e05848.jpg',p5:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/4aad81a8-2484-4b24-8ee2-5850588804981294.jpg',p6:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/3402ca50-92b4-40f7-9fc6-9ebf04d8d3939937.jpg'},
					{name:'器械、计生',paot:'fa-yelp',toue:'yelp',p1:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/53599f77-cbee-4b27-bade-2fdcb0a2365f4408.jpg',p2:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/1adbe1a8-1a4d-489f-88c8-f633081a6da08576.jpg',p3:'https://c1.yaofangwang.net/Common/Upload/Imggg/20181010/b162c583-22f6-4b61-999b-6e66fb9983292480.jpg',p4:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/5f12bf76-b4da-430a-a705-4b3b44e1bfe67619.jpg',p5:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/4442162b-7037-4914-a241-a2289426654c4309.jpg',p6:'https://c1.yaofangwang.net/Common/Upload/Imggg/20170411/be20337b-83bc-4a9e-8904-656631ae1b514110.jpg'}
				]
			}
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.fooro{
		.w(375);
		.h(278);
		.margin(13,0,0,0);
		background:#fff;
		.ftitle{
			.w(375);
			.h(42);
			border-bottom:1px solid #e5e5e5;
			border-top:1px solid #e5e5e5;
			.title{
				.w(225);
				.h(41);
				.fs(15);
				.lh(41);
				float:left;
				.fa{
					display: inline-block;
					.w(24);
					.h(24);
					.fs(24);
					.margin(0,10,0,10);
				}
			}
			.gratipay{
				color: #1177ff;
			}
			.pagelines{
				color: #00AA22;
			}
			.yelp{
				color: #9c33ab;
			}
			.more{
				.w(60);
				.h(41);
				.lh(41);
				text-decoration: none;
				color: #aaa;
				float:right;
				.fs(14);
				.fa{
					display: inline-block;
					.w(16);
					.h(16);
					.fs(12);
					.margin(0,0,0,5);
				}
			}
		}
		.sublist{
			img{
				float:left;
				.w(187);
				.h(105);
			}
		}
		.ml{
			img{
				float:left;
				.w(93);
				.h(127);
			}
		}
		.geyu{
			border-right:1px solid #e5e5e5;
		}
		.yuge{
			border-bottom:1px solid #e5e5e5;
		}
	}
</style>