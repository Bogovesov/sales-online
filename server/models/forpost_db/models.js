const sequelize = require('../../db/myDb')
const { DataTypes } = require('sequelize')

const WeightValue = sequelize.define('weights_value', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_parent: { type: DataTypes.STRING, allowNull: false, comment: 'id взвешивания' },
    id_scale: { type: DataTypes.INTEGER, allowNull: false, comment: 'id весов' },
    value: { type: DataTypes.DOUBLE, comment: 'Значение массы' },
    stability: { type: DataTypes.BOOLEAN, comment: 'Стабильность' },
    dt: { type: DataTypes.DATE, comment: 'Дата время' },
    type_record: { type: DataTypes.INTEGER, comment: 'Тип отчета' },
},
    {
        tableName: 'weights_value'
    });

module.exports = {
    WeightValue,
}