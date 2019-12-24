<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">房源详情</block>
		</cu-custom>
		<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
			</swiper-item>
		</swiper>
		<view class="padding-lr padding-top bg-white margin-bottom-xs">
			<view class="text-xxl">
				<text class="text-black text-bold">繁华路段时代倾城，休闲娱乐配套完善，税过二税费低</text>
			</view>
			<!-- <view class="flex align-center padding-tb-xs">
				<view class='cu-tag radius sm light bg-red'>满两年啊</view>
				<view class='cu-tag radius sm bg-blue'>随时看房</view>
				<view class='cu-tag radius sm bg-cyan'>近车站啊</view>
				<view class='cu-tag radius sm light bg-red'>满两年啊</view>
			</view> -->
			<view class="padding-tb-xs">
				英德 碧桂园小区 8栋201
			</view>
			<view class="text-gray text-sm padding-tb-xs">
				发布时间：2019-12-24 19:34:55
			</view>
		</view>
		<view class="padding-lr bg-white margin-bottom-xs">
			<view class="cu-list grid col-3 margin-bottom-xs no-border solid-bottom">
				<view class="cu-item ">
					<text>月租</text>
					<view class="text-red text-xxl text-bold">7000元/月<text class="text-xs text-gray">（押一付一）</text></view>
				</view>
				<view class="cu-item ">
					<text>房型</text>
					<view class="text-red text-xxl text-bold">3室2厅</view>
				</view>
				<view class="cu-item relative-top ">
					<text>建筑面积</text>
					<view class="text-red text-xxl text-bold">103㎡</view>
				</view>
			</view>
			<view class="grid col-2 solid-bottom">
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">楼层：</text><text>18层</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">装修：</text><text>精装修</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">类型：</text><text>商品房</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">朝向：</text><text>西北</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">年代：</text><text>2010年</text>
				</view>
				<view class="padding-lr padding-tb-xs">
					<text class="text-gray">浏览：</text><text>309次</text>
				</view>
			</view>
			<view class="solid-bottom padding">
				<view class="text-gray padding-bottom">
					<text>配套设施：</text>
				</view>
				<view class="grid col-4">
					<view class="cuIcon-roundcheckfill text-green">
						<text class="padding-left-xs text-black">床</text>
					</view>
					<view class="cuIcon-roundcheckfill text-green">
						<text class="padding-left-xs text-black">宽带</text>
					</view>
					<view class="cuIcon-roundcheckfill text-green">
						<text class="padding-left-xs text-black">电视</text>
					</view>
					<view class="cuIcon-roundcheckfill text-green">
						<text class="padding-left-xs text-black">洗衣机</text>
					</view>
					<view class="cuIcon-roundclosefill text-red">
						<text class="padding-left-xs text-black">冰箱</text>
					</view>
					<view class="cuIcon-roundclosefill text-red">
						<text class="padding-left-xs text-black">空调</text>
					</view>
					<view class="cuIcon-roundclosefill text-red">
						<text class="padding-left-xs text-black">暖气</text>
					</view>
					<view class="cuIcon-roundclosefill text-red">
						<text class="padding-left-xs text-black">热水器</text>
					</view>
				</view>
			</view>
			<view class="text-red padding-tb">
				<text>郑重提示：请您在签订合同之前，切勿支付任何形式的费用，以免上当受骗</text>
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
				光明大街旁 学区房 光源好 两居室 配套齐全 出行方便 距离市场比较近 买菜方便 地铁附近
			</view>
		</view>
		<view class="margin-bottom-xs aroung-building">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-green"></text>
					<text class="text-xl text-bold">周边配套</text>
				</view>
			</view>
			<view class="padding-lr padding-bottom bg-white">
				大学：北方工业大学、广州大学<br/>
				中小学：实验小学、实验中学、广州第一中学、广雅中学<br/>
				银行：中国农业银行、中国工商银行
			</view>
		</view>
		
		<view class="padding-bottom-cubar">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-green"></text>
					<text class="text-xl text-bold">同价位出租房推荐</text>
				</view>
			</view>
			<view class="">
				<hourse-card v-for="item in 8"></hourse-card>
			</view>
		</view>
		
		<view class="fixed-right-center">
			<view class="round bg-white padding-sm cuIcon-favor shadow-all margin-bottom-xs">
				<!-- <text class=" text-xsl"></text> -->
			</view>
			<view class="round bg-white padding-sm cuIcon-share shadow-all">
			</view>
		</view>
		
		<view class="cu-bar bg-white tabbar border foot shop">
			<view class="">
				<view class="cu-avatar round margin-lr-xs" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
				<text>杨耀豪</text>
			</view>
			<view class="action">
				<view class="cuIcon-people">
					<view class="cu-tag badge">999</view>
				</view>
				累计预约
			</view>
			<view class="btn-group">
				<button class="cu-btn bg-blue round shadow-blur"><text class="cuIcon-dianhua"></text>电话咨询</button>
				<button class="cu-btn bg-red round shadow-blur" @click="bookMeet"><text class="cuIcon-message"></text>预约看房</button>
			</view>
		</view>
		
		<view class="cu-modal" :class="modalName=='bookModal'?'show':''" @click="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<view class="cu-bar bg-white justify-end">
					<view class="content">选择预约时间段</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view>
					<van-radio-group :value="bookRadioFlag" @change="bookRadioChange">
						<van-cell-group>
							<van-cell v-for="(item,index) in timeGroup" :key="index" :title="item.label" clickable @click="bookRadioClick(index)">
								<van-radio slot="right-icon" :name="index"/>
							</van-cell>
						</van-cell-group>
					</van-radio-group>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-modal bottom-modal" :class="modalName=='dateModal'?'show':''">
			<view class="cu-dialog">
				<!-- <view class="cu-bar bg-white"> -->
					<!-- <view class="action text-green" @click="dateChoose">确定</view> -->
					<!-- <view class="action text-blue" @click="hideModal">取消</view> -->
				<!-- </view> -->
				<view>
					<van-datetime-picker
					  type="date"
					  :value=" currentDate "
					  @cancel="hideModal"
					  @confirm="dateChoose"
					  :min-date=" minDate "
					/>
				</view>
			</view>
		</view>
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
				timeGroup:[
					{label:'9:00',timestamp:32400000},
					{label:'15:00',timestamp:54000000}
				],
				modalName: '',
				bookRadioFlag:'0',
				currentDate: new Date().getTime(),
				minDate: new Date().getTime()
			}
		},
		methods: {
			// 隐藏模态框
			hideModal() {
				this.modalName = null;
			},
			// 预约看房点击
			bookMeet() {
				this.modalName = 'dateModal';
			},
			// 预约看房radio改变
			bookRadioChange(e){
				console.log('bookRadioChange',e);
			},
			// cell的点击
			bookRadioClick(index){
				console.log('bookRadioClick',index);
				this.bookRadioFlag = index+'';
			},
			// 时间年月日确认
			dateChoose(e){
				console.log('选择的时间',e.detail); // 时间戳
				this.modalName = 'bookModal';
			}
		}
	}
</script>

<style scoped>
	.relative-top {
		position: relative;
		top: 2px;
	}
	.aroung-building p{
		/* line-height: 1.5; */
	}
	.shadow-all{
		box-shadow: 0 0 2px #888888;
	}
	.padding-bottom-cubar {
		padding-bottom: 100rpx;
	}
</style>
