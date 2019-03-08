module.exports = (sequelize, type) => {
    return sequelize.define('bootcampPeriod', {
        id:{
            field: 'id',
            type: type.INTEGER,
            primaryKey: true,
        },
        batchId: {
            field: 'batch_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',

            references: {
                model: 'Batch',
                key: 'batchId'
            }
        },
        weekId: {
            field: 'week_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',

            references: {
                model: 'studyPeriod',
                key: 'weekId'
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
            tableName: 'tb_bootcamp_period',
            timestamps: false
        })
}
