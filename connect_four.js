var gameField;
var currentPlayer;

function newGame(){
  gameField = new Array();
  currentPlayer = 1;
};

function placePiece(column){
    // insert piece into column at lowest unoccupied position

  //  hasWinner();
}


function hasWinner(){
// analyze the board for 4 in a row || 4 in a column
// if yes
// endGame();
// else switchPlayer()
}

function switchPlayer(){
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
};


function endGame(){
  return currentPlayer;
}


