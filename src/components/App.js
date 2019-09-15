import React from "react";
import "../stylesheets/App.css";
import getDataFromApi from "../Api";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
      // favorites: []
    };

    getDataFromApi().then(pokemons => {
      this.setState({ pokemons });
      console.log(this.state);
    });
  }

  //quiero añadirle una propiedad al estado de cada pokemon si son favoritos: false o true para poder usar el toogle, donde y como la añado en el estado de pokemon ???¿¿¿

  // toggle() {
  //   this.setState(prevState => ({
  //     open: !prevState.open
  //   }));
  // }

  render() {
    return (
      <div className="App">
        <h1 className="h1">Mi lista de Pokemon</h1>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
