// Create two functions min or max that reeeives a list of intergers 
//then returns the larest and lowest number in that list



const min = list => list.sort((a, b) => a - b)[0];

const max = list => list.sort((a, b) => b - a)[0];