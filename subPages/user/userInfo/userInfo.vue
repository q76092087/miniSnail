<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">用户信息</block>
		</cu-custom>
		<view class="cu-list menu solid-top margin-bottom-xs">
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">头像</text>
				</view>
				<view class="action">
					<view class="cu-avatar-group">
						<view class="cu-avatar round df" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">微信昵称</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">马骝</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item arrow" @click="showModal('nameModal')">
				<view class="content">
					<text class="text-grey">真实姓名</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">杨耀豪</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="">
					<text class="text-grey">性别</text>
				</view>
				<picker @change="sexPickerChange" :value="sexIndex" :range="sexRange" class="content">
					<view class="action picker text-right">
						<text class="text-grey text-sm">男</text>
					</view>
				</picker>
			</view>
			<view class="cu-item arrow" >
				<view class="">
					<text class="text-grey">地区</text>
				</view>
				
				<picker mode="region" @change="regionPickerChange" :value="regionPicker" class="content">
					<view class="action picker text-right">
						<text class="text-grey text-sm">广东省 清远市 英德市</text>
					</view>
				</picker>
			</view>
		</view>
		
		
		<view class="cu-modal" :class="modalName=='nameModal'?'show':''">
			<view class="cu-dialog bg-white">
				<view class="cu-bar  justify-end">
					<view class="content">修改名字</view>
					<view class="action" @click="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="bg-white radius flex justify-center">
					<input placeholder="请输入您的真实姓名" name="input" class="solid-bottom width-half"></input>
				</view>
				<view class="cu-bar justify-end">
					<view class="action">
						<button class="cu-btn bg-green margin-left" @click="hideModal">保存</button>
					</view>
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName:'',
				sexRange:['男','女','保密'],
				sexIndex:0,
				regionPicker:[] // [省,市,区]
			}
		},
		methods: {
			hideModal(){
				this.modalName=null;
			},
			showModal(name){
				this.modalName = name
			},
			sexPickerChange(e){
				console.log('选择的性别索引',e.detail.value)
				console.log('选择的性别',this.sexRange[e.detail.value])
			},
			regionPickerChange(e){
				// this.regionPicker = e.detail.value;
				console.log('选择的地区',e.detail.value)
			}
		}
	}
</script>

<style>

</style>
