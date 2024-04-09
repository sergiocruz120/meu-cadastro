const { Sequelize } = require('sequelize');

const conection = new Sequelize('novoteste', 'root', '5555', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = conection;