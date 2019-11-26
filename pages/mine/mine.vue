<template>
	<div>
		<button type="primary" @click="getLogin">登陆</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getLogin(){
				uni.login({
					success(e) {
						console.log("成功",e);
					},
					fail(e){
						console.log("失败",e);
					}
				})
			}
		}
	}
</script>

<style>

</style>
