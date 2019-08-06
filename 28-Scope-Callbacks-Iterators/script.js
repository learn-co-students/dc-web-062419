// var teacher = "Ann"
// var teacher = "Paul"
// teacher = "Ann"
//var can be redeclared AND can be reassigned

// let coach = "Chine"
// coach = "Trevor"
//let cannot be redeclared
// can re-assign

// const school = {name: "Flatiron", campus: "DC"}
//const cannot redeclare AND you can't reassign
// school.location = "by white house"
// school = {name: "Flatiron", campus: "NYC"}
// function outerFunc(){
// 	console.log("in the outer function");
//   innerFunc();
//
// 	function innerFunc(){
//   console.log("in the inner function")
//     anotherFunc();
//     //more code here
//   }
// }
//
// function anotherFunc(){
// 	console.log("in the another function");
// }
//
// outerFunc();

//process is a function object
// function onboardStudent(name, process){
//   console.log(`Hello, ${name}! Welcome to Flatiron`)
//   process()
// }
//
// const giveLoanerLaptop = function(){
//   console.log("Here is your temporary laptop")
// }
//
// const registerCar = function(){
//   console.log("Here is your passing pass")
// }
//
//
// onboardStudent("Jane", giveLoanerLaptop)
//
// onboardStudent("Jim",
//   () => {console.log("Here is your passing pass")}
// )


const timesTwo = function(x){
  return x * 2
}

// const negative = function(x){return -x}

// function myMapper(oldArray, callback){
//   debugger
//   let newArray = []
//   for(let i=0; i<oldArray.length; i++){
//     newArray.push(   callback(oldArray[i])   )
//   }
//   return newArray
// }

// myMapper([1, 2, 3], timesTwo)
// => [2, 4, 6]


// let mappedArray = [1, 2, 3].map(x => x * 2)
// mappedArray = [1, 2, 3].map(x => -x)
// mappedArray = [1, 2, 3].map((x, index, arr) => {
//   //some addtional logic here
//   console.log(index, arr)
//   return x+10
// })


function isEven(num){
  //return tru is number is even, else return false
  if(num % 2 === 0){
    return true
  }else{
    return false
  }
}

[1, 2, 3, 4, 5].filter(isEven)

function myFilter(oldArray, callback){
  let newArray = []
  for(let i=0; i<oldArray.length; i++){
    if( callback(oldArray[i]) ){
      newArray.push( oldArray[i] )
    }
  }
  return newArray
}

function print(el){
  console.log(el)
}



/*
1. Just the name of all the cereals?
2. All cereals by a certain manufacturer?
3. The names of all cereals manufactured by General Mills?
4. Any cereal with calories between 80 and 100?
5. All cereals with calories between 80 and 100?
6. For each cereal, render it's name on the DOM
*/

// console.log(cerealData)






let mappedArray = cerealData.map(cereal => {
  return {c: cereal.calories, s: cereal.sugars}
})
console.log( mappedArray )



cerealData.filter(
  //function(cereal){return cereal.calores > 100}
  cereal => cereal.calories > 100
).map(
  //function(cereal){return cereal.name}
  cereal => cereal.name
)












//
