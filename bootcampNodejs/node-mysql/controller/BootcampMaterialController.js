var response = require('../model/res');
var BootcampMaterial = require('../dao/BootcampMaterialDao');
var BootcampPeriodDao = require('../dao/BootcampPeriodDao');
var logger = require('../util/logging/logging-winston');

exports.getAll = function(req, res){
    let whereClause = {};
    if(req.query.bootcampPeriodId){
        whereClause.bootcampPeriodId = req.query.bootcampPeriodId;
    }
    if(req.query.materialId){
        whereClause.materialId = req.query.materialId;
    }
    if(req.query.trainerId){
        whereClause.trainerId = req.query.trainerId;
    }
    if(req.query.descriptions){
        whereClause.descriptions = req.query.descriptions;
    }
    if(req.query.activeFlag){
        whereClause.activeFlag = req.query.activeFlag;
    }
    BootcampMaterial.getAll(whereClause,function(error, data){
        if(error){
            logger.error('error while select '+error);
            response.err(error,res);
        }else {
            response.ok(data,res);
        }
    })
}

exports.getById = function(req,res){
    BootcampMaterial.getById(req.params['id'],function(error, data){
        if(error){
            logger.error('error while select By Id '+error);
            response.err(error,res);
        }else{
            response.ok(data, res);
        }
    })
}

exports.insert = function(req,res){
    BootcampMaterial.insert(req.body, function(error, data){
        if(error){
            logger.error('error to insert '+error);
            response.err(error,res);
        }else{
            response.ok('data inserted with id '+data.id, res);
        }
    })
}

exports.edit = function(req, res){
    BootcampMaterial.getById(req.body.id, function(error, data){
        if(error){
            logger.error('error while getById '+error);
            response.err(error,res);
        }else if(data==null){
            response.datanotfound('data not found');
        }else{
            BootcampMaterial.edit(req.body.id, req.body, function(error, data){
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

