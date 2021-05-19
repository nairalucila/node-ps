
const bcrypt = require('bcryptjs');
const {UsersData, Roles} = require('../database/database');

//Crear row db
const createAdmin = () => {
    const hashContraseña = bcrypt.hashSync("admin", 10);

    const admin = UsersData.findOne({
            where: {
                userName: "administrador",
            },
        })
        .then((admin) => {
            if (!admin) {
                UsersData.create({
                        userName: "administrador",
                        email: "admin@admin.com",
                        phone: "001",
                        password: hashContraseña,
                        rol: "SUPER_ADMIN"
                    })
                    .then(() => {
                        console.log("Administrador creado exitosamente");
                        // res.staus(200).json({
                        //     succes: "Administrador creado exitosamente"
                        // });
                    })
                    .catch((e) => {
                        console.log("Error al crear Administrador", e);
                        // res.staus(400).json({
                        //     error: "Error al crear Administrador",
                        //     e: err
                        // });
                    })
            }
        })
        .catch((err) => {
            console.error("Ocurrió un eror");
            // res.staus(500).json({
            //     error: "Ocurrió un eror",
            //     err: err
            // });
        });
};

//Create all rols

const createRols = () => {
    Roles.findAll()
        .then((rol) => {
            if (rol.length != 4) {
                // https://sequelize.org/v5/manual/instances.html#working-in-bulk--creating--updating-and-destroying-multiple-rows-at-once-
                Roles.bulkCreate([{
                        rol: "ROL_ADMIN"
                    }, {
                        rol: "ROL_SUPERADMIN"
                    }, {
                        rol: "ROL_PRODUCTOR"
                    }, {
                        rol: "ROL_CONSULTOR"
                    }])

                    .then(() => {
                        console.log("Roles creados exitosamente");
                        // res.staus(200).json({
                        //     succes: "Roles creados exitosamente"
                        // });
                    })
                    .catch((e) => {

                        console.log("Error al crear sus roles", e);
                        // res.staus(400).json({
                        //     error: "Error al crear Roles",
                        //     e: e
                        // });
                    });
            }
        })
        .catch((err) => {
            console.log("Error servidor");
            // res.staus(400).json({
            //     error: "Error al crear Roles",
            //     e: err
            // });
        });

};

// createRols();
// createAdmin();

module.exports = {

    createRols: createRols,
    createAdmin: createAdmin

}