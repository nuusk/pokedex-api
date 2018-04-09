require('dotenv').config();
const mongoose = require('mongoose');
console.log(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const Pokemon = require('./models/pokemon');
const Type = require('./models/type');

class Database {
  async addPokemon(pokemon) {
    const insertedPokemon = new Pokemon({
      id: pokemon.id,
      name: pokemon.ename,
      types: pokemon.type
    })
    await insertedPokemon.save(err => {
      if (err) {
        console.error(err);
      }
    });
  }

  // find pokemon based on keyword
  findPokemon(keyword) {
    return new Promise(function (resolve, reject) {
      Pokemon.find({ types: keyword })
        .then((res) => {
          //console.log(res);
          resolve(res)
        });
    });
  }

  findPokemonById(pokemonId) {
    return new Promise((resolve, reject) => {
      Pokemon.findById(pokemonId, (err, pokemon) => {
        if (err) return console.error(err);
        resolve(pokemon);
      });
    });
  }

  findPokemons(res) {
    Pokemon.find({}, function (err, pokemons) {
      if (err) return res.status(500).send("Pokedex is broken");
      res.status(200).send(pokemons);
    });
  }

}
// eksport pliku z operacjami na bazie danych
module.exports = Database;
