<template>
	<view class="background">
		<view class="top">
			<view class="logo">
<<<<<<< HEAD
				<img :src="userList.profile.avatar" alt="" />
			</view>
			<view class="name">
				{{userList.username}}
			</view>
		</view>
		<view class="center">
			<view class="box" @click="toHistory()">
				历史搜索
			</view>
			<view class="box" @click="toLogin()">
=======
				<img src="../../static/icons/hot.png" alt="" />
			</view>
			<view class="name">
				王一博
			</view>
		</view>
		<view class="center">
			<view class="box">
				历史搜索
			</view>
			<view class="box">
>>>>>>> b6966335321cf364f74b8eea23da82fe294f04e9
				退出登录
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const userList = uni.getStorageSync('user')|| [];
	
	console.log("用户数据：",userList);
		 
	 const toLogin=()=>{
		 uni.navigateTo({
		 	url:"/pages/login/login"
		 });
	 }
	 
	 const toHistory=()=>{
	 		 uni.navigateTo({
	 		 	url:"/pages/history/history"
	 		 });
	 }
	 
	 
	 
</script>

<style lang="scss" scoped>
	.background{
		width: 100%;
		height: 90vh;
		background: linear-gradient(to bottom, #ff9767, #fdf6f6 800rpx);
		box-sizing: border-box;
		// padding-top: 200rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.top{
			width: 100%;
			height: 400rpx;
			display: flex;
			align-items: center;
			flex-direction: column;
			.logo{
				width: 250rpx;
				height: 250rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fff;
				border-radius: 150rpx;
				margin-bottom: 50rpx;
				img{
					width: 200rpx;
					height: 200rpx;
				}
			}
			.name{
				width:100%;
				height: 100rpx;
				font-size: 50rpx;
				font-weight: 800;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.center{
			width: 200rpx;
			height: 300rpx;
			// background-color: #fff;
			.box{
				width: 200rpx;
				height: 150rpx;
				display: flex;
				box-sizing: border-box;
				padding-top: 90rpx;
				justify-content: center;
				border-bottom: 1rpx solid #d0cbcb;
				font-size: 30rpx;
			}
		}
	}
</style>
