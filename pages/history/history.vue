<template>
	<view class="background">
		<view class="text" v-show="textShow">
			<text>暂无数据</text>
		</view>
		<view class="texts"  v-show="!textShow" @click="clean()">
			<text>清除历史记录</text>
		</view>
		<view class="box" v-show="!textShow" v-for="item in history" @click="toRecommend(item.start,item.end,item.time)">
			<view class="left">
				<view>{{item.start}}</view>
				<view class="icon">
					<img src="../../static/icons/111.png" alt="" />
				</view>
				<view>{{item.end}}</view>
			</view>
			<view class="right">
				<uni-icons type="right" size="30"></uni-icons>
			</view>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from "vue"
import { apiRoutesSearch } from '@/api/apis.js';

	const textShow = ref(false);
	
	const history = ref([]);
	
	const startCity = ref(null); //起点城市
	const endCity = ref(null);   //终点城市
	const timeData = ref(null);
	
	//获得历史数据
	history.value = uni.getStorageSync("historyList");
	console.log(history.value)
	
	//判断是否有数据
	const show=()=>{
		if(!history.value){
			textShow.value = true;
		}
	}
	
	//跳转到查看推荐页面
	const toRecommend = async(start,end,time)=>{

		//加载中
		uni.showLoading({
			title:"加载中",
			mask:true
		});
		// 先获得城市名称
		startCity.value = start;
		endCity.value = end;
		timeData.value = time;
		// console.log("起点城市：",startCity.value); 
		// console.log("终点城市：",endCity.value); 
		// console.log("选中的日期:", timeData.value); 
		
		// 城市值已赋值后再调用接口  
		    if (startCity.value && endCity.value) {  
		        try {  
		            // 调用接口函数并等待其返回结果  
		            let res = await apiRoutesSearch({  
		                start: startCity.value,  
		                end: endCity.value,  
		                date: timeData.value  
		            });  
		            // console.log(res.data); 
					
					//存入数据
					uni.setStorageSync("busList",res);
					uni.setStorageSync("time",timeData.value);
					 
		            //在接口调用成功后跳转页面  
		            uni.navigateTo({  
		                url: "/pages/recommend/recommend"  
		            });  
					//加载完成
					uni.hideLoading();
		        } catch (error) {  
		            console.error('错误:', error);
		        }  
		    } 
			else {  
		        console.error('起点或终点城市未找到，请检查输入。');  
		    } 
	}
	
	
	const clean=()=>{
		uni.removeStorageSync('historyList');
		console.log(1)
	}
	
	show();
	
</script>

<style lang="scss" scoped>
	.background{
		width: 100%;
		height: 100%;
		background-color: #f8f8f8;
		padding-top: 30rpx;
		display: flex;
		flex-direction: column-reverse;
		justify-content: start;
		.text{
			width: 750rpx;
			display: flex;
			justify-content: center;
			padding-top: 30rpx;
		}
		.texts{
			width: 750rpx;
			display: flex;
			justify-content: center;
			margin-bottom: 40rpx;
		}
		.box{
			width: 680rpx;
			height: 150rpx;
			background-color: #fff;
			display: flex;
			box-sizing: border-box;
			margin: 20rpx 0 30rpx 30rpx;
			padding: 0 30rpx;
			border-radius: 15rpx;
			box-shadow: 0rpx 10rpx 10rpx rgba(0, 0, 0, 0.05);

			.left{
				width: 500rpx;
				height: 150rpx;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding-left: 30rpx;
				font-size: 40rpx;
				img{
					width: 80rpx;
					margin: 0 30rpx;
				}
			}
			.right{
				width: 180rpx;
				height: 150rpx;
				display: flex;
				align-items: center;
				justify-content: end;
				
			}
		}
	}
</style>
