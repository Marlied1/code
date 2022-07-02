//write a function that takes a collectiion and counts the points
//of our team in the chapionship.

//Rules for countinf points for each match:

// if x > y: 3 points
//if x < y: 0 point
//if x = y: 1 point


function points(games) {
    let score = games.map(g => {
      let [x,y] = g.split(':')
      return x>y ? 3 : x==y ? 1 : 0
    }).reduce( (sum,val) => sum += val, 0)
    return score
  }


