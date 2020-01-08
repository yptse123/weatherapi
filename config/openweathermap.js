module.exports = {
	uri: 'http://api.openweathermap.org/data/2.5/weather',
	qs: {
		id: '1819730',
		appid: 'bfaf4a3cf16c2f210ddf6c142ce0d057'
	},
	headers: {
		'User-Agent': 'Request-Promise'
	},
	json: true // Automatically parses the JSON string in the response
}
