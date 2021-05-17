const Sequelize = require('sequelize');
const userData = require('../models/Users2');

const sequelize = new Sequelize('dataDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

});

const newUser = userData(sequelize, Sequelize);

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