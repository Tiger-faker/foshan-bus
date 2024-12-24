<template>
	<view class="background">
		<view class="top">
			<view class="city">
				<view class="text">
					{{busList.data.start}}
				</view>
				<view class="text">
					<img src="../../static/icons/111.png" alt="" />
				</view>
				<view class="text">
					{{busList.data.end}}
				</view>
			</view>
			<view class="data">
				<view class="text">
					{{timeData}}
					<text>出发</text>
				</view>
			</view>
		</view>
		<view class="center">
			<view class="box" v-for="item in busList.data.schedules" :key="item._id">
				<view class="left">
					<view class="time">
						{{item.departureStartTime}}
					</view>
					<view class="times">
						预计行驶{{calculateDuration(item.departureStartTime,addHoursToTime(item.departureEndTime, 4))}}
					</view>
					<view class="station">
						途径{{item.departurePoints.length+item.arrivalPoints.length}}个站点
					</view>
					<view class="bus">
						{{item.busType}}
					</view>
				</view>
				<view class="right">
					<scroll-view class="recommend-top" scroll-y="ture">
						<view class="recommend" v-if="lowestPriceBus._id==item._id">
							价格最低
						</view>
						<view class="recommend" v-if="shortestDuration._id==item._id">
							时间最短
						</view>
						<view class="recommend" v-if="fewestStopsBus._id==item._id">
							距离最短
						</view>
						<view class="recommend" v-if="mostComfortableBus._id==item._id">
							舒适度高
						</view>
					</scroll-view>
					<view class="down">
						<view class="price">
							<text>{{item.price}}</text>
							元起
						</view>
						<view class="button" @click="toDetail(item)">
							详情
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref,computed } from 'vue';

	//获得站点数据
	const busList =uni.getStorageSync('busList')|| [];
	//获得时间数据
	const timeData = uni.getStorageSync('time')|| [];
	console.log("所有站点数据",busList.data.schedules)
	
	
	//跳转详情页面
	const toDetail =(item)=>{
		uni.navigateTo({
			url:"/pages/detail/detail"
		});
		// 将当前公交车的数据存入缓存  
		uni.setStorageSync("busListDetail", item);   
		
	}
	
	//到达时间新增4个小时（即出发最晚站点加4小时 =_=后端的锅。。）
	const addHoursToTime=(time, hoursToAdd)=> {  
      let [hours, minutes] = time.split(':').map(Number);  
      hours += hoursToAdd;  
      hours = hours % 24; // 处理小时超过24的情况  
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;  
    }
	
	//计算行驶时间
	const calculateDuration = (startTime, endTime) => {  
	  const [startHours, startMinutes] = startTime.split(':').map(Number);  
	  const [endHours, endMinutes] = endTime.split(':').map(Number);  
	
	  // 将时间转换为分钟  
	  const startTotalMinutes = startHours * 60 + startMinutes;  
	  let endTotalMinutes = endHours * 60 + endMinutes;  
	
	  // 处理跨越午夜的情况  
	  if (endTotalMinutes < startTotalMinutes) {  
	    endTotalMinutes += 24 * 60; // 加上1440分钟  
	  }  
	
	  // 计算行驶时间（分钟）  
	  const durationMinutes = endTotalMinutes - startTotalMinutes;  
	
	  // 将分钟转换为小时和分钟  
	  const durationHours = Math.floor(durationMinutes / 60);  
	  const remainingMinutes = durationMinutes % 60;  
	
	  return `${String(durationHours).padStart(2, '0')}小时${String(remainingMinutes).padStart(2, '0')}分钟`;  
	}; 
  
	//筛选时间最少
	const shortestDuration = computed(() => {  
	  return busList.data.schedules.reduce((prev, curr) => {  
	    const prevDuration = calculateDuration(prev.departureStartTime, addHoursToTime(prev.departureEndTime, 4));  
	    const currDuration = calculateDuration(curr.departureStartTime, addHoursToTime(curr.departureEndTime, 4));  
	    return prevDuration < currDuration ? prev : curr;  
	  });  
	});

	//筛选价格最低
	const lowestPriceBus = computed(() => {  
	  return busList.data.schedules.reduce((prev, curr) => {  
	    return prev.price < curr.price ? prev : curr;  
	  });  
	});  
	
	//筛选站点最少的（即距离最短）
	const fewestStopsBus = computed(() => {  
	  return busList.data.schedules.reduce((prev, curr) => {  
	    const prevStops = prev.departurePoints.length + prev.arrivalPoints.length;  
	    const currStops = curr.departurePoints.length + curr.arrivalPoints.length;  
	    return prevStops < currStops ? prev : curr;  
	  });  
	});  
	
	//筛选舒适度最高的
	const mostComfortableBus = computed(() => {  
	  return busList.data.schedules.reduce((prev, curr) => {  
	    const comfortOrder = { "豪华大巴": 3, "商务车": 2, "普通大巴": 1 };  
	    return comfortOrder[prev.busType] > comfortOrder[curr.busType] ? prev : curr;  
	  });  
	}); 

	
	
	
