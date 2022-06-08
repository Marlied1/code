/*
Create a function that takes an integer as an argument and returns "Even" 
for even numbers or "Odd" for odd numbers.
*/

//notes
//crete a function
//create a conditional statement that checks for even and odd 

function even_or_odd(number) {
  if(number % 2 ===0 ) {
      return 'Even'
  }else{
      return 'Odd'
  }
}
console.log(even_or_odd(2))
//bllopers