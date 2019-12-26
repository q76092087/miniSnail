<template>
	<div class="home">
		<cu-custom bgColor="bg-white" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">首页</block>
		</cu-custom>
		<view class="cu-bar search bg-blue">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		<swiper class="screen-swiper square-dot"  :indicator-dots="true" :circular="true"
			:autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<view class="cu-list grid col-4 no-border margin-bottom-xs">
			<view class="cu-item" @click="toHouseList">
				<view class="iconfont snailzuixinfangyuan text-green"></view>
				<text>新房</text>
			</view>
			<view class="cu-item">
				<view class="iconfont snailershoufang text-blue"></view>
				<text>二手房</text>
			</view>
			<view class="cu-item">
				<view class="iconfont snailzufang text-orange"></view>
				<text>住宅租房</text>
			</view>
			<view class="cu-item">
				<view class="iconfont snaildianpu text-cyan"></view>
				<text>商业租房</text>
			</view>
		</view>
		
		<view class="hot-hourse margin-bottom-xs">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-hotfill text-orange"></text>最热小区
				</view>
			</view>
			<scroll-view scroll-x class="bg-white nowrap">
				<view class="width-33 inline-block padding-xs" v-for="item in 7">
					<view class="flex flex-direction">
						<image src="https://z1.muscache.cn/im/pictures/f45d0508-bcef-4b81-a090-c18d37429bd9.jpg?aki_policy=xx_large" mode="widthFix"></image>
						<span class="text-center">云星洲</span>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="iconfont snailnew text-orange cuIcon-"></text>最新房源
				</view>
			</view>
			<!-- hourse-card组件 -->
			<hourse-card v-for="item in 8"></hourse-card>
			<!-- hourse-card组件 -->
		</view>
	</div>
</template>

<script>
	import HourseCard from '@/components/common/hourseCard.vue'
	export default {
		components:{
			HourseCard
		},
		onLoad() {

		},
		onShow() {
			
		},
		data() {
			return {
				InputBottom:0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
			}
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			toHouseList(){
				this.$Router.push({
					name:'houseList'
				})
			}
		}
	}
</script>

<style scoped>
	.cu-item > .iconfont{
		font-size: 50upx;
	}
	.hot-hourse image{
		/* padding: 5px; */
	}
	
	
</style>
