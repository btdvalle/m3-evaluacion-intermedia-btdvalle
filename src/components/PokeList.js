import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.css";

const renderList = props => {
  const { pokemons, action } = props;
  return pokemons.map(pokemon => {
    return (
      <li key={pokemon.id}>
        <Pokemon pokemon={pokemon} action={action} />
      </li>
    );
  });
};

const PokeList = props => {
  return <ul className="pokelist">{renderList(props)}</ul>;
};

export default PokeList;
