const router = require('express').Router()
const auth = require('../auth')
const weatherController = require('../../controllers/WeatherController')

//GET current route (required, only authenticated users have access)
router.get('/', auth.required, weatherController.get_weather)

module.exports = router
