import { renderPokemonCard } from "../../utils/util.js";

const cards = () => {
  const localPokemon = document.getElementById('localPokemon');
  const remotePokemon = document.getElementById('remotePokemon');

  const readLocalPokemon = fetch('https://elliotgaramendi.github.io/web-development-tecsup/g21/semana7/apimones/json/pokeapi-api-v2-pokemon-25.json')
    .then(response => response.json());
  const readRemotePokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`)
    .then(response => response.json());

  Promise.all([readLocalPokemon, readRemotePokemon])
    .then(data => {
      const [dataLocalPokemon, dataRemotePokemon] = data;
      renderPokemonCard(localPokemon, dataLocalPokemon);
      renderPokemonCard(remotePokemon, dataRemotePokemon);
    });
};

export default cards;