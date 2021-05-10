const {Router} = require('express'); 
const route = Router();

const {loginUser} = require('../controllers/login-controller');

route.post('/login', loginUser); 

module.exports = route;