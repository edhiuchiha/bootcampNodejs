module.exports = (sequelize, type) => {
    return sequelize.define('studyPeriod', {
        weekId: {
            field: 'week_id',
            type: type.INTEGER,
            primaryKey: true,
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
            tableName: 'tb_study_period',
            timestamps: false
        })
}
