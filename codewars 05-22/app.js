 //You have joined an undeground pokemon leauge. In this league, 
 function undergroundPokemon(number) {
     
//trainers can use any number of pokemon. Print to the console 
for ( let i =1; i<= number; i++){
//"Pikachu I choose you" x times where x is the number of pokemon the 
console.log('Pokemon I choose You')
}
//trainer you are battling has in their party
 }
 undergroundPokemon(10)


// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 

//Create an espresso machine class that makes machines 
//with 4 properties and 3 methods

class ExpressoMachine{
    constructor(color, brand, model, price){
        this.color = color
        this.brand = brand 
        this.model = model
        this.price = price
        }
        turnOn(){
            console.log('I am on')
    }
    turnoff(){
        console.log('I am off')
    }
    brewing(){
        console.log('coffee is brewing')
    }
    
}
let gagia = ('black', 'Gaggia', 'classic pro' ,600)


// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 

// Create a game of tic tac toe using the class constrcutor

class GameBoard{
    constructor(){
        this.gameboard = [
            ['','',''],
            ['','',''],
            ['','','']
        ]
        this.nextPieceType = 'x'
        this.piecePlaced = false
    }
  
    placePiece(piece){
        this.piecePlaced = false
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(this.gameboard[i][j] === ''){
                    this.gameboard[i][j] = piece
                    this.piecePlaced = true
                    break
                }
            }
            if(this.piecePlaced === true){
                break
            }
        }
        console.table(this.gameboard)
        this.nextPieceType === 'x' ? this.nextPieceType = 'o' : this.nextPieceType = 'x'
    }
  }
  
  // GamePlay
  // document.querySelector('button').addEventListener('click', gameplay)
  let ticTacToe = new gameBoard()
  ticTacToe.placePiece('x')
  ticTacToe.placePiece('o')
  ticTacToe.placePiece('x')
  ticTacToe.placePiece('o')
  ticTacToe.placePiece('x')
  ticTacToe.placePiece('o')
  ticTacToe.placePiece('x')
  ticTacToe.placePiece('o')
  ticTacToe.placePiece('x')


// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 


// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 


class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
}
class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
let bob = new Contractor('Bob','Front-end')
let simba = new Front('Simba','Front-end','React')
let machi = new Back('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.sayHello()
}


// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 
// * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *  * * * * * * * * 


//Create and array of tv shows. Loop through and 
//print each show to the console

let tvShows = ['avatar','insecure', 'psych']
tvShows.forEach(show=> console.log(show))