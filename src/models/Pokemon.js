const mongoose = require("mongoose");
const { pokemonTypeSchema } = require("./PokemonType");

const pokemonSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  stats: Number,
  pokemonType: {
    type: pokemonTypeSchema,
    required: true,
  },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
