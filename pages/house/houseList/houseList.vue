<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">房源</block>
		</cu-custom>
		<van-dropdown-menu>
		  <van-dropdown-item :value=" value1 " :options=" option1 " />
		</van-dropdown-menu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				option1: [
					{ text: '全部商品', value: 0 },
					{ text: '新款商品', value: 1 },
					{ text: '活动商品', value: 2 }
				],
				value1:0
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
