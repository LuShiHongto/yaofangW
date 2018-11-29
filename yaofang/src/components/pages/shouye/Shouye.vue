<template>
	<!-- <div></div> -->
	<div class="shouye">
		<Top></Top>
		<Banner></Banner>
		<Barbig></Barbig>
		<Newbie></Newbie>
		<Homeprods></Homeprods>
		<Floor></Floor>
		<Totop></Totop>
		<Prod></Prod>
		<Zhanwei></Zhanwei>
		<Dibu></Dibu>
	</div>
</template>

<script>
import Top from '../../commons/top.vue'
import Banner from './Banner.vue'
import Barbig from './Barbig.vue'
import Newbie from './Newbie.vue'
import Homeprods from './Home-prods.vue'
import Floor from './Floor.vue'
import Totop from './Totop.vue'
import Prod from './Prod.vue'
import Zhanwei from './Zhanwei.vue'
import Dibu from '../../commons/dibu.vue'
	export default{
		name:'Shouye',
		components:{
			Top,Banner,Barbig,Newbie,Homeprods,Floor,Totop,Prod,Zhanwei,Dibu
		},
		data(){
			return{
				
			}
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	
</style>