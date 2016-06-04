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
};

function placePiece(column){
  // insert piece into column at lowest unoccupied position
  var row = whichRow(column);
  var rowId = "#row-" + row;
  var colId = "#col-" + column;
  var selector = $(rowId + colId)
  $(rowId + " " + colId).css("background-color", currentPlayer)
  gameField[column - 1][row - 1] = "taken"
  //  hasWinner();
}

function whichRow(column) {
  var col = gameField[column - 1];
  return col.lastIndexOf(0) + 1;
}


function hasWinner(){
// analyze the board for 4 in a row || 4 in a column
// if yes
// endGame();
// else switchPlayer()
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
