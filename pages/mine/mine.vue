<template>
	<div class="mine">
		<cu-custom bgColor="bg-white" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">个人中心</block>
		</cu-custom>
		<div class="padding bg-gradual-blue flex justify-between align-center">
			<div class="flex justify-start align-center" @click="toUserInfo">
				<div class="cu-avatar lg round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></div>
				<div class="padding-left-sm">
					<p class="text-lg">杨耀豪</p>
					<p class="padding-top-xs">134****7488</p>
				</div>
			</div>
			<div class="my-icon">
				<text class="text-white cuIcon-usefull"></text>
			</div>
		</div>
		
		<!-- <view class="cu-list grid col-2 no-border">
			<view class="cu-item">
				<view class="cuIcon-likefill text-red"></view>
				<text>我的收藏</text>
			</view>
			<view class="cu-item">
				<view class="cuIcon-footprint text-red"></view>
				<text>浏览历史</text>
			</view>
			<view class="cu-item">
				<view class="cuIcon-footprint text-red"></view>
				<text>我的赞</text>
			</view>
		</view> -->
		
		<div class="cu-list menu margin-top-sm">
			<!-- <view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-homefill text-grey"></text>
					<text class="text-grey">我的交易</text>
				</view>
			</view> -->
			
			<!-- <view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-share text-grey"></text>
					<text class="text-grey">我的房源</text>
				</view>
			</view> -->
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-like text-grey"></text>
					<text class="text-black">我的收藏</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-footprint text-grey"></text>
					<text class="text-black">浏览历史</text>
				</view>
			</view>
			<!-- <view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-location text-grey"></text>
					<text class="text-black">我的地址</text>
				</view>
			</view> -->
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-phone text-grey"></text>
					<text class="text-black">我的预约</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-share text-grey"></text>
					<text class="text-black">我的分销</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-question text-grey"></text>
					<text class="text-black">问题反馈</text>
				</view>
			</view>
			
			<view class="cu-item margin-top-sm">
				<view class="content text-center">
					<text class="text-black">退出登录</text>
				</view>
			</view>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		onLoad() {
			
		},
		onShow() {
			
		},
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
			},
			toUserInfo(){
				this.$Router.push({
					name:'userInfo'
				})
			}
		}
	}
</script>

<style scoped>
.my-icon{
	transform: rotateZ(90deg);
}
</style>
