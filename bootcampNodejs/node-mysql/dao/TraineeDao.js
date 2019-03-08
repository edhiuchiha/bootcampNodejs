var { Trainee, Batch } = require('../db/sequelize');
var logger = require('../util/logging/logging-winston');

exports.getAll = function getAll(whereClause, callback) {
    Trainee.findAll({
            where: whereClause,
            include: Batch
        })
        .then((trainee) => {
            return callback(null, trainee);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })

};

exports.getEmail = function getEmail(data,callback){
    Trainee.findAll({email:[data.email]})
    .then((data)=>{
        return callback(null, data);
    })
    .catch((error)=>{
        return callback(error);
    })
}

exports.getById = function getById(id, callback) {
    Trainee.findById(id)
        .then((trainee) => {
            return callback(null, trainee);
        })
}

exports.addTrainee = function (data, callback) {
    Trainee.create(data)
        .then((trainee) => {
            return callback(null, trainee)
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.editTrainee = function (id, data, callback) {
    Trainee.update(data, {
        where: { traineeId: data.traineeId },
        returning: true,
        plain: true
    })
        .then((result) => {
            logger.info('result update:');
            logger.info(result);
            return callback(null, data);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error)
        })
}

exports.removeTrainee = function (id, callback) {
    Trainee.destroy({
        where: { traineeId: id }
    })
        .then((result) => {
            logger.info('trainee deleted');
            logger.info(result);
            return callback(null, id);
        })
        .catch((error) => {
            logger.error('error while delete traine ' + error);
            return callback(error);
        })
}