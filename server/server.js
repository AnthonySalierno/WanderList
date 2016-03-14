const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = mongoose.connection;

const port = process.env.PORT || 8080;

db.on('error', console.error());
db.once('open', () => {
  const userOne = {
    username: "AnthonySalierno",
    password: 'password123',
  },
});

mongoose.connect('mongodb://localhost/wanderlist');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Routes
app.get('/', (req, res) => {
  res.send('GET request successful');
});

app.post('/login', (req, res) => {
  res.send('Sucessful login attempt by: ' + req.body.username);
});

app.listen(port, () => {
  console.log('Example app is listening on port ' + port);
});
