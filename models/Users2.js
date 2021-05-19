const {
    DataTypes,
    Sequelize
} = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('UsersData', {
        // Model attributes are defined here
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
        // rol: {
        //     type: type.STRING,
        //     notNull: true,
        //     references: {
        //         model: 'Roles',
        //         key: 'rol'
        //     }
        // },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    })

};

