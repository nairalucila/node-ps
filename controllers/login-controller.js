const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const secret = require('../secret');
const { Users } = require('../database');

const loginUser = async (req, res) => {

    try {
        let enteredUser = await Users.findOne({
            where: {
                userName: req.body.userName
            }
        });

        if (enteredUser) {
            const compare = bcrypt.compareSync(req.body.password, enteredUser.password);

            if (compare) {
                res.status(200).json({
                    succes: createToken(enteredUser)
                });
            } else {
                res.status(400).json({
                    error: "Row Incorrect"
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.json({
            error: "Server error"
        })

    }
};

const createToken = (enteredUser) => {
    const payload = {
        userId: enteredUser.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix(),
    }

    return jwt.encode(payload, secret.secret)
};

module.exports = {
    loginUser
}