var response = require('../model/res');
var BootcampPeriod = require('../dao/BootcampPeriodDao');
var logger = require('../util/logging/logging-winston');

exports.getAll = function(req, res){
    let whereClause= {};
    if(req.query.batchId){
        whereClause.batchId = req.query.batchId;
    }
    if(req.query.weekId){
        whereClause.weekId = req.query.weekId;
    }
    if(req.query.descriptions){
        whereClause.descriptions = req.query.descriptions;
    }
    if(req.query.activeFlag){
        whereClause.activeFlag = req.query.activeFlag;
    }
    BootcampPeriod.getAll(whereClause,function(error, data){
        if(error){
            logger.error('error while select '+error);
            response.err(error,res);
        }else {
            response.ok(data,res);
        }
    })
}

exports.getById = function(req,res){
    BootcampPeriod.getById(req.params['id'],function(error, data){
        if(error){
            logger.error('error while select By Id '+error);
            response.err(error,res);
        }else{
            response.ok(data, res);
        }
    })
}

exports.insert = function(req,res){
    BootcampPeriod.insert(req.body, function(error, data){
        if(error){
            logger.error('error to insert '+error);
            response.err(error,res);
        }else{
            response.ok('data inserted with id '+data.id, res);
        }
    })
}

exports.edit = function(req, res){
    BootcampPeriod.getById(req.body.id, function(error, data){
        if(error){
            logger.error('error while getById '+error);
            response.err(error,res);
        }else if(data==null){
            response.datanotfound('data not found');
        }else{
            BootcampPeriod.edit(req.body.id, req.body, function(error, data){
                if(error){
                    logger.error('error while edit data '+error);
                    response.err(error,res);
                }else{
                    response.ok('data updated where id '+data.id, res);
                }
            })
        }
    })
}

