<template>
	<view class="background">
		<view class="popup">
			<!-- 普通弹窗 -->
			<uni-popup 
			ref="popup"  
			type="message"
			>
				<uni-popup-message type="error" message="账号或密码错误" :duration="3000">	
				</uni-popup-message>
			</uni-popup>
		</view>
		<view class="title">
			智能巴士票务系统
		</view>
		<view class="center">
			<view class="top">
				登录
			</view>
			<view class="text">
				账号
			</view>
			<view class="input">
				<input 
				class="uni-input" 
				focus 
				placeholder="请输入账号" 
				@input="name"
				/>
			</view>
			<view class="text">
				密码
			</view>
			<view class="input">
				<input 
				class="uni-input" 
				type="password" 
				focus 
				placeholder="请输入密码" 
				@input="password"
				/>
			</view>
			<view class="button">
				<button type="warn" @click="toIndex();loading()">登录</button>
			</view>
		</view>
		<view class="register" @click="toRegister()">
			注册...
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { apiLogin } from '@/api/apis.js';

	const names =ref(); //账号
	const passwords=ref();  //密码
	const popup = ref(null);  //错误弹出层
	
	const name=(e)=>{
		names.value = e.detail.value;

	}
	const password=(e)=>{
		passwords.value = e.detail.value;
	}
	
	const loading =()=>{   //加载弹窗
		uni.showLoading({
			title:"登录中",
			mask:true
		});
	}
	
	const toIndex = async ()=>{      //登录按钮
		let res = await apiLogin({
			username: names.value,
			password: passwords.value
		});
		console.log(res.data);
		uni.setStorageSync("user",res.data.data.user);
		uni.setStorageSync("token",res.data.data.token);
		if(res.statusCode==200){
			uni.switchTab({  
				url: '/pages/index/index'
			});
			uni.hideLoading();
		}
		else{
			popup.value.open(); //错误弹出层
			uni.hideLoading();
		}
		
	}
	
	const toRegister =()=>{
		uni.navigateTo({
			url:"/pages/register/register"
		});
	}
	
</script>

<style lang="scss" scoped>
	.background{
		width: 100%;
		height: 100vh;
		background: linear-gradient(to bottom, #ff9767, #fdf6f6 800rpx);
		padding-top: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 350rpx;
		box-sizing: border-box;
		.title{
			font-weight: 800;
			font-size: 50rpx;
		}
		.center{
			width: 600rpx;
			height: 600rpx;
			margin-top: 150rpx;
			padding: 50rpx 30rpx;
			background-color: #fff;
			border-radius: 15rpx;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			box-shadow: 0rpx 20rpx 50rpx rgba(0, 0, 0, 0.08);
			.top{
				width: 550rpx;
				height: 70rpx;
				display: flex;
				justify-content: center;
				font-size: 32rpx;
				font-weight: 800;
			}
			.text{
				height: 50rpx;
				padding-left: 5rpx;
			}
			.input{
				height: 100rpx;
				input{
					background-color: #efefef;
					border-radius: 10rpx;
					height: 60rpx;
					padding-left: 20rpx;
				}
				
			}
			.button{
				height: 100rpx;
				margin-top: 15rpx;
			}
			
		}
		.register{
			width: 540rpx;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: right;
			margin-top: 10rpx;
			font-size: 30rpx;
			color: #818181;
		}
	}
</style>
