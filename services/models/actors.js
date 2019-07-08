const DB = require('../db_connection/db');
const mongoose = require('mongoose');

const ActorsSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	sex: {
		type: String, 
		required: true,
        enum: ['male', 'female', 'third']
	},
	dob: {
		type: String
	},
	bio: {
		type: String
	}
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

const Actors = mongoose.model('Actors', ActorsSchema);

module.exports = Actors;