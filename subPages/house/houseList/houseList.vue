<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">房源</block>
		</cu-custom>
		<van-dropdown-menu>
			<!-- <van-dropdown-item :value=" value1 " :options=" option1 " /> -->
			<van-dropdown-item title='区域'>
				<van-tree-select :items=" items " :active-id=" activeId " />
			</van-dropdown-item>
			<van-dropdown-item title='均价' :options="option1">
			</van-dropdown-item>
			<van-dropdown-item title='户型' :options="option2">

			</van-dropdown-item>
		</van-dropdown-menu>
		<scroll-view scroll-y="true" class="hourlist-container">
			<hourse-card v-for="item in 8" @click.native='toHourseDetail'></hourse-card>
		</scroll-view>
	</view>
</template>

<script>
	import HourseCard from '@/components/common/hourseCard.vue'
	export default {
		components: {
			HourseCard
		},
		data() {
			return {
				option1: [{
						text: '价格不限',
						value: 0
					},
					{
						text: '3千以下',
						value: 1
					},
					{
						text: '3-5千',
						value: 2
					},
					{
						text: '5-8千',
						value: 3
					},
					{
						text: '8千以上',
						value: 4
					}
				],
				option2: [{
						text: '户型不限',
						value: 0
					},
					{
						text: '一室一厅',
						value: 1
					},
					{
						text: '二室一厅',
						value: 2
					},
					{
						text: '三室一厅',
						value: 3
					},
					{
						text: '四室一厅',
						value: 4
					}
				],
				value1: 0,
				items: [{
					// 导航名称
					text: '所有城市',
					// 禁用选项
					disabled: false,
					// 该导航下所有的可选项
					children: [{
							// 名称
							text: '温州',
							// id，作为匹配选中状态的标识F
							id: 1,
							// 禁用选项
							disabled: true
						},
						{
							text: '杭州',
							id: 2
						}
					]
				}],
				activeId: []
			}
		},
		created() {
			let a = 3;

		},
		methods: {
			toHourseDetail(){
				this.$Router.push({
					name:'houseDetail'
				})
			}
		}
	}
</script>

<style scoped>
	.hourlist-container {
		height: calc(100vh - 228upx);
	}
</style>
