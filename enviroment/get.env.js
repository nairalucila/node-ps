const { config } = require('dotenv');

const enviReader = () => {
  config();
};

const get = (envName = '') => {
  return process.env[envName];
};

module.exports = {
    enviReader,
  get
}