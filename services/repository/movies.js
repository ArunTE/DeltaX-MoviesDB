const Movies = require('../models/movies');

const httperror = require('http-errors');

module.exports.create = async function create(createObj) {
    try {
        const result = (await Movies.create(createObj)).toObject();
        return result;
    } catch (error){
        throw error;
    }
}

module.exports.getAll = async function getAll() {
    try {
        const result = await Movies.find().lean();
        return result;
    } catch (error){
        throw error;
    }
}

module.exports.getOne = async function getOne(id) {
    try {
        const condition = {
            '_id': id
        }
        const result = await Movies.findOne(condition).lean();
        return result;
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
        const result = await Movies.findOneAndUpdate(condition, updateQuery, { new: true }).lean();
        if(result){
            return result;
        }else{
            throw new httperror(404, `Movie ID does not exist`);
        }
    } catch (error){
        throw error;
    }
}

module.exports.remove = async function remove(id) {
    try {
        const condition = {
            '_id': id
        }
        const result = await Movies.remove(condition);
        return result;
    } catch (error){
        throw error;
    }
}
