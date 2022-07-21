const prefix = 'pin_persist__'

const prefixedKey = key => prefix + key

const set = (key, value) => {
	uni.setStorageSync(prefixedKey(key), value)
	return value
}

const get = (key, def = null) => uni.getStorageSync(prefixedKey(key)) || def

export default {
	prefix,
	prefixedKey,
	set,
	get,
}