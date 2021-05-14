const Sequelize = require('sequelize');
const user = require('../models/Users');

const sequelize = new Sequelize('dataDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

});

const newUser = user(sequelize, Sequelize);

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
  newUser
};