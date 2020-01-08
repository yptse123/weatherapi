const router = require('express').Router()
const auth = require('../auth')
const userController = require('../../controllers/UserController')

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, userController.create_user)

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, userController.login)

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, userController.get_current)

module.exports = router
