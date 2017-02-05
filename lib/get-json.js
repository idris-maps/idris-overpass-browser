module.exports = function(url, callback) {
	var req = new XMLHttpRequest()
	req.open('GET', url, true)
	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
			callback(null, JSON.parse(req.responseText))
		} else {
			callback('Status code: ' + req.status)
		}
	}
	req.onerror = function() {
		callback('Can not connect to ' + url)
	}
	req.send()
}





