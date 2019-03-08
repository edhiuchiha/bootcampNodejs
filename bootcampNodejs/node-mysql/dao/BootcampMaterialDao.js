var { BootcampMaterial, BootcampPeriod, StudyMaterial, Trainer } = require('../db/sequelize');
var logger = require('../util/logging/logging-winston');

exports.getAll = function getAll(whereClause, callback){
    BootcampMaterial.findAll(
        {
            where: whereClause,
            include: [
                {
                    model: BootcampPeriod
                },
                {
                    model: StudyMaterial
                },
                {
                    model: Trainer
                }
            ]
        }
    )
    .then((bootcampMaterial)=>{
        return callback(null, bootcampMaterial);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.getById = function getById(id, callback){
    BootcampMaterial.findById(id)
    .then((bootcampMaterial)=>{
        return callback(null, bootcampMaterial);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.insert = function create(data, callback){
    BootcampMaterial.create(data)
    .then((bootcampMaterial)=>{
        return callback(null, bootcampMaterial);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.edit = function edit(id,data, callback){
    BootcampMaterial.update(data,{
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