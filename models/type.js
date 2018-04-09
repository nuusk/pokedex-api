const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('type', TypeSchema);