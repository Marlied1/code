
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// first function name it and name arguments
function betterThanAverage(classPoints, yourPoints) {
  
  
    // Return True if you're better, else False!
        return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
      }



//Create a function that returns heads or tails 
// randomly and as fairly as possible. Call the function.
const headsOrTails = _ => Math.random()<.5 ? "heads" : 'tails'
//Create a function that takes in a number. 
function flipFlip(n) {
  for(let i = 1; i<=n; i++){
    
// Console log the result of heads or tails using the 
let result = headsOrTails
console.log(result)
// previous function x times where x is the number 
// passed into the function. Call the function.
  }
  flipFlip(10)
}


//In this simple exercise, you will build a program that takes a 
//value, integer , and returns a list of its multiples up to another 
//value, limit . If limit is a multiple of integer, it should be 
//included as well. There will only ever be positive integers passed into 
//the function, not consisting of 0. The limit will always be higher than the base.

function MultipleValues(integer, limit) {
  let tmp = 0,v = [], len = Math.floor(integer/limit);
  for(let i = 0; i < len; i++){
    v.push(tmp+=integer);
  }
  return v;
}
      
//Create a function that grabs the number of snacks 
// from the input and tells you to stop that many times

document.querySelector('button').addEventListener('click',grabsNumbofSnacks)

function grabsNumbofSnacks(n) {
  document.querySelector('input').value
  document.querySelector('h2').innerText +=''
  for(let i =1; i <= n; i++){
    document.querySelector('h2').innerText += 'stop'
  }
}


//Your task is to find a way to merge them into a single one,
// sorted in asc order. Complete the function mergeArrays(arr1, arr2),
//where arr1 and arr2 are the original sorted arrays.

function mergeTwoArr(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a,b) => a-b)
   let result = []
   for(let i = 0; i < arr.length; i++){
     if (arr[i] !== arr[i +1]){
       result.push(arr[i])
     }
     
   }
   return result;
}


//Create a method each_cons that accepts a list and a number n, 
//and returns cascading subsets of the list of size n, like so:

//each_cons([1,2,3,4], 2)
//#=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
// #=> [[1,2,3],[2,3,4]]

function eachCons(n) {
  const newArr = [];
  for (let a=n, i=0; a <= array.length; i++, a++){
    newArr.push(array.slice(i,a))
  }
  return newArr

}

//Create a function that takes in an array of
//numbers. Multiply each number together and alert 
//the product.

function arrOfNums(arr) {
  let product = 1;
  arr.forEach(num => product *= num)
  alert(product)
}
arrOfNums([10,2,3])
