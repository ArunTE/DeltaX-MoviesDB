const actors = require('./actors');
const producers = require('./producers');
const movies = require('./movies')

module.exports = function(app) {
  actors(app);
  producers(app);
  movies(app);
};
