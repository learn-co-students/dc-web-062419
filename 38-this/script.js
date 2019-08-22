// console.log(this)
//in the global scope, this === window
"use strict"
//in struct mode, the value of this inside a function will NOT be window; it will be undefined

// let firstName = "Bob"
// let lastName = "Window"
//
// function setFullName(){
//   // month = "August"
//   //assuming this = window{}
//   debugger
//   this.fullName = this.firstName + " " + this.lastName
//   console.log(this.fullName)
// }









let ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}

let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet,
  friend: ann
}

let josh = {
  firstName: "Josh",
  lastName:"Daniel"
}

//what does this look like when nested inside multiple functions
//we have a setFullName()
//when we greet, we create the fullName then console log it
// function greet (){
//   // const setFullName = () => {
//   //   //in here, this = window{}
//   //   debugger
//   //   this.fullName = `${this.firstName} ${this.lastName}`
//   // }
//   // //out here, this = ann{}
//   // setFullName()
//   console.log(`${this.firstName} ${this.lastName} says hi!!`)
// }
function greet (){
  console.log(`${this.firstName} ${this.lastName} says hi!!`)
}
//if you don't invoke a function 'off' an object, there is going to be an implied object that you're invoking off of
// paul.greet()
// ann.greet()

//Create a greet function where Josh is the value of `this`
const joshGreet = greet.bind(josh)
const anotherGreet = joshGreet.bind(ann)

document.querySelector("#ann").addEventListener("click", greet.bind(ann))
document.querySelector("#paul").addEventListener("click", greet.bind(paul))
