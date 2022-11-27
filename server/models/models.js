const sequelize = require('../db/db')
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

const Contract = sequelize.define('contract', {
    anum: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cid: { type: DataTypes.INTEGER, allowNull: true },
    DateOpen: { type: DataTypes.DATEONLY, allowNull: true },
    OrdNmr: { type: DataTypes.STRING, allowNull: true },
    DateClose: { type: DataTypes.DATEONLY, allowNull: true },
    DateDisp: { type: DataTypes.DATEONLY, allowNull: true },
    DateStore: { type: DataTypes.DATEONLY, allowNull: true },
    Finish: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    _Add: { type: DataTypes.TEXT, allowNull: true },
},
    {
        tableName: 'contracts',
        timestamps: false,

        indexes: [
            {
                name: 'icid',
                using: 'BTREE',
                fields: ['cid']
            },
            {
                name: 'iDateOpen',
                using: 'BTREE',
                fields: ['DateOpen']
            },
            {
                name: 'iOrdNmr',
                using: 'BTREE',
                fields: ['OrdNmr']
            }
        ]
    }
);

const Order = sequelize.define('order', {
    anum: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id: { type: DataTypes.INTEGER, allowNull: true },
    date: { type: DataTypes.DATEONLY, allowNull: true },
    time: { type: DataTypes.TIME, allowNull: true },
    man: { type: DataTypes.STRING(45), allowNull: true },
    CustName: { type: DataTypes.STRING, allowNull: true },
    CustFirm: { type: DataTypes.STRING, allowNull: true },
    CustAddr: { type: DataTypes.STRING, allowNull: true },
    CustPhone: { type: DataTypes.STRING(45), allowNull: true },
    CustMail: { type: DataTypes.STRING(45), allowNull: true },
    Course: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    PrExESum: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    PrGrnSum: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    Zapr: { type: DataTypes.STRING(45), allowNull: true },
    KP: { type: DataTypes.STRING(45), allowNull: true },
    Inv: { type: DataTypes.STRING(45), allowNull: true },
    Mon: { type: DataTypes.DATEONLY, allowNull: true },
    Sum: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    _Add: { type: DataTypes.TEXT, allowNull: true },
    AddS: { type: DataTypes.TEXT, allowNull: true },
    Color: { type: DataTypes.STRING(45), allowNull: true },
},
    {
        tableName: 'orders',
        timestamps: false,

        indexes: [
            {
                name: 'iId',
                using: 'BTREE',
                fields: ['id']
            },
            {
                name: 'iDate',
                using: 'BTREE',
                fields: ['date', 'time']
            },
            {
                name: 'iMan',
                using: 'BTREE',
                fields: ['man']
            },
            {
                name: 'iCustomer',
                using: 'BTREE',
                fields: ['CustName', 'CustFirm', 'CustAddr', 'CustPhone']
            },
            {
                name: 'iKp',
                using: 'BTREE',
                fields: ['Zapr', 'KP']
            },
        ]
    }
);

const Product = sequelize.define('product', {
    anum: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ZID: { type: DataTypes.INTEGER, allowNull: true },
    Code: { type: DataTypes.STRING(120), allowNull: true },
    Cnt: { type: DataTypes.INTEGER, allowNull: true },
    Perc: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    ExWpc: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    ExWpcs: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    GRNpc: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    GRNpcs: { type: DataTypes.DECIMAL(13, 2), allowNull: true },
    Term: { type: DataTypes.INTEGER, allowNull: true },
    Date: { type: DataTypes.DATEONLY, allowNull: true },
    CID: { type: DataTypes.INTEGER, allowNull: true },
    ContrDate: { type: DataTypes.DATEONLY, allowNull: true },
    Chk: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    Finish: { type: DataTypes.DATEONLY, allowNull: true },
    _Add: { type: DataTypes.TEXT, allowNull: true },
    Var: { type: DataTypes.INTEGER, allowNull: true },
    StoreDate: { type: DataTypes.DATEONLY, allowNull: true },
    Ch1: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    discount: { type: DataTypes.INTEGER, allowNull: true },
}, {
    tableName: 'products',
    timestamps: false,

    indexes: [
        {
            name: 'iZID',
            using: 'BTREE',
            fields: ['ZID']
        },
        {
            name: 'iCode',
            using: 'BTREE',
            fields: ['Code']
        },
        {
            name: 'iDate',
            using: 'BTREE',
            fields: ['Date']
        },
        {
            name: 'iCID',
            using: 'BTREE',
            fields: ['CID']
        },
        {
            name: 'iFinish',
            using: 'BTREE',
            fields: ['Finish']
        },
    ]
});

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(45), allowNull: true },
    age: { type: DataTypes.INTEGER, allowNull: true },
    psw: { type: DataTypes.STRING(120), allowNull: true },
    priv: { type: DataTypes.STRING(120), allowNull: true },
    active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
},
    {
        tableName: 'users',
        timestamps: false,

        indexes: [
            {
                name: 'iName',
                using: 'BTREE',
                fields: ['name']
            }
        ]
    }
);

module.exports = {
    Client,
    Company,
    Contract,
    Order,
    Product,
    User
}