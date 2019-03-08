'use strict';

module.exports = function(app) {
    var controller = require('../controller/BootcampMaterialController');

    app.route('/bootcamp-materials').get(controller.getAll);
    app.route('/bootcamp-material/:id').get(controller.getById);
    app.route('/bootcamp-material').post(controller.insert);
    app.route('/bootcamp-material').put(controller.edit);
}