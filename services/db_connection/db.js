'use strict';

const mongoose = require('mongoose');
const CONFIG = require('../config');

mongoose.Promise = global.Promise;
const connection = mongoose.connect(`mongodb://${CONFIG.env_variables.db_host}/${CONFIG.env_variables.db_name}`, { useNewUrlParser: true });

module.exports = {
	connection : connection
};
