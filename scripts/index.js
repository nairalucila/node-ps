const Sequelize = require('sequelize');
const modeloUsers = require('../models/Users');
const modeloRoles = require('../models/Roles');

const sequelize = new Sequelize('dataDB', 'root',
    'root', {
        host: 'localhost',
        dialect: 'mysql',
    });

const Users = modeloUsers(sequelize, Sequelize);
const Roles = modeloRoles(sequelize, Sequelize);

Users.belongsToMany(Roles, {
    through: 'UsersRoles',
    foreignKey: 'user_id'
})
Roles.belongsToMany(Users, {
    through: 'UsersRoles',
    foreignKey: 'rol_id'
})
const createUser = require('./admindefault.script');
const createRoles = require('./rolsdefault.script')

async function execute() {
    await sequelize.sync({
        force: true
    })
    await createRoles(Roles)
    const user = await createUser(Users)
    user.addRole(1)
}
execute()