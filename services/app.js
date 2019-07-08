const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const routes = require('./routes/index');

const CONFIG = require('./config');

const port = CONFIG.env_variables.port;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
	res.send('api running');
});

routes(app);

app.listen(port, () => console.log('Listening on port '+port));


