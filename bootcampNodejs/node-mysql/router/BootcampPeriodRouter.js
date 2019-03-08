'use strict';

module.exports = function(app) {
    var controller = require('../controller/BootcampPeriodController');

    app.route('/bootcamp-periods').get(controller.getAll);
    app.route('/bootcamp-period/:id').get(controller.getById);
    app.route('/bootcamp-period').post(controller.insert);
    app.route('/bootcamp-period').put(controller.edit);
}