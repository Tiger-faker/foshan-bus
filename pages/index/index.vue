<template>
	<view class="background">
		<view class="top">
			<view class="city">
				<view class="text">
					<uni-data-select class="select"
					      v-model="startCity"
					      :localdata="range"
						  placeholder="请选择起点"
					    ></uni-data-select>
				</view>
				<view class="text">
					<img src="../../static/icons/111.png" alt="" />
				</view>
				<view class="text">
					<uni-data-select
					      v-model="endCity"
					      :localdata="range"
						  placeholder="请选择终点"
					    ></uni-data-select>
				</view>
			</view>
			<view class="data" @click="openCalendar()">
				<view class="text">
					{{formattedDate}}
					<text>出发</text>
				</view>
			</view>
			<view class="button">
				<view class="buttons" @click="toRecommend()">
					<text>查看班次</text>
				</view>
			</view>

		</view>
		<view class="bottom">
			<view class="title">
				<view class="left">
					<text>热门站点</text>
					<img src="../../static/icons/hot.png" alt="" />
				</view>
				<view class="right">
					<uni-icons type="map-pin-ellipse" size="20"></uni-icons>
					<text>佛山</text>
				</view>
			</view>
			<view class="tab">
				<view class="box" v-for="item in cities">
					<view class="" @click="hotStation(item)">
						去{{item}}
					</view>
				</view>
			</view>
			<view class="classlist" v-for="item in cityRoutes">
				<view class="left" @click="hotRouts(item)">
					{{item.from}} - {{item.to}}
				</view>
				<view class="right">
					<text>{{item.price}}</text>
					&#8197 元起
				</view>
			</view>
		</view>
		<view class="calendar">
			<uni-calendar
				ref="calendar"
				:insert="false"
				@confirm="confirm"
				 />
		</view>
	</view>
</template>

