<template>
	<div class="mine">
		<cu-custom bgColor="bg-white" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">个人中心</block>
		</cu-custom>
		<div class="padding bg-gradual-blue flex justify-between align-center">
			<div class="flex justify-start align-center">
				<div class="cu-avatar lg round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></div>
				<div class="padding-left-sm">
					<p class="text-lg">杨耀豪</p>
					<p>134****7488</p>
				</div>
			</div>
			<div class="my-icon">
				<text class="text-white cuIcon-usefull"></text>
			</div>
		</div>
		<div class="padding bg-white flex justify-around">
			<div class="text-center">
				<text class="text-red cuIcon-likefill icon-size"></text>
				<p>我的关注</p>
			</div>
			<div class="text-center">
				<text class="text-red cuIcon-timefill icon-size"></text>
				<p>浏览历史</p>
			</div>
		</div>
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

<style scoped>
.mine{
	/* height: 100vh; */
	/* background-color: #007AFF; */
	
}
.my-icon{
	transform: rotateZ(90deg);
}
.icon-size{
	font-size: 54upx;
}
</style>
