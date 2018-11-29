<template>
	<!-- <div></div> -->
	<div class="totop" @click='goTop'>
		<transition
			enter-active-class='animated fadeIn'
			leave-active-class='animated fadeOut'
		>
			<div class="contain" v-show='show'>
				<i class="fa fa-arrow-up" aria-hidden="true"></i>
			</div>
		</transition>
		
	</div>
</template>

<script>
	export default{
		name:'Totop',
		components:{},
		data(){
			return{
				show:false,
				distance:200
			}
		},
		methods:{
			
			goTop(){
				returnTop();
				function returnTop(){
					var timer;
					clearInterval(timer);
					timer = setInterval(function(){
						var now = window.scrollY;//高度
						var speed = (0-now)/10;//速度
						speed = speed >0 ? Math.ceil(speed):Math.floor(speed);
						if(window.scrollY <= 0){
							clearInterval(timer);
						}
						let jian = now+speed*1.8
						window.scrollTo(jian,jian);
						
					}, 30);
				}
		
			}
		},
		created(){
			window.addEventListener('scroll',()=>{
				let y=window.scrollY;
				
				if(y>=this.distance){
					if(this.show==false){
						this.show=true
					}
				}else{
					if(this.show == true){
						this.show = false
					}
				}
			})
		}
	   
	}	
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
	.totop{
		.contain{
			background:#fff;
			position:fixed;
			bottom:60px;
			right:5px;
			.w(28);
			.h(28);
			border-radius: 50%;
			border:1px solid #00AA22;
			color:#fff;
			display: flex;
			justify-content: center;
			align-items:center;
			.fa{
				.fs(16);
				color:#00AA22;
			}
		}
		
	}
</style>