const router = require('express').Router();
const bcrypt = require('bcryptjs');

const {
    Users
} = require('../database');
const {
    check,
    validationResult
} = require('express-validator');

const checkMiddleware = [
    check('userName', 'User name is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty()
]

const registerUser = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(422).json({
                errores: error
            })
        }
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        let user = await Users.create(req.body);
        res.json(user);


    } catch (error) {
        console.log("Server error", error);
        res.status(500).json({
            error: "Server error",
        });

    }

};

module.exports = {
    registerUser,
    checkMiddleware
}