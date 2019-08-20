console.log("connected")
//given an array of subarrays,
//for each subarray, find the difference between the largest value and smallest value
//then find the sums of those differences and return that value

//input: array of subarrays
//output: a single number

//are any elements non numbers? -Let's assume all are numbers
//whats the largest numbers -Max value possible if Max Integer
//floating numbers/decimals a thing? -Yes, there might be decimals
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function findCheckSumUsingMath(data){
  let checkSum = 0
  data.forEach( row => {
    
    let partialSum = Math.max(...row) - Math.min(...row)
    checkSum += partialSum
  })
  return checkSum
}

let checkSumArray = []

function sortAndFindCheckSum(data){
  //forEach subarray in the array
  data.forEach( checkSum )
  //return the sum of checkSumArray
  return checkSumArray.reduce((total, num) => total+num)
}

function checkSum(row){
  let sortedArray = row.sort((a, b) => {return a-b})
  checkSumArray.push(sortedArray[sortedArray.length - 1] - sortedArray[0])
}

console.log(sortAndFindCheckSum(data))
console.log(findCheckSumUsingMath(data))
