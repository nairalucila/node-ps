const bcrypt = require('bcryptjs');

const {
    newUser
} = require('../database/database');

const loginUser = async (req, res) => {

    try {

        let enteredUser = await newUser.findOne({where: {email: req.body.email}});

        if(enteredUser){
            const compare = bcrypt.compareSync(req.body.password, enteredUser.password);
            
            if(compare){

                res.json({succes: "TOKEN"})

            }
            else {

                res.status(400).json({error: "Row Incorrect"});
    
            }
        } 

    } catch (error) {

        res.json({error: "Server problem"})

    }



};

module.exports = {
    loginUser
}

// try {
//     let enteredUser = await newUser.find((data) => req.body.email === data.email);

//      if (enteredUser) {
//          let passbody = req.body.password;
//          let userPass = enteredUser.password;
//          // const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
//          if (passbody == userPass) {
//              res.status(200).send("Succesfull");
//          } else {
//              res.status(400).send("Invalid, sorry");
//          }
//      } else {

//          //  let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
//          //  await bcrypt.compare(req.body.password, fakePass);

//          res.send("Invalid email or password").status(500);
//      }
//  } catch {
//      res.status(500).send("Internal server error");
//  }