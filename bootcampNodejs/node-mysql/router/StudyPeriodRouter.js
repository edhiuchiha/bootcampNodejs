'use strict';

module.exports = function(app) {
    var controller = require('../controller/StudyPeriodController');

    app.route('/study-periods').get(controller.getAll);
    app.route('/study-period/:id').get(controller.getById);
    app.route('/study-period').post(controller.insert);
    app.route('/study-period').put(controller.edit);
}