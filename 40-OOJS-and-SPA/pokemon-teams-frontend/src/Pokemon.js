// console.log("pokemon")
class Pokemon {
  constructor(pokemon){
    this.id = pokemon.id
    this.species = pokemon.species
    this.nickname = pokemon.nickname
    this.trainerId = pokemon.trainer_id
  }

  render(){
    return `
      <li>${this.nickname} (${this.species})
        <button class="release" data-pokemon-id="${this.id}">Release</button>
      </li>
    `
  }

  beReleased(){
  }
}
