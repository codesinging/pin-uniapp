import {
	defineStore
} from 'pinia'
import persist from '@/common/utils/persist.js'

const useAuth = defineStore('auth', {
	state: () => ({
		user: persist.get('user'),
		token: persist.get('token'),
	}),

	getters: {
		isLogin: state => state.user !== null && state.token !== null,
	},

	actions: {
		setUser(user) {
			this.user = persist.set('user', user)
		},
		updateUser(user) {
			Object.assign(this.user, persist.set('user', user))
		},
		setToken(token) {
			this.token = persist.set('token', token)
		},
		clear() {
			this.user = persist.remove('user')
			this.token = persist.remove('token')
		}
	},
})

export default useAuth
