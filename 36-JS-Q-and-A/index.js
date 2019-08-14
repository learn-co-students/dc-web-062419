//Recursion
//given a position, what is the num
//fib(10) => 55
//fib(8) => 21

//what happens at each iteration
//at what iteration to stop (base case)

//letx=//fib() -> fib() -> fib() -> fib()
       //                          if(some consition, don't call fib again)
       //                          return some static value
       //                   val, mayb manipulate val
       // val  <-  val  <-

// function fib(position, arr=[0,1]){ //start at 10
//   if(arr.length > position){ //basecase when position 10 -> 0
//     return arr[arr.length-1]
//   }
//   arr.push(   arr[arr.length-1] +  arr[arr.length-2]   )
//   // debugger
//   return fib(position, arr)
// }
//
// let answer = fib(10)















//Immediately invoked function expression (IIFEs)

// function declare(){
//
// }
//
//
// (
//   function(){
//     window.ann = {
//       greet: function(){console.log("hiiiii")},
//       surprise: function(){console.log(":O")},
//       firstName: "Ann",
//       lastName: "Duong"
//     }
//   }
// )()

// getButton().addEventListener("click", function(){
//   console.log("hello")
// })

















//Closures - when two scopes are created,
//and one closes over the other

// function outerFunction(){
//   let count = 0
//   return function (){
//     return count += 1
//   }
// }
//
// let increment = outerFunction()
//increment is a function




















// document.addEventListener("DOMContentLoaded", function(){
//   getButton().addEventListener("click", (event)=>{console.log("<3", event)})
//   justALameFunction()
// })
//
// function justALameFunction(){
//   justALameFunction
//   // console.log(getButton())
// }
//
function getButton(){return document.querySelector("button")}
