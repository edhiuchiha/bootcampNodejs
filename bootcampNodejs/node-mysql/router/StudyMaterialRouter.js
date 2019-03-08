'use strict';

module.exports = function(app) {
    var controller = require('../controller/StudyMaterial');

    app.route('/study-materials').get(controller.getAll);
    app.route('/study-material/:id').get(controller.getById);
    app.route('/study-material').post(controller.insert);
    app.route('/study-material').put(controller.edit);
}