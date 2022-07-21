<template>
	<view>
		mine: {{ auth.token }} status: {{ auth.isLogin }}
		
		<button @click="login">login</button>
		<button @click="logout">logout</button>
	</view>
</template>

<script setup>
	import useAuth from '@/store/auth.js'
	const auth = useAuth()
	
	const login = () => auth.setToken('token_value')
	const logout = () => auth.clear()
</script>

<style>

</style>
