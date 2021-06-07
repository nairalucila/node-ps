const express = require('express')
const app = express();
const port = 3020;
const db = require('./database/index');
const { checkToken } = require('./middleware');


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/auth-route'));

app.listen(port, () => {
    console.log(`Server running at ${port}`);
  });