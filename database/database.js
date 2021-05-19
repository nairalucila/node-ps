const Sequelize = require('sequelize');
const modeloUsers = require('../models/Users2');
const modeloRoles = require('../models/Roles');

const sequelize = new Sequelize('dataDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

});

const UsersData = modeloUsers(sequelize, Sequelize);
const Roles = modeloRoles(sequelize, Sequelize);

UsersData.belongsToMany(Roles, {
  through: 'UsersRols'
});
Roles.belongsToMany(UsersData, {
  through: 'UsersRols'
});

sequelize.sync({
    force: false
  })
  .then(() => {
    console.log("Tablas Sincronizadas")
  })
  .catch((e) => {
    console.log(e)
  });



module.exports = {
  UsersData,
  Roles
};