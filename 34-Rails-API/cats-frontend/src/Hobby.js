function fetchHobbies(){
    fetch('http://localhost:3000/hobbies')
    .then(res => res.json())
    .then(hobbies => {
        hobbies.forEach(renderHobby)
    })
}

function renderHobby(hobby){
    let ul = document.querySelector("#hobbies")
    let li = document.createElement("li")
    li.innerText = hobby.name
    ul.appendChild(li)
}