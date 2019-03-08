var { BootcampPeriod, Batch, StudyPeriod } = require('../db/sequelize');
var logger = require('../util/logging/logging-winston');

exports.getAll = function getAll(whereClause,callback){
    BootcampPeriod.findAll({
        where:whereClause,
        include:[ {
            model: Batch},{
                model: StudyPeriod
            }]
    })
    .then((bootcampPeriod)=>{
        return callback(null, bootcampPeriod);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.getById = function getById(id, callback){
    BootcampPeriod.findById(id)
    .then((bootcampPeriod)=>{
        return callback(null, bootcampPeriod);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.insert = function create(data, callback){
    BootcampPeriod.create(data)
    .then((bootcampPeriod)=>{
        return callback(null, bootcampPeriod);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.edit = function edit(id,data, callback){
    BootcampPeriod.update(data,{
        where: {id: data.id},
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