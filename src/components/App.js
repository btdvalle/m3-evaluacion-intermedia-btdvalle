import React from "react";
import "../stylesheets/App.css";
import getDataFromApi from "../Api";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      fav: []
    };
    this.handleFav = this.handleFav.bind(this);
    this.getFavArray = this.getFavArray.bind(this);
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
    this.setState({ pokemons }, this.getFavArray);
  }
  getFavArray() {
    const fav = this.state.pokemons.filter(pokemon => pokemon.favorite);
    this.setState({ fav });
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
