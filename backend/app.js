require('dotenv').config()

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const utils = require('./utils')

// create application/json parser
var jsonParser = bodyParser.json()

const app = express();

const port = 3000;

app.use(cors());
app.use(jsonParser);

app.post('/register', async (req, res) => {

    console.log(req.body)

    // Create new user in Asgardeo organization using the SCIM 2.0 Users API.
    const {error, result} = await utils.createUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })

    if (error) {
      res.status(400).send(error)
    } else {
      res.send(result)
    }
})

app.get('/check-password', async (req, res) => {

})

app.get('/check-username', async (req,res) => {

})

app.get('/profile-schema', async (req, res) => {
  const {error, result} = await utils.getSCIMSchemas();

  if (error) {
    res.status(500).send(error)
  } else {
    res.send(result)
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
