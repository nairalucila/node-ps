const {
    DataTypes,
    Sequelize
} = require('sequelize');

module.exports = (sequelize, type) => {
    const Users = sequelize.define('Users', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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

return Users
};
