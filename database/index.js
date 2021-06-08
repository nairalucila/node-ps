const Sequelize = require('sequelize');
const modeloUsers = require('../models/Users');
const modeloRoles = require('../models/Roles');

const sequelize = new Sequelize('dataDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const Users = modeloUsers(sequelize, Sequelize);
const Roles = modeloRoles(sequelize, Sequelize);

Users.belongsToMany(Roles, {
  through: 'UsersRoles',
  foreignKey: 'user_id'
})
Roles.belongsToMany(Users, {
  through: 'UsersRoles',
  foreignKey: 'rol_id'
})

sequelize.sync({
    force: false
  })
  .then(() => {
    console.log('Tabla sincronizada')
  })
  .catch((e) => {
    console.log(e)
  });



module.exports = {
  Users,
  Roles

};