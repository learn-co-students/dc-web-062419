console.log('connected')

document.addEventListener("DOMContentLoaded", function(){
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then(res => res.json())
  .then(data => {
    //do stuff with your data
    data.results.forEach((monster)=>{
      console.log(monster)
      let container = document.querySelector(".container")
      let pEl = document.createElement("p")
      pEl.innerText = monster.name
      container.appendChild(pEl)
    })

  })
})


// document.addEventListener("DOMContentLoaded", function(){
//   //get the button and .addEventListener
//   let button = document.querySelector("button")
//   button.addEventListener("click", fetchAnimals)
// })
//
// function fetchAnimals(){
//   fetch("https://animal-farm-api.herokuapp.com/animals")
//   .then(response => response.json())
//   .then(animalsArray => {
//     animalsArray.forEach((animal)=>{renderAnimal(animal)})
//   })
// }
//
// function renderAnimal(animal){
//   //take eeach animal and render it on the DOM
//   let container = document.querySelector(".container")
//
//   //create animal div
//   let animalDiv = document.createElement("div")
//   container.appendChild(animalDiv)
//
//   //create a p
//   let paragraphEl = document.createElement("p")
//   paragraphEl.innerText = `${animal.name} the ${animal.species}`
//   animalDiv.appendChild(paragraphEl)
//
//   //create animal image
//   let imageEl = document.createElement("img")
//   animalDiv.appendChild(imageEl)
//   imageEl.src = animal.img
// }
