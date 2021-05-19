const express = require('express')
const app = express();
const port = 3000;
const db = require('./database/database');
const { checkToken } = require('./middleware');
const {createAdmin, createRols} = require('./database/asotiation')

//, checkToken
app.get('/', function (req, res) {
  res.send('Hello World')
})

createRols();
createAdmin();


//Otras config.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/auth-route'));

app.listen(port, () => {
    console.log(`Server running at ${port}`);
  });