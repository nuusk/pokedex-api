const express = require('express');
const app = express();

const Database = require('./db');
const db = new Database();

// cors middleware, skrypt pośredniczący, który umożliwia komunikację pomiędzy serwerami o różnych adresach ip
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// deklaracja używania middleware i kontrolerów przez główny plik aplikacji
app.use(allowCrossDomain);
app.get('/pokemons', (req, res) => {
  db.findPokemons(res)
});

app.get('/pokemon/:id', (req, res) => {
  db.findPokemonById(req.params.id, res);
});

app.listen(4004, () => {
  console.log('Server started on port 4004...');
})