const express = require('express')
const router = express.Router()

router.use('/users', require('./users'))
router.use('/weathers', require('./weathers'))

module.exports = router
