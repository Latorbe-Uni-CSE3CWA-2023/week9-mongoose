//src/controllers/pokemon.js

const { Pokemon } = require("../models");

const { Pokemon } = require("../models");

class PokemonController {
  // add multiple pokemon
  static async addPokemonList(pokemons) {
    return await Pokemon.insertMany({
      ...pokemons,
    });
  }
  // add a single pokemon
  static async addPokemon(pokemon) {
    return await Pokemon.create({ ...pokemon });
  }
}

module.exports = { PokemonController };
