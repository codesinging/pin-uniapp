const prefix = 'pin_persist__'

const prefixedKey = key => prefix + key

const set = (key, value) => {
	uni.setStorageSync(prefixedKey(key), value)
	return value
}

const get = (key, def = null) => uni.getStorageSync(prefixedKey(key)) || def

const remove = key => {
	uni.removeStorageSync(prefixedKey(key))
	return null
}

export default {
	prefix,
	prefixedKey,
	set,
	get,
	remove,
}
