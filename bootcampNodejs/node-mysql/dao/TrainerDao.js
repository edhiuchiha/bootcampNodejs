var { Trainer } = require('../db/sequelize');
var logger = require('../util/logging/logging-winston');

exports.getAll = function getAll(callback){
    Trainer.findAll()
    .then((trainer)=>{
        return callback(null,trainer);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
};

exports.getById = function getById(id, callback){
    Trainer.findById(id)
    .then((trainer)=>{
        return callback(null,trainer);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.createTrainer = function createTrainer(data, callback){
    Trainer.create(data)
    .then((trainer)=>{
        return callback(null, trainer);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.editTrainer = function editTrainer(id,data, callback){
    Trainer.update(data,{
    where: {trainerId: data.trainerId},
    returning: true,
    plain: true
    })
    .then((trainer)=>{
        logger.info('trainer update:');
        logger.info(trainer);
        return callback(null, trainer);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.removeTrainer = function removeTrainer(id, callback){
    Trainer.destroy({
        where:{trainerId: id}
    })
    .then((trainer)=>{
        logger.info('delete trainer: ');
        logger.info(trainer);
        return callback(null, id);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}