var response = require('../model/res');
var TraineeDao = require('../dao/TraineeDao');
var logger = require('../util/logging/logging-winston');
var util = require('util');

exports.getTraineeAll = function(req, res) {
    let whereClause = {};
    if(req.query.firstName){
        whereClause.firstName = req.query.firstName;
    }
    if(req.query.lastName){
        whereClause.lastName = req.query.lastName;
    }
    if(req.query.email){
        whereClause.email = req.query.email;
    }
    if(req.query.phone){
        whereClause.phone = req.query.phone;
    }
    if(req.query.addreess){
        whereClause.addreess = req.query.addreess;
    }
    if(req.query.batchId){
        whereClause.batchId = req.query.batchId;
    }
    if(req.query.activeFlag){
        whereClause.activeFlag = req.query.activeFlag;
    }
    TraineeDao.getAll(whereClause, function (error, data){
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
    TraineeDao.getById(req.params['id'], function(error, data){
        if(error){
            logger.error('error while getById'+error)
            response.err(error, res);
        }else{
            response.ok(data, res);
        }
    });
}

exports.addTrainee = function(req, res){
    logger.info('request for insert');
    logger.debug(req.body);

    TraineeDao.addTrainee(req.body, function(error, data){
        if(error){
            logger.error('error while insert trainee'+error);
            response.err(error, res);
        }else{
            response.ok('traine inserted with ID '+data.traineeId, res);
        }
    })
}

exports.editTrainee = function(req, res){
    logger.info('request for update');
    logger.debug(req.body);
    TraineeDao.getById(req.body.traineeId, function(error, data){
        if(error){
            logger.error('error while getById '+error);
            response.err(error, res);
        }else if(data==null){
            response.datanotfound('data trainee not found', res);
        }else {
            TraineeDao.editTrainee(req.body.traineeId, req.body, function(error, data){
                if(error){
                    logger.error('error while update trainee '+error);
                    response.err(error, res);
                }else{
                    response.ok('data trainee updated where id '+data.traineeId, res);
                }
            })
        }
    })
}

exports.removeTrainee = function(req, res){
    logger.info('request for delete');
    logger.debug(req.params);
    TraineeDao.getById(req.params['id'], function(error, data){
        if(error){
            logger.info('error while getById '+error);
            response.err(error, res);
        }else if(data==null){
            response.datanotfound('data not found', res);
        }else {
            TraineeDao.removeTrainee(req.params['id'], function(error, data){
                if(error){
                    logger.info('error call delete'+error);
                    response.err(error, res);
                }else {
                    response.ok('trainee removed where id '+data.traineeId, res);
                }
            })
        }
    })
}

exports.getEmail = function(req,res){
TraineeDao.getEmail(req.body.email,function(error, data){
        if(error){
            response.err(error);
        }else{
            response.ok(data,res);  
        }
    })
}