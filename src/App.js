import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { add } from './services/maths';
import { getStarwarsCharacter } from './services/starwars';

class App extends Component {
  state = {
    pokemon: null,
  };
  async componentDidMount() {
    const pokemon = await getStarwarsCharacter(1);
    this.setState({ pokemon });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">2 + 4 = {add(2, 4)}</p>
        {this.state.pokemon !== null && <p>{this.state.pokemon.name}</p>}
      </div>
    );
  }
}

export default App;
