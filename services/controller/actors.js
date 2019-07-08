'use strict';

const Actors = require('../repository/actors');

const Response = require('./helpers/response');
const ObjValidator = require('./helpers/obj-validator');

exports.create = async (req, res) => {
    try {
        let createObj = req.body;
        createObj = await ObjValidator.unsetNullKeys(createObj);
        const result = await Actors.create(createObj)
        Response.SuccessResponse(201, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.get = async (req, res) => {
    try {
        const result = await Actors.getAll();
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.getDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Actors.getOne(id);
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        const result = await Actors.update(id, updateObj);
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}


