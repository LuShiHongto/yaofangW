<template>
	<!-- <div></div> -->
	<div class="liebiao">
		<ul>
			<li v-for="(item,index) in biao">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>

	export default{
		name:'Liebiao',
		components:{},
		data(){
			return{
				biao:[
					{name:'中西药品',id:'yi'},
					{name:'养生保健',id:'er'},
					{name:'医疗器械',id:'san'},
					{name:'计生用品',id:'si'},
					{name:'中药饮片',id:'wu'},
					{name:'美容护肤',id:'liu'}
				]
			}
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.liebiao{
		position:fixed;
		z-index:999;
		top: 42px; 
		left: 0px;
		.w(93);
		ul{
			list-style-type:none;
			background-color: #fff;
			li{
				.w(93);
				.h(60);
				text-align:center;
				.lh(60);
				color: #333333;
				.fs(14);
				border-bottom:1px solid #e5e5e5;
				border-right:1px solid #e5e5e5;
			}
		}
	}
</style>