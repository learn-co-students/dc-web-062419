import React, { Component } from 'react';
import Logo from '../Components/Logo'
import Stats from '../Components/Stats'
import PokemonList from './PokemonList'
import Searchbar from '../Components/Searchbar'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=800'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokeTeam: [],
      allPokemon: [], //will be changed once onload, but after, it's always going to be our 151
      scoutingPokemon: null,
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({allPokemon: data.results})
    })
  }

  onChangeSearch = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  //state changing callback (when dbclick, we want to update the state of pokeTeam)
  onAddPokemon = (pokemonObj) => {
    if(this.state.pokeTeam.length < 6 && !this.state.pokeTeam.includes(pokemonObj)){
      this.setState({
        pokeTeam: [...this.state.pokeTeam, pokemonObj]
      })
    }else{
      alert("NO")
    }
  }

  //state changing callback
  onRemovePokemon = (pokemonObj) => {
    this.setState({
      pokeTeam: this.state.pokeTeam.filter(p => p !== pokemonObj)
    })
  }

  onScoutPokemon = (url) => { //on click, make fetch, update state
    fetch(url)
    .then(res => res.json())
    .then(scoutingPokemon => {
      this.setState({scoutingPokemon})
      window.scrollTo(0, 0);
    })
  }

  getFilteredPokemons = () => {
    return this.state.allPokemon.filter(p => {
      return !this.state.pokeTeam.includes(p) && p.name.includes(this.state.searchTerm)
    })
  }

  //state changing callback
  onResetTeam = () => {
    this.setState({
      pokeTeam:[],
      scoutingPokemon: null
    })
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <PokemonList label="Pokemon Team"
          pokemons={this.state.pokeTeam}
          onDBClickPokemon={this.onRemovePokemon}
          onScoutPokemon={this.onScoutPokemon}
        />
        <div>
          <button onClick={this.onResetTeam}>RESET</button>
        </div>
        {!this.state.scoutingPokemon ? null : <Stats shownPokemon={this.state.scoutingPokemon}/>}
        <Searchbar onChangeSearch={this.onChangeSearch}/>
        <PokemonList label="Wild Pokemon"
          pokemons={this.getFilteredPokemons()}
          onDBClickPokemon={this.onAddPokemon}
          onScoutPokemon={this.onScoutPokemon}
        />
      </div>
    );
  }
}

export default App;
