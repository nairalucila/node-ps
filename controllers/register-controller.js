const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {
    newUser
} = require('../database/database');
const {
    check,
    validationResult
} = require('express-validator');

const checkMiddleware = [
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').not().isEmpty()
]


const registerUser = async (req, res) => {
     //falta try y catch para manejar promesas y errores
    const error = validationResult(req);
    
    if (!error.isEmpty()) {
        return res.status(422).json({
            errores: error.array()
        })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await newUser.create(req.body);
    res.json(user);
};


module.exports = {
    registerUser,
    checkMiddleware
}