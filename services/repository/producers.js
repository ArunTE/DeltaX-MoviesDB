const Producers = require('../models/producers');

const httperror = require('http-errors');

module.exports.create = async function create(createObj) {
    try {
        const result = (await Producers.create(createObj)).toObject();
        return result;
    } catch (error){
        throw error;
    }
}

module.exports.getAll = async function get() {
    try {
        const condition = {};
        const fields = {
            name: 1
        };
        const result = await Producers.find(condition, fields).lean();
        return result;
    } catch (error){
        throw error;
    }
}

module.exports.getOne = async function getOne(id, fieldName) {
    try {
        const condition = {
            '_id': id
        };
        const fields = {};
        if (fieldName) {
            fields[fieldName] = 1;
        }
        const result = await Producers.findOne(condition, fields).lean();
        if (result) {
            return result;
        } else {
            throw new httperror(422, 'Producer id does not exists');
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
        const result = await Producers.findOneAndUpdate(condition, updateQuery, { new: true }).lean();
        if(result){
            return result;
        }else{
            throw new httperror(404, `Producer ID does not exist`);
        }
    } catch (error){
        throw error;
    }
}