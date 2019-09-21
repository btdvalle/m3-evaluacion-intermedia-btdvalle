import React from "react";
import "../stylesheets/App.css";
import getDataFromApi from "../Api";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
    this.handleFav = this.handleFav.bind(this);
  }

  componentDidMount() {
    getDataFromApi()
      .then(pokemons => this.formatData(pokemons))
      .then(pokemons => {
        this.setState({ pokemons });
      });
  }

  formatData(pokemons) {
    return pokemons.map(pokemon => {
      return { ...pokemon, favorite: false };
    });
  }

  handleFav(id) {
    const pokemons = this.state.pokemons.map(pokemon => ({ ...pokemon, favorite: pokemon.id === id ? !pokemon.favorite : pokemon.favorite }));
    this.setState({ pokemons });
  }

  render() {
    return (
      <div className="App">
        <h1 className="h1">Mi lista de Pokemon</h1>
        <PokeList pokemons={this.state.pokemons} action={this.handleFav} />
      </div>
    );
  }
}

export default App;
