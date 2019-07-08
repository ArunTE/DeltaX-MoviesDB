'use strict';

const env_variables = {
    'port': process.env.PORT || 3000,
    'db_host': process.env.HOST || 'localhost',
    'db_name': process.env.DB_NAME || 'deltax'
}

module.exports = {
	env_variables: env_variables
}