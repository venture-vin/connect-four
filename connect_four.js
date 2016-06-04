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
      alert(currentPlayer + "wins!")
      newGame();
    } else {
      switchPlayer();
    }
}

function whichRow(column) {
  var col = gameField[column - 1];
  return col.lastIndexOf(0) + 1;
}


function hasWinner(){
  return checkColumn();
}

function checkColumn() {
  for(var i = 0; i < gameField.length; i ++) {
    if (checkRed(gameField[i])) {
      return true;
    }
  }
}

function checkRed(array){
  console.log(array)
  var counter = 0;

  for(var i = 0; i < array.length; i ++){
    if (array[i] == "red") {
      counter ++ ;
    } else {
      counter = 0;
    }
  }
  if (counter >= 4) {
    return true;
  } else {
    return false;
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

$(document).ready(function() {

  newGame();

  $(".tg").on("click", "td", function() {
    var col = $(this).attr("id").slice(-1);
    // $(this).html(col)
    placePiece(parseInt(col));
  })

});
