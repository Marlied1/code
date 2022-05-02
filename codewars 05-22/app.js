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