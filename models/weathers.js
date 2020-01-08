const mongoose = require('mongoose')

const {
	Schema
} = mongoose

const WeathersSchema = new Schema({
	data: String
})

mongoose.model('Weathers', WeathersSchema)
