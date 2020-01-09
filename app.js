const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const errorHandler = require('errorhandler')

// const config = {
// 	db: 'mongodb://localhost:27017,localhost:27027,localhost:27037/passport-tutorial?replicaSet=TestReplicaSet'
// }

const config = {
	db: 'mongodb+srv://yptse123:abcd1234@gamesite-ybnqo.azure.mongodb.net/weather'
}

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production'

//Initiate our app
const app = express()

//Configure our app
app.use(cors())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
	secret: 'weatherapi',
	cookie: {
		maxAge: 60000
	},
	resave: false,
	saveUninitialized: false
}))

if (!isProduction) {
	app.use(errorHandler())
}

//Configure Mongoose
mongoose.set('useCreateIndex', true)
mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('debug', true)

//Models & routes
require('./models')
require('./config/passport')
app.use(require('./routes'))

//Error handlers & middlewares
app.use((err, req, res) => {
	res.status(err.status || 500)

	res.json({
		errors: {
			message: err.message,
			error: isProduction ? err: {},
		},
	})
})

app.listen(8080, () => console.log('Server running on http://localhost:8080/'))

module.exports = app; //for testing
