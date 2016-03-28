const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  cityName: {
    type: String,
    required: true,
  },
  dateVisited: {
    type: String,
  },
});

module.exports = mongoose.model('cities', CitySchema);
