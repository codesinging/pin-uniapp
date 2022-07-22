<template>
	<view>Login</view>
</template>

<script setup>
	import {page} from '@/common/utils/route.js'
	
	import {onShow} from '@dcloudio/uni-app'
	
	onShow(() => {
		console.log(getCurrentPages());
		console.log(page());
	})
</script>

<style>
</style>