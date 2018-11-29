<template>
	<!-- <div></div>"  -->
	<div class="details">
		<Topx></Topx>
		<Banner></Banner>
		<Exhibit></Exhibit>
	</div>
</template>

<script>
import Banner from '../../commons/dibu.vue'
import Topx from './Topx.vue'
import Exhibit from './Exhibit.vue'
	export default{
		name:'Details',
		components:{Banner,Topx,Exhibit},
		data(){
			return{
				
			}
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	
</style>