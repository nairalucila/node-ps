const {
    DataTypes,
    Sequelize
} = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('Roles', {
        id_rol: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          notNull: true,
        },
        rol:{
            type: DataTypes.STRING(60),
            notNull: true,
        },
       
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    })

};
