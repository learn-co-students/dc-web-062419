document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  let addToy = false

  getToys(toyUrl)
  
  // EVENT LISTENERS //
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })

  toyForm.addEventListener('submit', createNewToy)
})


// HELPER FUNCTIONS //
function getToys(toyUrl){
  fetch(toyUrl())
  .then(res => res.json())
  .then(toys => toys.forEach(addToyToDOM))
}

function addToyToDOM(toy) {
  const toyCollection = document.getElementById('toy-collection')
  const card = document.createElement('div')
  const name = document.createElement('h2')
  const image = document.createElement('img')
  const likes = document.createElement('p')
  const likeBtn = document.createElement('button')
  const delBtn = document.createElement('button')

  card.className = 'card'
  name.innerText = toy.name
  image.src = toy.image
  image.className = 'toy-avatar'
  likes.innerText = `${toy.likes} Likes`
  likeBtn.innerText = 'Like ❤️'
  delBtn.innerText = 'Delete ❌'

  likeBtn.addEventListener('click', () => handleLike(toy, likes))
  delBtn.addEventListener('click', () => deleteToy(toy.id, card))

  card.append(name, image, likes, likeBtn, delBtn)
  toyCollection.append(card)
}

function createNewToy(e) {
  e.preventDefault()
  const name = e.target['name'].value
  const image = e.target['image'].value
  if (name === '' || image === '') {
    alert('Please fill out both name and image')
  } else {
    const data = {
      name: e.target['name'].value,
      image: e.target['image'].value,
      likes: 0
    }
    postToy(data)
    document.querySelector('form').reset()
  }
}

function toyUrl(){
  return 'http://localhost:3000/toys/'
}

function postToy(data) {
  fetch(toyUrl(), 
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(addToyToDOM)
  .catch(() => alert('Server down. Please try again later'))
}

function handleLike(toy, likesP) {
  const newLikes = parseInt(likesP.innerText) + 1

  // Optimistic rendering
  // likesP.innerText = `${newLikes} likes`

  fetch(toyUrl() + toy.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ likes: newLikes })
  })
  .then(res => res.json())
  .then(toy => {
    // Pessemistic rendering
    likesP.innerText = `${toy.likes} Likes`
  })
}

function deleteToy(id, toyCard) {
  fetch(toyUrl() + id, {
    method: 'delete'
  })
  .then(res => res.json())
  .then(() => toyCard.remove())
  .catch(() => alert('Server down. Please try again later'))
}