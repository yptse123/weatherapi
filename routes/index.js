const express = require('express')
const router = express.Router()

router.use('/api', require('./api'))
router.get('/', function (req, res) {
	res.send('Welcome to my weather api');
});

module.exports = router