<script setup>
import { ref,watch } from 'vue';
import { apiCities,apiRoutesSearch } from '@/api/apis.js';
import {onReady,onReachBottom,onUnload} from "@dcloudio/uni-app";

	const cities = ['潮州', '广州', '湛江', '深圳', '珠海', '东莞', '中山', '韶关'];
	const cityRoutes = [
	  { from: '佛山西站', to: '广州南站', price: '12' },
	  { from: '佛山东站', to: '广州客运站', price: '9.9' },
	  { from: '广州南站', to: '深圳东站', price: '21' },
	  { from: '广州汽车站', to: '潮州省汽车客运站', price: '43' },
	  { from: '佛山南站', to: '珠海北站地铁站', price: '33' },
	  { from: '深圳西站', to: '中山南站', price: '38' }
	];

	const today = new Date(); //获取今日日期

	// 存储格式化后的日期
	const formattedDate = ref(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`);  
	const formatted =ref();
	
<<<<<<< HEAD
	const calendar = ref(null);  //日历弹出
	
	const citiesList = ref([]);  //城市列表
	
	const range = ref([]);  //城市下拉列表
	
	const startCity = ref(null); //起点城市
	const endCity = ref(null);   //终点城市
	

	//获取城市列表数据
	const getapiCities = async()=>{
		//加载中
		uni.showLoading({
			title:"加载中",
			mask:true
		});
		
		let res = await apiCities();
		// console.log(res.data)
		citiesList.value = res.data;
		//列表转换
		range.value = citiesList.value.map(city => ({ value: city._id, text: city.name }))
		//加载完成
		if(citiesList.value){
			uni.hideLoading();
		}
		// console.log("城市列表数据",range.value);
		
=======
	const toRecommend = ()=>{
		uni.navigateTo({
			url:"/pages/recommend/recommend"
		})
>>>>>>> b6966335321cf364f74b8eea23da82fe294f04e9
	}
	

	//查看推荐按钮
	const toRecommend = async()=>{  
		//加载中
		uni.showLoading({
			title:"加载中",
			mask:true
		});
		// 先获得城市名称
		startCity.value = range.value.find(city => city.value === startCity.value);
		endCity.value = range.value.find(city => city.value === endCity.value);
		// console.log("起点城市：",startCity.value.text); 
		// console.log("终点城市：",endCity.value.text); 
		// console.log("选中的日期:", formattedDate.value); 
		
		// 城市值已赋值后再调用接口  
		    if (startCity.value && endCity.value && (startCity.value!=endCity.value)) {  
		        try {  
		            // 调用接口函数并等待其返回结果  
					await api();
		        } catch (error) {  
					console.error(error);
					uni.hideLoading();
		        }  
		    } 
			else {  
				uni.showToast({
					title: '起点或终点城市未找到',
					icon: 'error',
					duration: 2000
				});
				uni.hideLoading();
		    } 
	}
	
	
	 //打开日历
	const openCalendar=()=>{  
		calendar.value.open();
	}
	
	
	// 确认选择的日期  
	const confirm = (selectedDate) => {  
	  const { year, month, date } = selectedDate;  
	
	  // 格式化日期为 YYYY-MM-DD  
	  const formatted = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;  
	  
	  // 更新响应式引用  
	  formattedDate.value = formatted;  
	
	  // 输出选择的日期  
	  console.log("选中的日期:", formatted);  
	  
	  // console.log(year, month, date);
	}; 
	
	
	 //热门站点
	 const hotStation = async(city)=>{
		 //加载中
		 uni.showLoading({
		 	title:"加载中",
		 	mask:true
		 });
		 startCity.value = {
			 "text" : "佛山"
		 };
		 endCity.value = {
			 "text" : city
		 };
		 await api();
	 }
	 
	 
	 const hotRouts = async(city) => {
	    const cityRoute = {
	       from: city.from.slice(0, 2), // 截取 `from` 的前两个字
	       to: city.to.slice(0, 2)     // 截取 `to` 的前两个字
	     };
	   console.log(cityRoute);
	   
	   //加载中
	   uni.showLoading({
	   	title:"加载中",
	   	mask:true
	   });
	   startCity.value = {
	   			 "text" : cityRoute.from
	   };
	   endCity.value = {
	   			 "text" : cityRoute.to
	   };
	   await api();
	 };
	 
	 
	//获取线路接口
	const api = async()=>{
		let res = await apiRoutesSearch({
		    start: startCity.value.text,  
		    end: endCity.value.text,  
		    date: formattedDate.value  
		});
		// console.log(res.data); 
		
		if(res.data.message!="未找到路线"){
			// 从存储中获取现有历史记录
			let history = uni.getStorageSync("historyList");  
			
			// 如果没有历史记录，初始化为空数组  
			if (!Array.isArray(history)) {  
			    history = [];  // 确保历史记录是一个数组  
			    }  
			// 添加新的记录到历史记录中,创建新的记录，包含时间  
			const newRecord = { ...res.data, time: formattedDate.value }; 
			// 将新的记录添加到历史数组中 
			history.push(newRecord); 
			uni.setStorageSync("historyList", history);

		}
		
		//存入数据
		uni.setStorageSync("busList",res);
		uni.setStorageSync("time",formattedDate.value);
		 
		//在接口调用成功后跳转页面  
		uni.navigateTo({  
		    url: "/pages/recommend/recommend"  
		});  
		//加载完成
		uni.hideLoading();
	}
	
	
	getapiCities();
	
</script>

<style lang="scss" scoped>
	.background{
		width: 100%;
		height: 90vh;
		background: linear-gradient(to bottom, #ff9767, #fdf6f6 800rpx);
		padding-top: 50rpx;
		.top{
			width: 700rpx;
			height: 360rpx;
			margin: 0 25rpx 25rpx 25rpx;
			background-color: #ffffff;
			border-radius: 20rpx;
			box-shadow: 0rpx 0rpx 20rpx rgba(0, 0, 0, 0.06);
			.city{
				width: 700rpx;
				height: 120rpx;
				border-radius: 20rpx;
				padding: 0 40rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				.text{
					width: 200rpx;
					height: 140rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 50rpx;
					font-weight: 800;
					.select{
						
						width: 200rpx;
						height: 150rpx;
					}
				}
				img{
					width: 100rpx;
				}

			}
			.data{
				width: 700rpx;
				height: 90rpx;
				padding-left: 40rpx;

				display: flex;
				align-items: center;
				box-sizing: border-box;
				.text{
					font-size: 30rpx;
					font-weight: 800;
					color: #393939;
				}
			}
			.button{
				width: 700rpx;
				height: 90rpx;
				background-color: #ffffff;
				margin-top: 15rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				
				.buttons{
					width: 650rpx;
					height: 90rpx;
					background-color: #fe754b;
					border-radius: 40rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					text{
						font-size: 35rpx;
						font-weight: 700;
						color: #ffffff;
					}
				}
			
			}
			
		}
		.bottom{
			width: 700rpx;
			height: 750rpx;
			margin: 0 25rpx 25rpx 25rpx;
			background-color: #ffffff;
			border-radius: 20rpx;
			position: relative;
			box-shadow: 0rpx 20rpx 50rpx rgba(0, 0, 0, 0.08);
			.title{
				width: 700rpx;
				height: 0rpx;
				display: flex;
				justify-content: space-between;
				.left{
					width: 200rpx;
					height: 30rpx;
					margin: 30rpx 40rpx ;
					display: flex;
					align-items: center;
					font-weight: 800;
					img{
						width: 40rpx;
						margin-left: 10rpx;
					}
				}
				.right{
					width: 200rpx;
					height: 30rpx;
					display: flex;
					align-items: center;
					justify-content: end;
					margin: 30rpx 40rpx ;
					color: #484848;
					text{
						margin-left: 5rpx;
					}
				}
			}
			.tab{
				width: 700rpx;
				height: 200rpx;
				top: 90rpx;
				padding: 0 20rpx;
				background-color: #ffffff;
				position: relative;
				box-sizing: border-box;
				display: grid;
				grid-template-columns: repeat(4,1fr);
				gap: 15rpx;
				.box{
					width: 145rpx;
					height: 70rpx;
					background-color: #f3f3f3;
					// float: left;
					// margin: 12rpx 9rpx;
					border-radius: 15rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			.classlist{
				width: 700rpx;
				height: 80rpx;
				margin-top: 10rpx;
				border-radius: 20rpx;
				display: flex;
				justify-content: space-between;
				.left{
					width: 500rpx;
					height: 75rpx;
					
					display: flex;
					align-items: center;
					padding-left: 40rpx;
					border-radius: 20rpx;
				}
				.right{
					width: 150rpx;
					height: 58rpx;
					
					display: flex;
					align-items: flex-end;
					border-radius: 20rpx;
					font-size: 23rpx;
					text{
						font-weight: 800;
						font-size: 35rpx;
					}
				}
			}
		}

	}
</style>
