// console.log("index")
//When we make a get fetch to get all the Trainers
//make 1 instance of App
//make 8 instances of Trainer
//make many instances of Pokemon

document.addEventListener("DOMContentLoaded", function(){
  fetch("http://localhost:3000/trainers")
  .then(res => res.json())
  .then(data => {
     appInstance = new App(data)
     document.querySelector("body").innerHTML += appInstance.render()
  })
})
