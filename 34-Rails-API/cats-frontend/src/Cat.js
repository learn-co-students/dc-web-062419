function fetchCats(){
    fetch("http://localhost:3000/cats")
    .then(res => res.json())
    .then(cats => {
        cats.forEach(renderCat)
    })
}

function renderCat(cat){
    //render cat onto DOM inside a Card
    let div = document.querySelector("#cats")
    let catDiv = document.createElement("div")
    div.appendChild(catDiv)
    catDiv.classList.add("ui", "card")
    catDiv.id = `cat-${cat.id}`
    catDiv.innerHTML = `
        <div class="image">
        <img src="${cat.image}">
        </div>
        <div class="content">
            <a data-id=${cat.id} class="header">${cat.name}</a>
            <div class="meta">
            <span class="date">${cat.gender}</span>
            </div>
            <div class="description">
            ${cat.breed}
            </div>
            <div class="description">
            Fluffiness: ${cat.fluffiness}
            </div>
        </div>
        <div class="extra content">
            <ul>
            </ul>
            <i class="trash icon" data-id=${cat.id}></i>
        </div>`
    let deleteIcon = catDiv.querySelector('i')
    deleteIcon.addEventListener("click", removeCat)
    let ul = catDiv.querySelector("ul")
    if(cat.hobbies){
        cat.hobbies.forEach(hobby => {
            ul.innerHTML += `<li>${hobby.name}</li>`
        })
    }

    catDiv.querySelector("a").addEventListener("click", showCat)
}

function showCat(event){
    console.log(event.target.dataset.id)
    document.querySelector("#cats").innerHTML = ""
    fetch(`http://localhost:3000/cats/${event.target.dataset.id}`)
    .then(res => res.json())
    .then(renderCat)
}

function addingCat(event){
    event.preventDefault()
    let data = {
        name: event.target.name.value,
        breed: event.target.breed.value,
        image: event.target.image.value,
        gender: event.target.gender.value,
        fluffiness: event.target.fluffiness.value,
    }
    postCat(data)
}

function postCat(data){
    fetch('http://localhost:3000/cats', {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
        renderCat(data)
    })
}

function removeCat(event){
    let id = event.target.dataset.id
    fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
    .then(deletedCat => {
        document.querySelector(`#cat-${id}`).remove()
        console.log("remove?", deletedCat)
    })
}