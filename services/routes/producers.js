module.exports = (app) => {

    const ReqValidator = require('./helpers/validators/producers');

    const Producers = require('../controller/producers');
    
    app.post('/api/v1/producers', ReqValidator.ProducerCreateReq, Producers.create);
    app.get('/api/v1/producers', Producers.get);
    app.get('/api/v1/producers/:id', ReqValidator.ProducerDetailsReq, Producers.getDetails);
    app.put('/api/v1/producers/:id', ReqValidator.ProducerUpdateReq, Producers.update);
};