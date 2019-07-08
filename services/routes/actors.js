module.exports = (app) => {

    const ReqValidator = require('./helpers/validators/actors');

    const Actors = require('../controller/actors');
    
    app.post('/api/v1/actors', ReqValidator.actorCreateReq, Actors.create);
    app.get('/api/v1/actors', Actors.get);
    app.get('/api/v1/actors/:id', ReqValidator.actorDetailsReq, Actors.getDetails);
    app.put('/api/v1/actors/:id', ReqValidator.actorUpdateReq, Actors.update);
};