module.exports = (sequelize, type) => {
    return sequelize.define('tb_bootcamp_batch', {
            batchId: {
                field: 'batch_id',
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descriptions: {
                field: 'descriptions',
                type: type.STRING
            },
            sequence: {
                field: 'sequence',
                type: type.INTEGER
            },
            startDate: {
                field: 'start_date',
                type: type.DATE
            },
            finishDate: {
                field: 'finish_date',
                type: type.DATE
            },
        },
        {
            tableName: 'tb_bootcamp_batch',
            timestamps: false
        })
}
