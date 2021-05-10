const bcrypt = require('bcryptjs');

const {
    dataDB
} = require('../data');

let dataDb = dataDB;

// let salt = bcrypt.genSaltSync(10);


const encryptPs = (pss) => {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(pss, salt, (err, hash) => {
          return hash;
        });

        
        for (let i = 0; i < dataDb.length; i++) {
            dataDb[i].password = hash
            
        }

        console.log(dataDb.password);
    });


}


const loginUser = (req, res) => {

    //Function
    try {
        let enteredUser = dataDb.find((data) => req.body.email === data.email);
       
        if (enteredUser) {

            let passbody = req.body.password;
            let userPass = enteredUser.password;
            encryptPs(passbody);

            // const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
            if (passbody == userPass) {
                res.status(200).send("Succesfull");
            } else {
                res.status(400).send("Invalid, sorry");
            }
        } else {

            //  let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
            //  await bcrypt.compare(req.body.password, fakePass);

            res.send("Invalid email or password").status(500);
        }
    } catch {
        res.send("Internal server error");
    }

};

module.exports = {
    loginUser
}


// try{
//     let enteredUser = dataDb.find((data) => req.body.email === data.email);

//     if(enteredUser){
//         console.log(enteredUser);
//         res.send("entro")
//     } else {

//         res.send("ni")

//     }        
// } catch {
//     res.send("Internal server error");
// };