<template>
	<view>
		home: {{ auth.token }}
	</view>
</template>

<script setup>
	import useAuth from '@/store/auth.js'
	const auth = useAuth()
</script>

<style>

</style>
