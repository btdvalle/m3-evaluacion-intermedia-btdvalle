import React from "react";

const renderList =(pokemons)=>{
return pokemons.map((pokemon, index) => {
    return <Item key={} club={club} />;
  });
};

// const renderTypes = types => {
//   return types.map((type, index) => {
//     return <h4 key={index}>{type}</h4>;
//   });
// };

const PokeList = props => {
  return (
    <ul>
      <li>
        <h2>{props.name}</h2>
        <img className="img" src={props.src} alt={props.name} />
        {/* {renderTypes(props.types)} */}
      </li>
    </ul>
  );
};

export default PokeList;
