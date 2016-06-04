var gameField;
var currentPlayer;

function newGame(){
  var xMax = 7;
  var yMax = 6;
  gameField = new Array();
  for (i=0;i<xMax;i++) {
    gameField[i]=new Array();
    for (j=0;j<yMax;j++) {
      gameField[i][j]=0;
    }
  }

  currentPlayer = "red";

  $("td").css("background-color", "white")
};

function placePiece(column){
  // insert piece into column at lowest unoccupied position
  if (gameField[column - 1].includes(0)) {
    var row = whichRow(column);
    var rowId = "#row-" + row;
    var colId = "#col-" + column;
    var selector = $(rowId + colId)
    $(rowId + " " + colId).css("background-color", currentPlayer)
    gameField[column - 1][row - 1] = currentPlayer
  }
    if (hasWinner()) {
      console.log("winner")
      alert(currentPlayer + " wins!")
      newGame();
    } else {
      switchPlayer();
      console.log("switch player")
    }
}

function whichRow(column) {
  var col = gameField[column - 1];
  return col.lastIndexOf(0) + 1;
}


function hasWinner(){
  if (checkColumn()) { return true };
  if (checkRow()) { return true };
}

function checkColumn() {
  for(var i = 0; i < gameField.length; i ++) {
    if (checkCurrentPlayer(gameField[i])) {
      return true;
    }
  }
}

function checkRow() {
  transposedGameField = transpose(gameField)
  for(var i = 0; i < transposedGameField.length; i ++) {
    if (checkCurrentPlayer(transposedGameField[i])) {
      return true;
    }
  }
}

function checkCurrentPlayer(array){
  console.log(array)
  var counter = 0;

  for(var i = 0; i < array.length; i ++){
    if (array[i] == currentPlayer) {
      counter ++;
      if (counter >= 4) {
        return true;
      }
    } else {
      counter = 0;
    }
  }
}


function switchPlayer(){
  if (currentPlayer === "red") {
    currentPlayer = "black";
  } else {
    currentPlayer = "red";
  }
};


function endGame(){
  return currentPlayer;
}

function transpose(arr) {
  return Object.keys(arr[0]).map(function (c) {
    return arr.map(function (r) {
      return r[c];
    });
  });
}

$(document).ready(function() {

  newGame();

  $(".tg").on("click", "td", function() {
    var col = $(this).attr("id").slice(-1);
    // $(this).html(col)
    placePiece(parseInt(col));
  })

});
