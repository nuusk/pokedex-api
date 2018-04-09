const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = Schema({
  id: Number,
  name: String,
  // baseStats: {
  //   Attack: Number,
  //   Defense: Number,
  //   HP: Number,
  //   'Special Attack': Number,
  //   'Special Defense': Number,
  //   Speed: Number
  // }, 

  //adres url do zdjecia
  image: String,
  types: [String]
});

module.exports = mongoose.model('pokemon', PokemonSchema);
