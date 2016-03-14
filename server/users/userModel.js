const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require(bcrypt);
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
};

module.exports = mongoose.model('users', UserSchema);
