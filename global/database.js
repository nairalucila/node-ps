const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dataDB', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'sqlite'|'postgres',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
  });
  
 