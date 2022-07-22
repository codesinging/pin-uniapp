<template>
	<view>
		status: {{ status.status.loading }}
		
		<button @click="load">load</button>
		<button @click="stop">stop</button>
	</view>
</template>

<script setup>
	import useStatus from '@/store/status.js'
	const status = useStatus()

	const load = () => status.set('loading')
	const stop = () => status.unset('loading')
	
	
</script>

<style>

</style>
