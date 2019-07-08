'use strict';

const Producers = require('../repository/producers');

const Response = require('./helpers/response');
const ObjValidator = require('./helpers/obj-validator');

exports.create = async (req, res) => {
    try {
        let createObj = req.body;
        createObj = await ObjValidator.unsetNullKeys(createObj);
        const result = await Producers.create(createObj)
        Response.SuccessResponse(201, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.get = async (req, res) => {
    try {
        const result = await Producers.getAll();
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.getDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Producers.getOne(id);
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        const result = await Producers.update(id, updateObj);
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}


