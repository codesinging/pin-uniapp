<template>
	<view>
		status: {{ status.status.loading }}
		
		<button @click="load">load</button>
		<button @click="stop">stop</button>
		
		<navigator url="/packages/default/pages/auth/login?id=2">Login</navigator>
	</view>
</template>

<script setup>
	import useStatus from '@/store/status.js'
	const status = useStatus()

	const load = () => status.set('loading')
	const stop = () => status.unset('loading')
	
	import {page} from '@/common/utils/route.js'
	
	import {onShow} from '@dcloudio/uni-app'
	
	onShow(() => {
		console.log(getCurrentPages());
		console.log(page());
	})
</script>

<style>

</style>
