const Database = require('./db');
const pokedex = require('./pokedex.json').slice(0, 151);

const db = new Database();

const fillPokedex = async (pokemon) => {
  // TODO get image of pokemon (await)
  db.addPokemon(pokemon);
};

pokedex.forEach(pokemon => {
  fillPokedex(pokemon);
});