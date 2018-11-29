<template>
	<!-- <div></div> -->
	<div class="fenlei">
		<dibu></dibu>
		<Sort></Sort>
		<Liebiao></Liebiao>
	</div>
</template>

<script>
import dibu from '../../commons/dibu.vue'
import Sort from './Sort.vue'
import Liebiao from './Liebiao.vue'
	export default{
		name:'Fenlei',
		components:{dibu,Sort,Liebiao},
		data(){
			return{
				
			}
		}
		
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.fenlei{
		
	}
</style>