function setScript({ code = '', needRemove = true } = params) {
	let textNode = document.createTextNode(code)
	let script = document.createElement('script')

	script.appendChild(textNode)
	script.remove()

	let parentNode = document.head || document.documentElement

	parentNode.appendChild(script)
	needRemove && parentNode.removeChild(script)
}

setScript({
	// code: `alert ('hello world content')`
})
