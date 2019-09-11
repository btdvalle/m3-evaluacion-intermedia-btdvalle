import React from "react";
import "../stylesheets/App.css";
import getDataFromApi from "./Api";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };

    getDataFromApi().then(pokemons => {
      debugger;
      this.setState({ pokemons });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
