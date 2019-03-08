var response = require('../model/res');
var StudyPeriod = require('../dao/StudyPeriodDao');
var logger = require('../util/logging/logging-winston');
var util = require('util');

exports.getAll = function(req, res){
    StudyPeriod.getAll(function(error, data){
        if(error){
            logger.error('error while select '+error);
            response.err(error,res);
        }else {
            response.ok(data,res);
        }
    })
}

exports.getById = function(req,res){
    StudyPeriod.getById(req.params['id'],function(error, data){
        if(error){
            logger.error('error while select By Id '+error);
            response.err(error,res);
        }else{
            response.ok(data, res);
        }
    })
}

exports.insert = function(req,res){
    StudyPeriod.insert(req.body, function(error, data){
        if(error){
            logger.error('error to insert '+error);
            response.err(error,res);
        }else{
            response.ok('data inserted with id '+data.weekId, res);
        }
    })
}

exports.edit = function(req, res){
    StudyPeriod.getById(req.body.weekId, function(error, data){
        if(error){
            logger.error('error while getById '+error);
            response.err(error,res);
        }else if(data==null){
            response.datanotfound('data not found');
        }else{
            StudyPeriod.edit(req.body.weekId, req.body, function(error, data){
                if(error){
                    logger.error('error while edit data '+error);
                    response.err(error,res);
                }else{
                    response.ok('data updated where id '+data.weekId, res);
                }
            })
        }
    })
}

