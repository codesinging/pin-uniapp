export const queries = params => {
	let str = Object.keys(params).map(key => key + '=' + params[key]).join('&')
	return str ? ('?' + str) : ''
}

export const go = (url, params = {}) => {
	if (url.substr(0, 12) === '/pages/tabs/') {
		uni.switchTab({
			url
		})
	} else {
		uni.navigateTo({
			url: url + queries(params)
		})
	}
}

export const redirect = (url, params = {}) => {
	uni.redirectTo({
		url: url + queries(params)
	})
}

export const page = (delta = 1) => {
	const pages = getCurrentPages()
	return pages[pages.length - delta]
}

export const back = (delta = 1) => {
	uni.navigateBack({
		delta
	})
}

export const goBack = (delta = 1) => {
	go(page(delta).$page.fullPath)
}

export const redirectBack = (delta = 1) => {
	redirect(page(delta).$page.fullPath)
}
