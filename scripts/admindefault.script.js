const bcrypt = require('bcryptjs');
const hashContraseña = bcrypt.hashSync("admin", 10);


module.exports = (Users) => Users.create({
    userName: "administrador23",
    email: "admin23@admin.com",
    phone: "00123",
    password: hashContraseña
})
