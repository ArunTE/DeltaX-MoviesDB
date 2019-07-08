const Joi = require('joi');

const error = require('./error-response');

const actorCreateReq = (req, res, next) => {
    const schema = {
        name: Joi.string().required(),
        sex: Joi.string().valid('male', 'female', 'third').required(),
        dob: Joi.string().allow(null, ''),
        bio: Joi.string().allow(null, '')
    };
    const validation = Joi.validate(req.body, schema);
    if (validation.error) {
        error(validation.error, res)
    } else {
        next()
    }
}

const actorDetailsReq = (req, res, next) => {
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

const actorUpdateReq = (req, res, next) => {
    const schema1 = {
        id: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    };
    const schema2 = {
        name: Joi.string().required(),
        sex: Joi.string().valid('male', 'female', 'third').required(),
        dob: Joi.string().allow(null, ''),
        bio: Joi.string().allow(null, '')
    };
    const validation1 = Joi.validate(req.params, schema1);
    const validation2 = Joi.validate(req.body, schema2);
    if (validation1.error || validation2.error) {
        error(validation1.error || validation2.error, res)
    } else {
        next()
    }
}

module.exports = {
    actorCreateReq: actorCreateReq,
    actorDetailsReq: actorDetailsReq,
    actorUpdateReq: actorUpdateReq,
};
