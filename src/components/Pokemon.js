import React from "react";
import "../stylesheets/Pokemon.css";

const renderTypes = types => {
  return types.map((type, index) => {
    return <li key={index}>{firstToUpperCase(type)}</li>;
  });
};

const firstToUpperCase = string => {
  return !!string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
};

const Pokemon = props => {
  return (
    //como saco el li? otro componente?
    <li className="">
      <div className="pokemon">
        <h2>{firstToUpperCase(props.name)}</h2>
        {/* <h3>{firstToUpperCase(props.evolution)}</h3> */}
        <img className="img" src={props.url} alt={props.name} title={props.name} />
        <ul className="types">{renderTypes(props.types)}</ul>
      </div>
    </li>
  );
};

export default Pokemon;
