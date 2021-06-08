const {Router} = require('express'); 
const route = Router();
const { homePath} = require('../controllers/index-controller');

const { checkToken} = require('../middleware');

route.get('/home', checkToken, homePath ); 

module.exports = route;