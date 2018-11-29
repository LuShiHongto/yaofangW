<template>
  <div class="top">
		<div class="boxs">
			<a class="logo" title="药房网商城" href="javascript:;">
				<i class="fa fa-medkit" aria-hidden="true"></i>
			</a>
			<div class="searchForm">
				<div class="box">
					<i class="fa fa-search" aria-hidden="true"></i>
					<input type="text" readonly="readonly" placeholder="批准文号、通用名、商品名、症状" id="keywordFake" class="searchinput">
				</div>
			</div>
			<a href="javascript:;" class="more" rel="nofollow" @click="zhanghao">
				<i class="fa fa-user-o" aria-hidden="true"></i>
			</a>
		</div>
			
		
  </div>
</template>

<script>
export default {
  name: 'Top',
	components:{
		
	},
  data () {
    return {
      
    }
  },
	methods:{
		zhanghao(){
			this.$router.push("/zhanghao")
		}
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url('../../styls/main.less');
	.boxs{
		.w(375);
		.h(42);
		.fs(13);
		z-index:999;
		position:fixed;
		top:0;
		left:0;
		background-color: @bg-header;
		.logo{
			.w(50);
			.h(42);
			float:left;
			display: inline-block;
			.fa{
				.w(24);
				.h(24);
				.fs(24);
				margin: 8px 0 8px 13px;
				align-items:center;
				color:#fff;
			}
		}
		.searchForm{
			float:left;
			display: inline-block;
			.w(275);
			.h(42);
			.box{
				.w(275);
				.h(29);
				.margin(7px,0,0,0);
				background-color: #fff;
				border-radius:5px;
				.fa{
					display: inline-block;
					.w(16);
					.h(16);
					.fs(16);
					margin: 7px 8px;
					color:#ccc;
				}
				.searchinput{
					border: 0px;
					display: inline-block;
					.w(230);
					.h(20);
					.lh(20);
				}
			}
		}
		.more{
			float:right;
			.w(50);
			.h(42);
			display: inline-block;
			.fa{
				.w(24);
				.h(24);
				.fs(24);
				margin: 8px 0 8px 13px;
				align-items:center;
				color:#fff;
			}
		}
	}
</style>
