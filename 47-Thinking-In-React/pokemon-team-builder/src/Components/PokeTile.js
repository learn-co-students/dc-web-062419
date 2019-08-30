import React from 'react'

const PokeTile = (props) => {//onDBClickPokemon either going to be onAddPokemon or onRemovePokemon
  return (
    <div
      onDoubleClick={() => {props.onDBClickPokemon(props.pokemon)}}
      onClick={() => props.onScoutPokemon(props.pokemon.url)}
      className="pokemon card"
    >
      {props.pokemon.name}
    </div>
  )
}

export default PokeTile
