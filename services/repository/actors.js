const Actors = require('../models/actors');

const httperror = require('http-errors');

module.exports.create = async function create(createObj) {
    try {
        const result = (await Actors.create(createObj)).toObject();
        return result;
    } catch (error){
        throw error;
    }
}

module.exports.getAll = async function getAll() {
    try {
        const condition = {};
        const fields = {
            name: 1
        };
        const result = await Actors.find(condition, fields).lean();
        return result;
    } catch (error){
        throw error;
    }
}

module.exports.getForArrayOfIds = async function getForArrayOfIds(ids) {
    try {
        const condition = {
            '_id': {$in: ids}
        };
        const fields = {
            name: 1
        };
        const result = await Actors.find(condition, fields).lean();
        return result;
    } catch (error){
        throw error;
    }
}

module.exports.getOne = async function getOne(id) {
    try {
        const condition = {
            '_id': id
        };
        const result = await Actors.findOne(condition).lean();
        if (result) {
            return result;
        } else {
            throw new httperror(422, 'Actor id does not exists');
        }
    } catch (error){
        throw error;
    }
}

module.exports.update = async function update(id, updateObj) {
    try {
        const condition = {
            '_id': id
        };
        const updateQuery = {
            $set: {}
        };
        for (let key in updateObj) {
            if (updateObj[key]) {
                updateQuery['$set'][key] = updateObj[key];
            } else {
                updateQuery['$unset'] = {};
                updateQuery['$unset'][key] = 1
            }
        }
        const result = await Actors.findOneAndUpdate(condition, updateQuery, { new: true }).lean();
        if(result){
            return result;
        }else{
            throw new httperror(404, `Actor ID does not exist`);
        }
    } catch (error){
        throw error;
    }
}

