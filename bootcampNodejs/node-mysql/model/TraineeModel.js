module.exports = (sequelize, type) => {
    return sequelize.define('tb_trainee', {
        traineeId: {
            field: 'trainee_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            field: 'first_name',
            type: type.STRING
        },
        lastName: {
            field: 'last_name',
            type: type.STRING
        },
        email: {
            field: 'email',
            type: type.STRING
        },
        phone: {
            field: 'phone',
            type: type.STRING
        },
        address: {
            field: 'address',
            type: type.STRING
        },
        batchId: {
            field: 'batch_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',

            references: {
                model: 'Batch',
                key: 'batctId'
            }
        },
        activeFlag: {
            field: 'active_flag',
            type: type.ENUM('1', '0'),
            defaultValue: '1'
        },

    },
        {
            tableName: 'tb_trainee',
            timestamps: false
        })
}
