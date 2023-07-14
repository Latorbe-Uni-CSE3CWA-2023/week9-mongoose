const { PokemonController } = require("../controllers");

const pokemonList = [
  {
    name: "Pikachu",
    id: 25,
    stats: 90,
    pokemonType: {
      id: 101,
      type: "Electric",
    },
  },
  {
    name: "Charizard",
    id: 6,
    stats: 96,
    pokemonType: {
      id: 102,
      type: "Fire",
    },
  },
  {
    name: "Bulbasaur",
    id: 1,
    stats: 78,
    pokemonType: {
      id: 103,
      type: "Grass",
    },
  },
  {
    name: "Jolteon",
    id: 135,
    stats: 80,
    pokemonType: {
      id: 101,
      type: "Electric",
    },
  },
  {
    name: "Gyarados",
    id: 130,
    stats: 95,
    pokemonType: {
      id: 104,
      type: "Water/Flying",
    },
  },
  {
    name: "Snorlax",
    id: 143,
    stats: 87,
    pokemonType: {
      id: 105,
      type: "Normal",
    },
  },
  {
    name: "Dragonite",
    id: 149,
    stats: 99,
    pokemonType: {
      id: 106,
      type: "Dragon/Flying",
    },
  },
  {
    name: "Gengar",
    id: 94,
    stats: 95,
    pokemonType: {
      id: 107,
      type: "Ghost/Poison",
    },
  },
];

const insertPokemon = async () => {
  const pokemons = await PokemonController.addPokemonList(pokemonList);
  return pokemons;
};

module.exports = {
  insertPokemonData: insertPokemon,
};
