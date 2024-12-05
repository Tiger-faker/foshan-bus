<template>
	<view class="">

	</view>
</template>

<script setup>

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
