var response = require('../model/res');
var TrainerDao = require('../dao/TrainerDao');
var logger = require('../util/logging/logging-winston');
var util = require('util');

exports.getTrainerAll = function(req, res) {
    TrainerDao.getAll(function (error, data){
        if(error){
            logger.error('error while select'+error)
            response.err(error, res);
        } else{
            // return res.json(rows);
            response.ok(data, res);
        }
    });
};

exports.getById = function(req, res){
    TrainerDao.getById(req.params['id'], function(error, data){
        if(error){
            logger.error('error while getById '+error);
            response.err(error,res);
        }else {
            response.ok(data, res);
        }
    })
}

exports.createTrainer = function(req,res){
    TrainerDao.createTrainer(req.body, function(error, data){
        if(error){
            logger.error('error while create '+error);
            response.err(error,res);
        }else{
            response.ok('trainer inserted successful'+data.trainerId,res);
        }
    })
}

exports.editTrainer = function(req,res){
    TrainerDao.getById(req.body.trainerId, function(error,data){
        if(error){
            logger.error('error while getById '+error);
            response.err(error,res);
        }else if(data==null){
            response.datanotfound('data trainer not found ');
        }else{
            TrainerDao.editTrainer(req.body.trainerId, req.body, function(error,data){
                if(error){
                    logger.error('error while update '+error);
                    response.err(error,res);
                }else {
                    response.ok('trainer updated where id '+data.trainerId, res);
                }
            })
        }
    })
}

exports.removeTrainer = function(req,res){
    logger.info('request for delete');
    logger.debug(req.params);
    TrainerDao.getById(req.params['id'], function(error, data){
        if(error){
            logger.error('error while getById '+error);
            response.err(error,res);
        }else if(data==null){
            response.datanotfound('data trainer not found ', res);
        }else{
            TrainerDao.removeTrainer(req.params['id']), function(error,res){
                if(error){
                    logger.error('error while delete data triner'+error);
                    response.err(error,res);
                }else {
                    response.ok('data trainer deleted where id '+data.trainerId, res);
                }
            }
        }
    })
}