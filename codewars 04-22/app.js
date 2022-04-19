
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

function grabsNumbofSnacks() {
  let numberOfSnacks = document.querySelector('input').value
  document.querySelector('h2').innerText +=''
  for(let i =1; i <= numberOfSnacks; i++){
    document.querySelector('h2').innerText += 'stop'
  }
}


//Your task is to find a way to merge two arrays into a single one,
function mergeTwoArr(arr1, arr2) {
// sorted in asc order. Complete the function mergeArrays(arr1, arr2),
let arr = arr1.concat(arr2).sort((a,b) => a-b)
//where arr1 and arr2 are the original sorted arrays.
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

function eachCons(array , n) {
  const newArray = []
  for (let a= n, i =0; a <=array.length; i++, a++){
    newArray.push(array.slice(i,a))
  }
  return newArray
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


//Write a program that creates a string that represents an 
//8×8 grid, using newline characters to separate lines. At 
//each position of the grid there is either a space or a "#" 
//character. The characters should form a chessboard.
//Passing this string to console.log should show something like this:

 //# # # #
 //# # # # 
 // # # # #
 //# # # # 
 // # # # #
 //# # # # 
 // # # # #
 //# # # #

 let size = 8;
 let board ='';

 for(let y =0; y<size; y++){
   for(let x=0; x<size; x++){
    if((x+y)%2===0){
      board +=''
    }else{
      board+='#'
    }
   }
   board +='\n'
 }
 console.log(board)

 

 //Create a function that takes in a number.
 function thatTakesIn(n) {
 //Console log every number from 1 to that number 
  for(let i =1; i<=n; i++){
//while skipping multiples of 5.
  if(i%5 !==0){
    console.log(i)
}
 }

 }


 //Create and array of numbers
 let arrNumb = [10,21,30,41,50,61]
//Return a new array of numbers that includes every 
let onlyEvens = arr => arr.filter(n=> n%2==0)
//even number from the previous Arrays and console log results
console.log(onlyEvens(arrNumb))


//Write a program that asks the user for a raw price. After that, 
let rawPrice = prompt("Enter a number");
//it  calculates the corresponding final price using a VAT rate of 20.6%.
let vatPrice = Number(rawPrice)/100 *20.6;
// alert the final total
let total = Number(rawPrice) + vatPrice;
alert(`The total cost is ${total}`)


//Write a program that returns the girl's age (0-9) as an integer.
function getAge(integer) {
  return parseInt(integer)
}

//Given an integral number, determine if it's a square number:

function isSquare(square) {
  return Math.sqrt(square)%1 ===0
}


//Given a non-negative integer, 3 for example, 
let countSheep = function (num){
  let result = '';
//return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
for (let i = 1; i <= num; i++) {
// Input will always be valid, i.e. no negative integers.
result += i.toString() + ' sheep...';
}
return result;
}


//Complete the function that calculates the area of the red square

function squareArea(A) {
//when the length of the circular arc A is given as the input.
let a = A/(2* Math.PI*(90/360)) 
let area = Math.pow(a,2)
return Number(area.toFixed(2))
}

//Given an array of integers,
function maps(x) {
  let newArrayy =[]
  for(let i =0; i< x.length; i++){
// return a new array with each value doubled.
newArrayy.push(x[i]*2);
}
return newArrayy
}

// Create a function that takes in an array.
//If the first number, is less than the last number, 
//alert "Hi". If the first number is greater than the 
//last number, alert "Bye". If they are equal, alert
//"We close in an hour".

function checkFor(arr) {
  if (arr[0] < arr [arr.length -1]) {
      alert('HI!')
  }else if (arr[0]>[arr.length -1]){
      alert('Bye')
  }alert('We close in an hour!')
}

