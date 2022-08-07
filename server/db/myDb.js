const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME_MYSQL,
    process.env.DB_USER_MYSQL,
    process.env.DB_PASSWORD_MYSQL,
    {
        dialect: 'mysql',
        host: process.env.DB_HOST_MYSQL,
        port: process.env.DB_PORT_MYSQL
    }
);

