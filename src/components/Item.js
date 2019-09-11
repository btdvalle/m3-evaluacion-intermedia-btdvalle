import React from "react";

const renderTypes = types => {
  return types.map((type, index) => {
    return <h4 key={index}>{type}</h4>;
  });
};

const Pokemon = props => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.evolution}</h3>
      <img className="img" src={props.url} alt={props.name} />
      {renderTypes(props.types)}
    </li>
  );
};

export default Pokemon;
