module.exports = (sequelize, type) => {
    return sequelize.define('tb_trainer', {
        trainerId: {
            field: 'trainer_id',
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
        emailPhone: {
            field: 'email_phone',
            type: type.STRING
        },
        activeFlag: {
            field: 'active_flag',
            type: type.ENUM('1', '0'),
            defaultValue: '1'
        },

    },
        {
            tableName: 'tb_trainer',
            timestamps: false
        })
}
