var { StudyMaterial } = require('../db/sequelize');
var logger = require('../util/logging/logging-winston');

exports.getAll = function getAll(callback){
    StudyMaterial.findAll()
    .then((studyMaterial)=>{
        return callback(null, studyMaterial);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.getById = function getById(id, callback){
    StudyMaterial.findById(id)
    .then((studyMaterial)=>{
        return callback(null, studyMaterial);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.insert = function create(data, callback){
    StudyMaterial.create(data)
    .then((studyMaterial)=>{
        return callback(null, studyMaterial);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.edit = function edit(id,data, callback){
    StudyMaterial.update(data,{
        where: {materialId: data.materialId},
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