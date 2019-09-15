import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.css";

const renderList = pokemons => {
  return pokemons.map(pokemon => {
    return (
      <li className="pokemon">
        <Pokemon key={pokemon.id} name={pokemon.name} types={pokemon.types} evolution={pokemon.evolution} url={pokemon.url} />
      </li>
    );
  });
};

const PokeList = props => {
  return <ul className="pokelist">{renderList(props.pokemons)}</ul>;
};

export default PokeList;
