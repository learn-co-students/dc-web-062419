const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Henlo, is it me you're looking for?")
    getAllTrainers()
})

function getAllTrainers() {
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(trainerArray => trainerArray.forEach(renderTrainer)) 
}

function renderTrainer(trainer) {
    const main = document.querySelector('main')
    const trainerDiv = document.createElement('div') // const is OK here because const is block-scoped
    const trainerP = document.createElement('p')
    trainerP.innerText = trainer.name // this is super cool, we're super cool
    // trainerP.insertAdjacentHTML('afterend', `<button id=pokemon-button-${trainer.id}>Add Pokemon</button>`) 
    // THIS IS A different way of using innerHTML
    const addPokeButton = document.createElement('button')
    addPokeButton.innerText = "Add Pokemon"
    addPokeButton.dataset.trainerId = trainer.id
    const trainerUl = document.createElement('ul')
    addPokeButton.addEventListener("click", (event) => addPokemon(event, trainerUl))


    trainerDiv.classList.add('card') // add class to trainerDiv
   
    main.appendChild(trainerDiv)
    trainerDiv.append(trainerP, addPokeButton, trainerUl)

    trainer.pokemons.forEach(pokemon => renderPokemon(pokemon, trainerUl))
}

function addPokemon(event, trainerUl) {
    const data = { trainer_id: event.target.dataset.trainerId}
    fetch(POKEMONS_URL, {
            method: "POST",
            headers: {
                'Content-Type':'application/json'

            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(pokemon => renderPokemon(pokemon, trainerUl))
}

function renderPokemon(pokemon, trainerUl){
    const pokeLi = document.createElement('li')
    const liBut = document.createElement('button')
    liBut.classList.add('release')
    liBut.dataset.pokemonId = pokemon.id
    liBut.innerText = "release"
    liBut.addEventListener('click', event => releasePokemon(event, pokeLi))
    pokeLi.innerText = `${pokemon.nickname} (${pokemon.species})`
    
    trainerUl.appendChild(pokeLi)
    pokeLi.appendChild(liBut)
    console.log(liBut)


}

function releasePokemon(event, pokeLi) {
    const pokemonId = event.target.dataset.pokemonId
    fetch(POKEMONS_URL + "/" + pokemonId, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(() => pokeLi.remove())
}