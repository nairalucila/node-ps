
const {
    Roles
} = require('./database/index');
module.exports = (Roles) => Roles.bulkCreate([{
    rol: "ROL_ADMIN"
}, {
    rol: "ROL_SUPERADMIN"
}, {
    rol: "ROL_PRODUCTOR"
}, {
    rol: "ROL_CONSULTOR"
}])