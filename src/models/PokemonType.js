const mongoose = require("mongoose");

const pokemonTypeSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const PokemonType = mongoose.model("PokemonType", pokemonTypeSchema);

module.exports = {
  PokemonType,
  pokemonTypeSchema,
};
