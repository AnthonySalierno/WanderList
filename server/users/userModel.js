const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
  firstName: String,
  lastName: String,
  username: String,
});