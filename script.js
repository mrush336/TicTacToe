// Instantiate objects using Factory Functions
const board = () => {
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  function reset() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
  }

  function makeMove(player, position) {
    gameBoard[position] = player;
  }

  function getBoard() {
    return gameBoard;
  }

  return { reset, makeMove, getBoard };
};

const game = (player1, player2) => {
  let display = document.getElementById("gameBoard");
  const render = () => {
    let space = document.createElement("div");
    display.appendChild(space);
  };
  return { render };
};
