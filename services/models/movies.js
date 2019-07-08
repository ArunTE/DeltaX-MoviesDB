const DB = require('../db_connection/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MoviesSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	year_of_release: {
		type: Number,
		required: true
	},
	plot: {
		type: String
	},
	poster: {
		type: String,
		required: true
	},
	actors: [{
		ref : "actors",
		type : ObjectId,
		required: true
	}],
	producer: {
		ref : "producers",
		type : ObjectId,
		required: true
	}
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

const Movies = mongoose.model('Movies', MoviesSchema);

module.exports = Movies;