import React from 'react'
import PokeTile from '../Components/PokeTile'

class PokemonList extends React.Component{ //PokemonTeam but also our WildPokemon
  render(){
    return(
      <div>
        <h3>{this.props.label}</h3>
        {
          this.props.pokemons.map(pokemon => {
            return <PokeTile
              key={pokemon.name}
              pokemon={pokemon}
              onDBClickPokemon={this.props.onDBClickPokemon}
              onScoutPokemon={this.props.onScoutPokemon}
            />})
        }
      </div>
    )
  }
}

export default PokemonList
