const sequelize = require('../db/myDb')
const { DataTypes } = require('sequelize')

const Client = sequelize.define('client', {
    anum: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING(64), allowNull: true },
    mail: { type: DataTypes.STRING(64), allowNull: true },
    rem: { type: DataTypes.STRING, allowNull: true },
    id_client: { type: DataTypes.INTEGER, allowNull: true },
},
    {
        tableName: 'client',
        timestamps: false,

        indexes: [
            {
                name: 'iid_client',
                using: 'BTREE',
                fields: ['id_client']
            },
            {
                name: 'iName',
                using: 'BTREE',
                fields: ['name']
            },
            {
                name: 'iMail',
                using: 'BTREE',
                fields: ['mail']
            },
            {
                name: 'iPhone',
                using: 'BTREE',
                fields: ['phone']
            }
        ]
    }
);

const Company = sequelize.define('company', {
    anum: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: true },
    addr: { type: DataTypes.STRING, allowNull: true },
    rem: { type: DataTypes.STRING, allowNull: true },
},
    {
        tableName: 'company',
        timestamps: false,

        indexes: [
            {
                name: 'iName',
                using: 'BTREE',
                fields: ['name']
            },
            {
                name: 'iAddr',
                using: 'BTREE',
                fields: ['addr']
            }
        ]
    }
);

module.exports = {
    Client,
    Company
}