</script>

<style lang="scss" scoped>
	.background{
		width: 100%;
		height: 100%;
		background: #f8f8f8;
		// padding-top: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		position: relative;
		.top{
			width: 700rpx;
			height: 250rpx;
			margin: 0rpx 25rpx 10rpx 25rpx;
			background: linear-gradient(to bottom, #ff855c, #ffffff 350rpx);
			border-radius: 20rpx;
			border: 2rpx solid #8c8c8c;
			box-shadow: 0rpx 10rpx 10rpx rgba(0, 0, 0, 0.08);
			position: sticky;
			top: 77rpx;
			z-index: 999;
			.city{
				width: 700rpx;
				height: 140rpx;
				border-radius: 20rpx;
				margin-top: 10rpx;
				padding: 0 70rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				.text{
					width: 100rpx;
					height: 140rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 50rpx;
					font-weight: 800;
				}
				img{
					width: 100rpx;
				}
	
			}
			.data{
				width: 700rpx;
				height: 90rpx;
				padding-left: 65rpx;
	
				display: flex;
				align-items: center;
				box-sizing: border-box;
				.text{
					font-size: 35rpx;
					font-weight: 800;
					
				}
			
			
			}
			
		}
		.center{
			
			.box{
				width: 680rpx;
				height: 310rpx;
				padding: 30rpx 40rpx;
				margin: 25rpx 30rpx;
				box-sizing: border-box;
				background-color: #fff;
				border-radius: 20rpx;
				box-shadow: 0rpx 10rpx 10rpx rgba(0, 0, 0, 0.05);
				display: flex;
				justify-content: space-between;
				.left{
					width: 400rpx;
					display: flex;
					flex-direction: column;
					.time{
						font-size: 50rpx;
						font-weight: 800;
					}
					.times{
						margin-bottom: 50rpx;
						color: rgba(0, 0, 0, 0.5);
					}
					.station{
						font-size: 30rpx;
						margin-bottom: 10rpx;
					}
					.bus{
						color: rgba(0, 0, 0, 0.5);
			
					}
				}
				.right{
					width: 220rpx;
					box-sizing: border-box;
					padding: 10rpx 0;
					border-left: 1rpx solid rgba(0, 0, 0, 0.2);
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					position: relative;
					.recommend-top{
						height: 120rpx;
						width: 130rpx;
						.recommend{
							padding: 8rpx 12rpx;
							box-sizing: border-box;
							border: 1rpx solid #4a83ff;
							border-radius: 8rpx;
							background-color:#d4e3ff;
							color: #2f6dff;
							font-size: 25rpx;
							font-weight: 800;
							margin-bottom: 8rpx;
						}
					}
					.down{
						position: absolute;
						bottom: 0rpx;

						.price{
							font-size: 23rpx;
							color: rgba(0, 0, 0, 0.8);
							padding-left: 30rpx;
							text{
								font-size: 38rpx;
								font-weight: 800;
								color: rgba(0, 0, 0, 1);
							}
						}
						.button{
							width: 150rpx;
							height: 60rpx;
							margin: 10rpx 10rpx;
							margin-bottom: 0rpx;
							background-color: #ff855c;
							border-radius: 30rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							color: #fff;
							font-weight: 800;
							font-size: 32rpx;
						}
					}
				}
			}
		}
		
	}
</style>
