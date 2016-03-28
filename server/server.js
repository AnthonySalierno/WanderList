const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/wanderlist');

app.listen(port, () => {
  console.log('Example app is listening on port ' + port);
});
