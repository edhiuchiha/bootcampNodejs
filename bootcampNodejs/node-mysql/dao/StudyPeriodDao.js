var { StudyPeriod } = require('../db/sequelize');
var logger = require('../util/logging/logging-winston');

exports.getAll = function getAll(callback){
    StudyPeriod.findAll()
    .then((studyPeriod)=>{
        return callback(null, studyPeriod);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.getById = function getById(id, callback){
    StudyPeriod.findById(id)
    .then((studyPeriod)=>{
        return callback(null, studyPeriod);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.insert = function create(data, callback){
    StudyPeriod.create(data)
    .then((studyPeriod)=>{
        return callback(null, studyPeriod);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.edit = function edit(id,data, callback){
    StudyPeriod.update(data,{
        where: {weekId: data.weekId},
        returning: true,
        plain: true
    })
    .then((result)=>{
        logger.info('result updated');
        logger.info(result);
        return callback(null, data);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}