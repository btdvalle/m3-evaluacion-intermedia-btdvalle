import React from "react";
import Pokemon from "./Item";

const renderList = pokemons => {
  return pokemons.map(pokemon => {
    return <Pokemon key={pokemon.id} name={pokemon.name} types={pokemon.types} evolution={pokemon.evolution} url={pokemon.url} />;
  });
};

const PokeList = props => {
  return <ul className="pokelist">{renderList(props.pokemons)}</ul>;
};

export default PokeList;
