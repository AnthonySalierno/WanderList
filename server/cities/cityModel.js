const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateVisited: {
    type: String,
  },
  // datePlanned: {
  //   type: String,
  // },
});

module.exports = mongoose.model('cities', CitySchema);
