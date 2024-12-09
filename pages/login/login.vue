<template>
<<<<<<< HEAD
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
				<button type="warn" @click="toIndex">登录</button>
			</view>
		</view>
=======
<<<<<<< HEAD
	<view class="background">
		
=======
	<view class="">

>>>>>>> 2eca9a224b5e4dd3f763de704ad1d466a6520712
>>>>>>> 2dc376fe898ac929468708fed15171f00524e3fd
	</view>
</template>

<script setup>
<<<<<<< HEAD
import { ref } from 'vue';
import { apiLogin } from '@/api/apis.js';

	const names =ref();
	const passwords=ref();
	const popup = ref(null);
	
	const name=(e)=>{
		names.value = e.detail.value;

	}
	
	const password=(e)=>{
		passwords.value = e.detail.value;
	}
	
	const toIndex = async ()=>{
		let res = await apiLogin({
			username: "coya",
			password: "1111111"
		});
		
		console.log(res.statusCode);
		if(res.statusCode==200){
			uni.switchTab({
				url: '/pages/index/index'
			});
		}
		else{
			popup.value.open();
		}
		
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
	}
=======

</script>

<style lang="scss" scoped>
<<<<<<< HEAD
	.background{
		width: 100%;
		height: 1400rpx;
		background: linear-gradient(to bottom, #ff9767, #fdf6f6 800rpx);
		padding-top: 50rpx;
	}
=======
	
>>>>>>> 2eca9a224b5e4dd3f763de704ad1d466a6520712
>>>>>>> 2dc376fe898ac929468708fed15171f00524e3fd
</style>
