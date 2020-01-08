const mongoose = require('mongoose')
const Weathers = mongoose.model('Weathers')

const config = require('../config/openweathermap')
const rp = require('request-promise')

exports.get_weather = async (req, res) => {
	rp(config)
		.then(async (repos) => {
			let insertData = {
				data: JSON.stringify(repos)
			}
			//find any record
			let weatherData = await Weathers.findOne()

			// if no, create one, if yes, update the old one
			if (!weatherData) {
				weatherData = new Weathers(insertData)
				weatherData.save()
			} else {
				weatherData.data = JSON.stringify(repos)
				weatherData.save()
			}
			return res.json(repos)
		})
		.catch(async () => {
			// for case that cannot connect to openweathermap
			let weatherData = await Weathers.findOne()
			let repos = JSON.parse(weatherData.data)
			return res.json(repos)
		})
}
