const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize, type) => {
    const Roles = sequelize.define('Roles', {
        rol: {
            type: DataTypes.STRING(60),
            notNull: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    })
    return Roles
};


