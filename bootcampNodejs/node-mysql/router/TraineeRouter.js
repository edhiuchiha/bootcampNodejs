'use strict';

module.exports = function(app) {
    var controller = require('../controller/TraineeController');

    app.route('/trainees').get(controller.getTraineeAll);
    app.route('/traineess').get(controller.getEmail);
    app.route('/trainee/:id').get(controller.getById);
    app.route('/trainee').post(controller.addTrainee);
    app.route('/trainee').put(controller.editTrainee);
    app.route('/trainee/:id').delete(controller.removeTrainee);
};