<template>
	<!-- <div></div> -->
	<div class="banner">
		<mt-swipe :auto="4000">
  <mt-swipe-item><img src="https://c1.yaofangwang.net/Common/Upload/Imggg/20181113/3530481a-6244-401c-a0c9-3bd12e771ddf9227.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="https://c1.yaofangwang.net/Common/Upload/Imggg/20180830/f74c3e9b-4ca0-464b-961d-32dcd1068d511520.png"></mt-swipe-item>
  <mt-swipe-item><img src="https://c1.yaofangwang.net/Common/Upload/Imggg/20181112/4ce8a398-bb1d-4cfd-9d34-0e93f83e12407374.jpg"></mt-swipe-item>
	<mt-swipe-item><img src="https://c1.yaofangwang.net/Common/Upload/Imggg/20181101/b65d9c6a-2793-444f-9b7b-3931cb8ffd728938.png"></mt-swipe-item>
</mt-swipe>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
	export default{
		name:'Banner',
		components:{},
		data(){
			return{
				
			}
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.banner{
		.w(375);
		.h(187);
		background:#e4e0e0;
		.padding(42,0,0,0);
		img{
			.w(375);
			.h(187);
		}
	}
</style>