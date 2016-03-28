const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;

const middleware = require('./config/middleware.js');
const routes = require('./config/routes.js');

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/wanderlist');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
});

middleware(app, express);
routes(app, express);

app.listen(port, () => {
  console.log('Wanderlist server is listening on port ' + port);
});

module.exports = app;
