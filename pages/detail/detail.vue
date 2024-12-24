<template>
	<view class="bus-schedule">  
	    <view class="header">  
	      <view class="title">
			  <text>{{busList.data.start}}</text>
	      	 <view class="icon">
	      	 	<img src="../../static/icons/111.png" alt="" />
	      	 </view>
			 <text>{{busList.data.end}}</text>
	      </view> 
	      <view class="date">
			  <text>{{timeData}}</text>
		  </view>  
	      <view class="price">
			￥{{busDetailList.price}}
		  </view>  
	    </view>  
	    
	    <view class="schedule">  
	      <view class="schedule-item">  
	       <view class="time">{{ busDetailList.departureStartTime }} - {{ addHoursToTime(busDetailList.departureEndTime, 4) }}</view> 
	        <view class="details">  
	          <view class="text1">预计 {{calculateDuration(busDetailList.departureStartTime,addHoursToTime(busDetailList.departureEndTime, 4))}}到达</view> 
	          <text class="text2">出发站点:</text>  
	          <view class="station-list1"> 
			   <view class="left">
					 <view class="text" v-for="item in busDetailList.departurePoints">
						{{ item.name }}
					 </view> 
			   </view>
			   <view class="right">
			   	 <view class="text" v-for="item in busDetailList.departurePoints">
					{{ item.departureTime }}
			   	 </view> 
			   </view>
	          </view>  
	          <text class="text2">到达站点:</text>  
	          <view class="station-list2">  
				<view class="left">
					<view class="text" v-for="item in busDetailList.arrivalPoints">
						{{ item }}
					</view> 
				</view>
	          </view>  
	          <view class="station-len" >
				<view>总站点数: {{ busDetailList.departurePoints.length+busDetailList.arrivalPoints.length }}</view> 
				<view class="remarks">{{busDetailList.remarks}}</view>
				<view>{{ busDetailList.busType}}</view> 
	          </view> 
	        </view>   
	      </view>  
	    </view>  
	  </view> 
</template>

<script setup>
	import { ref } from 'vue';  
	
	//获得站点数据
	const busList =uni.getStorageSync('busList')|| [];
	//获得当前站点数据
	const busDetailList = uni.getStorageSync('busListDetail')|| [];
	//获得时间数据
	const timeData = uni.getStorageSync('time')|| [];
	
	// console.log(busList.data)
	console.log("选定站点数据",busDetailList)
	// console.log(timeData)
	// console.log(res)
	
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
	
</script>

<style lang="scss" scoped>
	.bus-schedule {
	  height: 95vh;
	  background-color: #f6f6f9;
	  padding-top: 10rpx;
	  box-sizing: border-box;
	  // background: linear-gradient(to bottom, #ff9767, #fff8f8 400rpx);
	
	  .header {  
		height: 290rpx;
		background-color: #fff;
		margin: 0 30rpx;
		border-radius: 15rpx;
	    text-align: center;  
		background: linear-gradient(to bottom, #ff855c, #ffffff 350rpx);
		border-radius: 20rpx;
		border: 2rpx solid #8c8c8c;
		box-shadow: 0rpx 10rpx 10rpx rgba(0, 0, 0, 0.08);
	    .title {  
		  margin-top: 10rpx;
		  display: flex;
		  align-items: center;
		  justify-content: center;
	      font-size: 30px;  
	      font-weight: bold;  
	    }  
		.icon{
			width: 80rpx;
			margin: 30rpx 100rpx;
			
			img{
				width: 100%;
			}
		}
	    .date{
			margin-top: 5rpx;
			font-size: 30rpx;
			color: #434343;
			// font-weight: 800;
		}
	    .price {   
	      margin: 5px 0; 
		   font-size: 38rpx;
		   color: #2d2d2d;
		   font-weight: 800;
	    }  
	  }  
	
	  .schedule {  
		  box-shadow: 0rpx 10rpx 20rpx rgba(0, 0, 0, 0.08);
	     // border-top: 1px solid #000000;  
		 margin: 30rpx 35rpx;
	    .schedule-item {  
	      background: #fff;  
	      border: 1px solid #ddd;  
	      border-radius: 10px;  
	      margin: 10px 0;  
	      padding: 50rpx 20px;  
	
	      .time {  
	        font-size: 28px;  
	        font-weight: bold;  
	      }  
	
	      .details {  
	        margin: 0px 0;  
			display: flex;
			flex-direction: column;
			
			.text1{
				color: #838383;
				margin-bottom: 20rpx;
			}
			.text2{
				margin-top: 30rpx;
				color: #838383;
			}
	
	        .station-list1 {  
	          list-style-type: none; 
			   margin: 15rpx;
			   
	          padding: 5rpx 20rpx; 
			   display: flex;
			   justify-content: space-between;
			   // flex-direction: column;
			   
			   border-left: 4px solid #00c760; 
			   .left{
				   display: flex;
				   flex-direction: column;
				   .text{
					   margin-top: 10rpx;
				   }
			   }
			   .right{
				   display: flex;
				   flex-direction: column;
				   .text{
				   		margin-top: 10rpx;
				   }
			   }
			   text{
				   margin: 10rpx 0;
				  
			   }
	        }  
			.station-list2 {
			  list-style-type: none; 
			   margin: 15rpx;
			   margin-bottom: 10rpx;
			   padding: 5rpx 20rpx; 
				display: flex;
			   justify-content: space-between;
			   border-left: 4px solid #ec4e00; 
			 .left{
			 	display: flex;
			 	flex-direction: column;
				.text{
					margin-top: 10rpx;
				}
			 }
			 .right{
			 	display: flex;
			 	flex-direction: column;
			 }
			   text{
				   margin: 10rpx 0;
			   }
			}
	      }  
		  .station-len{
			  margin-top: 50rpx;
			  padding: 30rpx 20rpx 0 20rpx ;
			  box-sizing: border-box;
			  border-top: 1rpx solid #e8e8e8;
			  color: #838383;
			  font-size: 30rpx;
			  display: flex;
			  justify-content: space-between;
				.remarks{
					padding: 0 23rpx;
					border-left: 1rpx solid #bfbfbf;
					border-right: 1rpx solid #bfbfbf;
				}
		  } 
	    }  
	  }  
	} 
</style>
