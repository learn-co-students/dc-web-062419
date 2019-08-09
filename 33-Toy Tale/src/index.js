const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
const toyForm = document.querySelector('.add-toy-form')
let addToy = false
const baseUrl = 'http://localhost:3000/toys/'

// YOUR CODE HERE
document.addEventListener("DOMContentLoaded", function(){
  console.log("Hello, is it me you are looking for?")
  getAllToys()
  toyForm.addEventListener('submit', createToy)


})
function getAllToys(){
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(toysArray => toysArray.forEach(renderToy)

  )}

function renderToy(toy){
  // create div for Toys
  let toyDiv = document.createElement("div")
  toyDiv.classList.add("card")
  document.querySelector("#toy-collection").appendChild(toyDiv)

  // create h2 for Toys
  let toyH2 = document.createElement("h2")
  toyH2.innerText = toy.name
  toyDiv.appendChild(toyH2)

  // create img for Toy
  let toyImg = document.createElement("img")
  toyImg.classList.add("toy-avatar")
  toyImg.src = toy.image
  toyDiv.appendChild(toyImg)

  // create p for Toy
  let toyP = document.createElement("p")
  toyP.innerText = `${toy.likes} Likes`
  toyDiv.appendChild(toyP)

  // create Like button for Toy
  let likeButton = document.createElement("button")
  likeButton.classList.add("like-btn")
  likeButton.innerText = "Like ❤️"
  likeButton.dataset.id = toy.id
  toyDiv.appendChild(likeButton)
  likeButton.addEventListener("click", (e) => addLikes(e, toy.id, toyP))
}

function addLikes(event, toyId, toyP){
  console.log("attempting to add likes")
  let numLikes = parseInt(toyP.innerText) + 1
  let data = {
    likes: numLikes
  }
  fetch(baseUrl + toyId, {
    method: 'PATCH',
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)

  })
  .then( resp => resp.json())
  .then( toy => {
    event.target.parentElement.querySelector("p").innerText = `${toy.likes} Likes`
  })

}

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
  } else {
    toyFormContainer.style.display = 'none'
  }
})


function createToy(event){
  event.preventDefault()
  let newToyData = {
    name: event.target["name"].value, 
    image: event.target["image"].value, 
    likes: 0
  }
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(newToyData)
  })
  .then(res => res.json())
  .then(renderToy)
}
// OR HERE!
