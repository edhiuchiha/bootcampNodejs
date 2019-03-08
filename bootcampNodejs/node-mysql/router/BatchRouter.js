'use strict';

module.exports = function(app) {
    var controller = require('../controller/BatchController');

    app.route('/batchs').get(controller.batchs);
    app.route('/batch/:id').get(controller.getBatchById);
    app.route('/batch').post(controller.createBatch);
    app.route('/batch').put(controller.updateBatch);
    app.route('/batch/:id').delete(controller.del);
};
