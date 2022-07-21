<template>
	<view>
		{{ message }}
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	
	const message = ref('hello')
</script>

<style>

</style>
