// console.log("trainer")
class Trainer {

  constructor(trainerObj){
    this.id = trainerObj.id
    this.name = trainerObj.name
    this.pokemons = trainerObj.pokemons.map(pokemonObj => new Pokemon(pokemonObj))
    //Before this.pokemons = [{}, {}, {}, {}, ...]
    //After this.pokemons = [Pokemon{}, Pokemon{}, Pokemon{}, Pokemon{}, ...]
  }

  render(){
    return `
      <div class="card" data-id="${this.id}"><p>${this.name}</p>
        <button data-trainer-id="${this.id}">Add Pokemon</button>
        <ul>
          ${this.pokemons.map(pokemonInstance => pokemonInstance.render()).join("")}
        </ul>
      </div>
    `
  }

  catchPokemon(){
  }

}
