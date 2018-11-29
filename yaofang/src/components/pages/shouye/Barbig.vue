<template>
	<!-- <div></div> -->
	<div class="barbig">
		<ul>
			<li v-for="(item,index) in navlist"
			:key="index"
			@click="licts(item)">
			
				<span class="tu" :class="item.se"><i class="fa" :class="item.biao" aria-hidden="true"></i></span>
				<span class="wenzi">{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Barbig',
		components:{},
		data(){
			return{
				navlist:[
					{name:'商品分类',biao:'fa-bars',se:'yi'},
					{name:'我的订单',biao:'fa-calendar-minus-o',se:'er'},
					{name:'疾病知识',biao:'fa-file-text',se:'san'},
					{name:'健康问答',biao:'fa-comments-o',se:'si'},
					{name:'男性',biao:'fa-mars',se:'wu'},
					{name:'女性',biao:'fa-venus',se:'liu'},
					{name:'老人',biao:'fa-opencart',se:'qi'},
					{name:'商家入驻',biao:'fa-wpbeginner',se:'ba'}
				]
			}
		},
		methods:{
			licts:function(item){
				if(item.se=='yi')
				this.$router.push('/fenlei')
			}
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.barbig{
		.w(375);
		.h(170);
		background:#fff;
		ul{
			list-style-type:none;
			li{
				float:left;
				.margin(5,0,0,0);
				.w(93);
				.h(80);
				justify-content: center;
				text-align:center;
				
				.tu{
					.w(48);
					.h(48);
					display:block;
					border-radius: 38%;
					margin:5px auto;
					.lh(38);
					.fa{
						color:#fff;
						.fs(28);
					}
				}
				.wenzi{
					display:block;
					.fs(13);
					.padding(3,0,0,0);
				}
			}
		}
		.yi{background:#12e8ae;}
		.er{background:#fedd1c;}
		.san{background:#ffa169;}
		.si{background:#7854f8;}
		.wu{background:#547af8;}
		.liu{background:#ff6c99;}
		.qi{background:#12e8ae;}
		.ba{background:#ffa169;}
	}
</style>