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
		</view>
		<view class="center">
			<view class="box" v-for="item in 10">
				<view class="left">
					<view class="time">
						8:00 - 9:00
					</view>
					<view class="times">
						预计行驶1个小时
					</view>
					<view class="station">
						途径8个站点
					</view>
					<view class="bus">
						豪华大巴
					</view>
				</view>
				<view class="right">
					<view class="recommend">
						时间最短
					</view>
					<view class="price">
						<text>9.9</text>
						元起
					</view>
					<view class="button">
						详情
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.background{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		padding-top: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		position: relative;
		.top{
			width: 700rpx;
			height: 250rpx;
			margin: 0rpx 25rpx 20rpx 25rpx;
			background: linear-gradient(to bottom, #ff855c, #ffffff 300rpx);
			border-radius: 20rpx;
			box-shadow: 0rpx 10rpx 10rpx rgba(0, 0, 0, 0.1);
			position: sticky;
			top: 81rpx;
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
			
		}
		.center{
			
			.box{
				width: 680rpx;
				height: 310rpx;
				padding: 30rpx;
				margin: 18rpx 30rpx;
				box-sizing: border-box;
				background-color: #fff;
				border-radius: 20rpx;
				box-shadow: 0rpx 20rpx 50rpx rgba(0, 0, 0, 0.08);
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
						margin-bottom: 40rpx;
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
					.recommend{
						font-size: 36rpx;
						font-weight: 800;
					}
					.price{
						margin-top: 40rpx;
						font-size: 27rpx;
						color: rgba(0, 0, 0, 0.8);
						text{
							font-size: 40rpx;
							font-weight: 800;
							color: rgba(0, 0, 0, 1);
						}
					}
					.button{
						width: 150rpx;
						height: 70rpx;
						margin: 20rpx 10rpx;
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
</style>
