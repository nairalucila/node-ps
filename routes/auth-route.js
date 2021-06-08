const {Router} = require('express'); 
const route = Router();

const {loginUser} = require('../controllers/login-controller');
const {registerUser, checkMiddleware} = require('../controllers/register-controller');

route.post('/login', loginUser); 
route.post('/register', checkMiddleware, registerUser); 

module.exports = route;
