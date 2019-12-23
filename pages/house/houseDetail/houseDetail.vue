<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">房源详情</block>
		</cu-custom>
		<swiper class="screen-swiper square-dot"  :indicator-dots="true" :circular="true"
			:autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<view class="padding-lr padding-top bg-white margin-bottom-xs">
			<view class="text-xxl">
				<text class="text-black text-bold">繁华路段时代倾城，休闲娱乐配套完善，税过二税费低</text>
			</view>
			<view class="flex justify-between ">
				<view class="flex align-center">
					<view class='cu-tag radius sm light bg-red'>满两年啊</view>
					<view class='cu-tag radius sm bg-blue'>随时看房</view>
					<view class='cu-tag radius sm bg-cyan'>近车站啊</view>
					<view class='cu-tag radius sm light bg-red'>满两年啊</view>
				</view>
				<view class="flex justify-end">
					<view class="flex flex-direction justify-center align-center text-xl">
						<text class="text-gray cuIcon-favor"></text>
						<text class="text-sm">收藏</text>
					</view>
					<view class="flex flex-direction justify-center align-center text-xl margin-left">
						<text class="text-gray cuIcon-share"></text>
						<text class="text-sm">分享</text>
					</view>
				</view>
			</view>
			<view class="cu-list grid col-3 margin-bottom-xs">
				<view class="cu-item border-bottom-none">
					<text>售价</text>
					<view class="text-red text-xxl text-bold">73万</view>
				</view>
				<view class="cu-item border-bottom-none">
					<text>房型</text>
					<view class="text-red text-xxl text-bold">3室2厅</view>
				</view>
				<view class="cu-item relative-top border-bottom-none">
					<text>建筑面积</text>
					<view class="text-red text-xxl text-bold">103㎡</view>
				</view>
			</view>
			<view class="grid col-2 solid-bottom">
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">单价：</text><text>10000元 / ㎡</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">楼层：</text><text>18层</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">类型：</text><text>商品房</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">装修：</text><text>毛坯</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">朝向：</text><text>西北</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">年代：</text><text>2010年</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">发布：</text><text>2019.12.23</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">浏览：</text><text>309次</text>
				</view>
			</view>
			<view class="cu-list menu">
				<view class="cu-item arrow">
					<view class="content">
						<text class="text-gray margin-right-xs">小区：</text>
						<text>新城花园4栋</text>
					</view>
				</view>
			</view>
		</view>
		<view class="margin-bottom-xs">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-green"></text>
					<text class="text-xl text-bold">房源描述</text>
				</view>
			</view>
			<view class="padding-lr padding-bottom bg-white">
				光明大街旁 学区房 光源好 两居室 配套齐全 出行方便
			</view>
		</view>
		<view class="padding-bottom-cubar">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-green"></text>
					<text class="text-xl text-bold">同价位推荐</text>
				</view>
			</view>
			<view class="">
				<hourse-card v-for="item in 8"></hourse-card>
			</view>
		</view>
		<view class="cu-bar bg-white tabbar border shop foot">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view>
				客服
			</button>
			<view class="action text-orange">
				<view class="cuIcon-favorfill"></view> 已收藏
			</view>
			<view class="action">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view class="bg-red submit">立即订购</view>
		</view>
	</view>
</template>

<script>
	import HourseCard from '@/components/common/hourseCard.vue'
	export default {
		components:{
			HourseCard
		},
		data() {
			return {
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

		}
	}
</script>

<style scoped>
.relative-top{
	position: relative;
	top: 2px;
}
.border-bottom-none::after{
	border-bottom: none !important;
}
.padding-bottom-cubar{
	padding-bottom: 100rpx;
}
</style>
