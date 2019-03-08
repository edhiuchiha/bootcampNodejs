'use strict';

module.exports = function(app) {
    var controller = require('../controller/TrainerController');

    app.route('/trainers').get(controller.getTrainerAll);
    app.route('/trainer/:id').get(controller.getById);
    app.route('/trainer').post(controller.createTrainer);
    app.route('/trainer').put(controller.editTrainer);
    app.route('/trainer/:id').delete(controller.removeTrainer);
}