var Sequelize = require('sequelize');
const TraineeModel = require('../model/TraineeModel');
const BatchModel = require('../model/BatchModel');
const TrainerModel = require('../model/TrainerModel');
const BootcampPeriodModel = require('../model/BootcampPeriod');
const BootcampMaterialModel = require('../model/BootcampMaterialModel');
const StudyPeriodModel = require('../model/StudyPeriod');
const StudyMaterialModel = require('../model/StudyMaterial');

const sequelize = new Sequelize('db_bootcamp', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Batch = BatchModel (sequelize, Sequelize);

const Trainee = TraineeModel (sequelize, Sequelize);
Trainee.belongsTo(Batch,{foreignKey:'batchId', targetKey: 'batchId'});

const Trainer = TrainerModel (sequelize, Sequelize);
const StudyMaterial = StudyMaterialModel (sequelize, Sequelize);
const StudyPeriod = StudyPeriodModel (sequelize, Sequelize);

const BootcampPeriod = BootcampPeriodModel (sequelize, Sequelize);
BootcampPeriod.belongsTo(Batch, {foreignKey: 'batchId', targetKey: 'batchId'});
BootcampPeriod.belongsTo(StudyPeriod, {foreignKey: 'weekId', targetKey: 'weekId'});

const BootcampMaterial = BootcampMaterialModel (sequelize, Sequelize);
BootcampMaterial.belongsTo(BootcampPeriod, { foreignKey: 'bootcampPeriodId', targetKey: 'id'});
BootcampMaterial.belongsTo(StudyMaterial, { foreignKey: 'materialId', targetKey: 'materialId'});
BootcampMaterial.belongsTo(Trainer, { foreignKey: 'trainerId', targetKey: 'trainerId'});

module.exports = {
    Batch,
    Trainee,
    Trainer,
    BootcampPeriod,
    BootcampMaterial,
    StudyMaterial,
    StudyPeriod
}