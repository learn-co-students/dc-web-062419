// function teacherFactory(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   }
// }
//
// let paul = teacherFactory("Paul", "Nicholsen")
// let ann = teacherFactory("Ann", "Duong")
// let chine = teacherFactory("Chine", "Anikwe")
// let trevor = teacherFactory("Trevor", "Jameson")

//ES5 Constructor Function
//this = that new empty object we created
// function Teacher(firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
// }
//
// Teacher.prototype.greet = function(){
//   console.log(`${this.firstName} ${this.lastName} says hi`)
// }
//
// //let paul = {  }.Teacher()
// let paul = new Teacher("Paul", "Nicholsen")
// let ann = new Teacher("Ann", "Duong")

class Person{
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  greet(){
    console.log(`${this.getFullName()} says hi`)
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

//ES6
class Teacher extends Person{
  // static all = []
  constructor(firstName, lastName, employeeID){
    super(firstName, lastName)
    this.employeeID = employeeID
  }

  goHome(){
    console.log(`${this.firstName} is leavi`)
  }

  static lecture(){
    console.log("giving a lecture...")
  }
}

let paul = new Teacher("Paul", "Nicholsen", 1)
let ann = new Teacher("Ann", "Duong", 2)
let jane = new Person("jane", "doe")





























//
