const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './base.sqlite',
    logging: false,
    define: {
        timestamps: false
    }
});

module.exports = db;