<template>
	<view>
		
	</view>
</template>

<script setup>
	import useAuth from '@/store/auth.js'
	
	const auth = useAuth()
	
	import {page} from '@/common/utils/route.js'
	
	import {onShow} from '@dcloudio/uni-app'
	
	onShow(() => {
		console.log(getCurrentPages());
		console.log(page());
	})
</script>

<style>

</style>
