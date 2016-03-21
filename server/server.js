const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = mongoose.connection;

const User = require('./users/userModel');
const Cities = require('./cities/cityModel')

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/wanderlist');

// Middleware - make own file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Routes - make own file
// GET / Read
app.get('/', (req, res) => {
  res.send('GET request successful');
});

// POST / Create
app.post('/login', (req, res) => {
  const user = new User;

  user.username = req.body.username;
  user.password = req.body.password;

  user.save((err) => {
    if (err) {
      res.send(err);
    }
  });
  res.send('User added to the database: ' + user);
});

// app.put();

// app.delete();

app.listen(port, () => {
  console.log('Example app is listening on port ' + port);
});
