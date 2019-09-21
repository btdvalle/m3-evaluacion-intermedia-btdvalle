import React from "react";
import "../stylesheets/Pokemon.css";

const renderTypes = types => {
  return types.map((type, index) => {
    return (
      <li className="type" key={index}>
        {firstToUpperCase(type)}
      </li>
    );
  });
};

const firstToUpperCase = string => {
  return !!string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
};

const Pokemon = props => {
  const { name, favorite, url, types, id } = props.pokemon;
  const handleClick = () => {
    props.action(id);
  };
  console.log(favorite);
  return (
    <div className={`pokemon ${favorite ? "favorite" : ""}`} onClick={handleClick}>
      <h2 className="name">{firstToUpperCase(name)}</h2>
      <img className="img" src={url} alt={name} title={name} />
      <ul className="types">{renderTypes(types)}</ul>
    </div>
  );
};

export default Pokemon;
