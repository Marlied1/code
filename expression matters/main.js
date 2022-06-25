// create a function that returns the largest number obtained
//after inserting the following operators and brackets

function expressionMatter(a, b, c){
    return Math.max(a+b+c, a*b*c, (a+b)* c, a*(b+c));
  }
