<template>
	<view class="background">
		<view class="top">
			<view class="city">
				<view class="text">
					佛山
				</view>
				<view class="text">
					<img src="../../static/icons/111.png" alt="" />
				</view>
				<view class="text">
					广州
				</view>
			</view>
			<view class="data">
				<view class="text">
					今天 11月27日
					<text>出发</text>
				</view>
			</view>
			<view class="button">
				<view class="buttons" @click="toRecommend()">
					<text>查看班次</text>
				</view>
			</view>

		</view>
		<view class="center">

		</view>
		<view class="bottom">
			<view class="title">
				<text>热门站点</text>
				<img src="../../static/icons/hot.png" alt="" />
			</view>
			<view class="tab">
				<view class="box" v-for="item in 8">
					佛山市
				</view>
			</view>
			<view class="classlist" v-for="item in 6">
				<view class="left">
					佛山祖庙 - 广州珠江新城
				</view>
				<view class="right">
					<text>9.9</text>
					&#8197 元起
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const title = ref("cnm");
	
	const toRecommend = ()=>{
		uni.switchTab({
			url:"/pages/recommend/recommend"
		})
	}
	
</script>

<style lang="scss" scoped>
	.background{
		width: 100%;
		height: 90vh;
		background: linear-gradient(to bottom, #ff9767, #fdf6f6 800rpx);
		padding-top: 50rpx;
		.top{
			width: 700rpx;
			height: 400rpx;
			margin: 0 25rpx 25rpx 25rpx;
			background-color: #ffffff;
			border-radius: 20rpx;
			box-shadow: 0rpx 0rpx 20rpx rgba(0, 0, 0, 0.06);
			.city{
				width: 700rpx;
				height: 140rpx;
				border-radius: 20rpx;

				padding: 0 40rpx;
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
				padding-left: 40rpx;

				display: flex;
				align-items: center;
				box-sizing: border-box;
				.text{
					font-size: 35rpx;
					font-weight: 800;
				}
			}
			.button{
				width: 700rpx;
				height: 90rpx;
				background-color: #ffffff;
				margin-top: 30rpx;
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
		.center{
			
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
				width: 200rpx;
				height: 30rpx;
				margin: 30rpx 40rpx ;
				position: absolute;
				display: flex;
				align-items: center;
				font-weight: 800;
				img{
					width: 40rpx;
					margin-left: 10rpx;
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
				.box{
					width: 145rpx;
					height: 70rpx;
					background-color: #f3f3f3;
					float: left;
					margin: 12rpx 10rpx;
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
