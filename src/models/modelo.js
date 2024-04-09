const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Usuario = sequelize.define('usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confirmar_senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Usuario;