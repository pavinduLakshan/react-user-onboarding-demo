require('dotenv').config()
const express = require('express');
const app = express();
const utils = require('./utils')
const port = 3000;

app.get('/register', async (req, res) => {

    // Create new user in Asgardeo organization using the SCIM 2.0 Users API.
    const {error, result} = await utils.createUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })

    if (error) {
      res.status(400).send(error)
    } 

    res.send(result)
})

app.get('/check-password', async (req, res) => {

})

app.get('/check-username', async (req,res) => {

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
