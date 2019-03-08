module.exports = (sequelize, type) => {
    return sequelize.define('bootcampMaterial', {
        id:{
            field: 'id',
            type: type.INTEGER,
            primaryKey: true,
        },
        bootcampPeriodId: {
            field: 'bootcamp_period_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',

            references: {
                model: 'bootcampPeriod',
                key: 'bootcampPeriodId'
            }
        },
        materialId: {
            field: 'material_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',

            references: {
                model: 'studyMaterial',
                key: 'materialId'
            }
        },
        trainerId: {
            field: 'trainer_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',

            references: {
                model: 'tb_trainer',
                key: 'trainerId'
            }
        },
        descriptions: {
            field: 'descriptions',
            type: type.STRING
        },
        activeFlag: {
            field: 'active_flag',
            type: type.ENUM('1', '0'),
            defaultValue: '1'
        },

    },
        {
            tableName: 'tb_bootcamp_material',
            timestamps: false
        })
}
