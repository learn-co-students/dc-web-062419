//1. When DOM loads, I want to make a GET fetch, create some POkemonCard divs
//2. When form is submitted, I want to make a POST fetch, append to pokemon div
//3. When the pokemonCard div is clicked, I want to make a DELETE fetch, and remove the pokemonDiv

document.addEventListener("DOMContentLoaded", function(){
  //Does the form exist here? YES
  document.querySelector("form").addEventListener("submit", submitHandler)
  fetchAllPokemon()
});

function submitHandler(event){
  event.preventDefault()
  //POST fetch
  let data = {
    name: event.target[0].value,
    sprite: event.target[1].value
  }
  fetch("http://localhost:3000/pokemon", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(   renderPokemon   )
}

function fetchAllPokemon(){
  fetch('http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(pokemonArray => {
    pokemonArray.forEach( renderPokemon )
  })
}

function renderPokemon(pokemon){
  //created pokemon div
  let pokeDiv = document.createElement("div")
  pokeDiv.classList.add("card")
  document.querySelector("#pokemon-container").appendChild(pokeDiv)
  pokeDiv.addEventListener("click", deletePokemon)
  pokeDiv.id = `pokemon-${pokemon.id}`

  //create the p tage
  let pTag = document.createElement("p")
  pTag.innerText = pokemon.name
  pokeDiv.appendChild(pTag)

  //create the image
  let pokeImg = document.createElement("img")
  pokeDiv.appendChild(pokeImg)
  pokeImg.src = pokemon.sprite
}

function deletePokemon(event){
  let id = event.currentTarget.id.split("-")[1]
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
  .then(() => {
    document.getElementById(`pokemon-${id}`).remove()
  })
  .catch(() => {
    alert("Error, try again later")
  })
}
