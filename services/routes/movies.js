module.exports = (app) => {

    const ReqValidator = require('./helpers/validators/movies');

    const Movies = require('../controller/movies');

    app.post('/api/v1/movies', ReqValidator.movieCreateReq, Movies.create);
    app.get('/api/v1/movies', Movies.get);
    app.put('/api/v1/movies/:id', ReqValidator.movieUpdateReq, Movies.update);
    app.delete('/api/v1/movies/:id', ReqValidator.movieDeleteReq, Movies.delete);
};