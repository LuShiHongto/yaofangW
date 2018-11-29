<template>
  <div id="app" class="apps">
    
		<router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
		
  }
}
</script>

<style lang="less" scoped>
@import url('./styls/main.less');
	.apps{
		background:@bg-quanju;
	}
</style>
