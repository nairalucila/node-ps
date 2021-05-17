const jwt = require('jwt-simple');
const moment = require('moment');
const secret = require('./secret');

//Esto va sobre una ruta get, en este caso en '/' ruta inicial
const checkToken = (req, res, next) => {

    if (!req.headers['token']) {
        return res.json({
            error: 'Put token in headers'
        })
    }

    const userToken = req.headers['token'];
    let payload = {};
    try {
        payload = jwt.decode(userToken, secret.secret);
        
    } catch (error) {
        return res.json({
            error: 'Your token is invalid'
        })
    }

    if(payload.expiredAt < moment.unix()){
        return res.json({
            error: 'Your token is expired, come back your home'
        })

    }

    req.userId = payload.userId;
    next();
}

module.exports ={
    checkToken: checkToken
}
