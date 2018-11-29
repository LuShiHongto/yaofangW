<template>
	<!-- <div></div> -->
	<div class="newvie">
		<div class="adbg">—————精选商品—————</div>
		<div class="gginfo">
			<a href="javascript:;" title="">
				<img src="//c1.yaofangwang.net/Common/Upload/Imggg/20181114/fbf2c428-5456-43e1-a33e-a833285147595571.jpg" alt="">
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Newvie',
		components:{},
		data(){
			return{
				
			}
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.newvie{
		.w(375);
		.h(141);
		.adbg{
			.w(375);
			.h(50);
			.fs(16);
			text-align: center;
			.lh(50);
			color: #333;
		}
		.gginfo{
			.w(375);
			.h(91);
			img{
				.w(375);
				.h(91);
			}
		}
	}
</style>