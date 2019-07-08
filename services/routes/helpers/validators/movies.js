const Joi = require('joi');

const error = require('./error-response');

const movieCreateReq = (req, res, next) => {
    const schema = {
        name: Joi.string().required(),
        year_of_release: Joi.number().required(),
        plot: Joi.string().allow(null, ''),
        poster: Joi.string().required(),
        actors: Joi.array().items(Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)).unique().min(1).required(),
        producer: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i).required()
    };
    const validation = Joi.validate(req.body, schema);
    if (validation.error) {
        error(validation.error, res)
    } else {
        next()
    }
}

const movieUpdateReq = (req, res, next) => {
    const schema1 = {
        id: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    };
    const schema2 = {
        name: Joi.string().required(),
        year_of_release: Joi.number().required(),
        plot: Joi.string().allow(null, ''),
        poster: Joi.string().required(),
        actors: Joi.array().items(Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)).unique().min(1).required(),
        producer: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i).required()
    };
    const validation1 = Joi.validate(req.params, schema1);
    const validation2 = Joi.validate(req.body, schema2);
    if (validation1.error || validation2.error) {
        error(validation1.error || validation2.error, res)
    } else {
        next()
    }
}

const movieDeleteReq = (req, res, next) => {
    const schema = {
        id: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    };
    const validation = Joi.validate(req.params, schema);
    if (validation.error) {
        error(validation.error, res)
    } else {
        next()
    }
}

module.exports = {
    movieCreateReq: movieCreateReq,
    movieUpdateReq: movieUpdateReq,
    movieDeleteReq: movieDeleteReq
};
