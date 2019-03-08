var response = require('../model/res');
var StudyMaterial = require('../dao/StudyMaterialDao');
var logger = require('../util/logging/logging-winston');
var util = require('util');

exports.getAll = function(req, res){
    StudyMaterial.getAll(function(error, data){
        if(error){
            logger.error('error while select '+error);
            response.err(error,res);
        }else {
            response.ok(data,res);
        }
    })
}

exports.getById = function(req,res){
    StudyMaterial.getById(req.params['id'],function(error, data){
        if(error){
            logger.error('error while select By Id '+error);
            response.err(error,res);
        }else{
            response.ok(data, res);
        }
    })
}

exports.insert = function(req,res){
    StudyMaterial.insert(req.body, function(error, data){
        if(error){
            logger.error('error to insert '+error);
            response.err(error,res);
        }else{
            response.ok('data inserted with id '+data.materialId, res);
        }
    })
}

exports.edit = function(req, res){
    StudyMaterial.getById(req.body.materialId, function(error, data){
        if(error){
            logger.error('error while getById '+error);
            response.err(error,res);
        }else if(data==null){
            response.datanotfound('data not found');
        }else{
            StudyMaterial.edit(req.body.materialId, req.body, function(error, data){
                if(error){
                    logger.error('error while edit data '+error);
                    response.err(error,res);
                }else{
                    response.ok('data updated where id '+data.materialId, res);
                }
            })
        }
    })
}

