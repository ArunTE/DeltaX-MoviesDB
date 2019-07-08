'use strict';

const Movies = require('../repository/movies');
const Actors = require('../repository/actors');
const Producers = require('../repository/producers');

const Response = require('./helpers/response');
const ObjValidator = require('./helpers/obj-validator');

const httperror = require('http-errors');

exports.create = async (req, res) => {
    try {
        let createObj = req.body;
        let actors = await Actors.getForArrayOfIds(createObj.actors);
        if (actors.length !== createObj.actors.length) {
            throw new httperror(422, 'List contains some non-existing actor ids');
        }
        let producer = await Producers.getOne(createObj.producer, 'name');
        createObj = await ObjValidator.unsetNullKeys(createObj);
        console.log("createObj: ", createObj)
        let result = await Movies.create(createObj);
        result['actors'] = actors;
        result['producer'] = producer;
        Response.SuccessResponse(201, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.get = async (req, res) => {
    try {
        let list = await Movies.getAll();
        let promise = list.map(async (e) => {
            let actors =  await Actors.getForArrayOfIds(e.actors);
            let producer = await Producers.getOne(e.producer, 'name');
            e['actors'] = actors;
            e['producer'] = producer;
            return e;
        });
        let result = await Promise.all(promise);
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        let actorsCheck = await Actors.getForArrayOfIds(updateObj.actors);
        if (actorsCheck.length !== updateObj.actors.length) {
            throw new httperror(422, 'List contains some non-existing actor ids');
        }
        await Producers.getOne(updateObj.producer, 'name');
        let result = await Movies.update(id, updateObj);
        let actors = await Actors.getForArrayOfIds(result.actors);
        let producer = await Producers.getOne(result.producer, 'name');
        result['actors'] = actors;
        result['producer'] = producer;
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Movies.remove(id);
        Response.SuccessResponse(200, result, res)
    } catch (error) {
        Response.ErrorResponse(error, res)
    }
}

