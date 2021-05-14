const {DataTypes, Sequelize} = require('sequelize')

module.exports = (sequelize, type) =>{
    return sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    })

};

//const dataBase = require('../global/database');

//module.exports =  User;