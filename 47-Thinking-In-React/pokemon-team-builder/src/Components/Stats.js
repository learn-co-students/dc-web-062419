import React from 'react'

const Stats = (props) => {
  return(
    <div className="card details">
      <div>
        <div className="row">{props.shownPokemon.name}</div>
        <div className="row">
          <div><img alt={props.shownPokemon.name} src={props.shownPokemon.sprites.front_shiny} /></div>
          {props.shownPokemon.stats.map(stat => {
            console.log(stat)
            return <div
              key={stat.stat.name}
              className="block">{stat.stat.name}: {stat.base_stat}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
/*
<div className="block">hp: x</div>
<div className="block">speed: x</div>
<div className="block">attack: x</div>
<div className="block">defense: x</div>
<div className="block">sp-attack: x</div>
<div className="block">sp-defense: x</div>
*/
export default Stats
