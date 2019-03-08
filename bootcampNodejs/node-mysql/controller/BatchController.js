var response = require('../model/res');
var BatchDao = require('../dao/BatchDao');
var logger = require('../util/logging/logging-winston');
var util = require('util');


exports.batchs = function(req, res) {
    BatchDao.getAll(function (error, rows){
        if(error){
            logger.error('error while select'+error)
            response.err(error, res);
        } else{
            // return res.json(rows);
            response.ok(rows, res);
        }
    });
};

exports.getBatchById = function(req, res) {
    BatchDao.getById(req.params['id'], function(err, data){
        // BatchDao.getById(req.params.id, function(err, data){
        if(err){
            logger.info('error while getbyid'+err)
            response.err(err, res);
        }
        // return res.json(rows);
        response.ok(data, res);
    });
};

exports.createBatch= function(req, res) {
    logger.info('request for insert');
    logger.debug(req.body);
    BatchDao.add(req.body, function(err, data){
        if(err){
            logger.error('error call insert : '+err);
            response.err(err, res);
        }
        response.ok('data inserted with id '+data.batchId, res);
    });
};

exports.updateBatch = function(req, res) {
    logger.info('request for update :');
    logger.debug(req.body);
    BatchDao.getById(req.body.batchId, function(err, data){//check customer exists
        if(err){
            logger.error('error call getById : '+err);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('batch not found', res);
        }else{
            //if exists, then continue update
            BatchDao.update(req.body.batchId, req.body, function(err, data){
                if(err){
                    logger.error('error call update : '+err);
                    response.err(error, res);
                }
                response.ok('updated data : '+ data.batchId, res);
                console.log(data)
            });
        }
    });
};



exports.del = function(req, res) {
    logger.info(util.format('deleting batch id %s', req.params['id']));
    BatchDao.getById(req.params['id'], function(err, data){//check customer exists
        if(err){
            logger.error('error call getById : '+err);
            response.err(err, res);
        }  else if(data==null){
            response.datanotfound('batch not found', res);
        }else{
            //if exists, continue delete
            BatchDao.del(req.params['id'], function(err, data){
                if(err){
                    logger.error('error call delete : '+err);
                    response.err(error, res);
                }
                response.ok('batch deleted with id : '+data.batchId, res);
            });
        }
    });
};
