var { Batch } = require('../db/sequelize');
var logger = require('../util/logging/logging-winston');

exports.getById = function getById(id, callback) {
    Batch.findById(id)
        .then((batch) => {
            return callback(null, batch);
        })
};

exports.getAll = function getAll(callback) {
    Batch.findAll()
        .then((batch) => {
            return callback(null, batch);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })

};

exports.add = function add(data, callback) {
    Batch.create(data)
        .then((batch) => {
            return callback(null, batch);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    console.log(data);
    Batch.update(data, {
        where: { batchId: data.batchId },
        returning: true,
        plain: true
    })
        .then((result) => {
            logger.info('result update:');
            logger.info(result);
            return callback(null, data);
        })
            .catch((error) => {
                logger.error(error);
                return callback(error);
            })
};

exports.del =  function del (id, callback) {
    Batch.destroy({
        where: {batchId: id }
    })
        .then(result => {
            logger.info('result update:');
            logger.info(result);
            return callback(null, id);
        })
        .catch((error)=>{
            logger.error(error);
            return callback(error);
        })
};