// Instantiate game board using Factory Functions
const board = () => {
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  function reset() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
  }

  function render() {
    let space = document.createElement("div");
    display.appendChild(space);
  }

  function getBoard() {
    return gameBoard;
  }

  return { reset, render, getBoard };
};

// The main game functions live here
const game = (playerx, playero) => {
  function makeMove(player, position) {
    gameBoard[position] = player;
  }

  function score() {}

  function currentPlayer() {}

  function winningMessage(player) {
    let messageBox = document.getElementById("status");
    let message = "Player ${player} has won the game!";
    messageBox.innerText(message);
  }

  function tiedgameMessage() {
    let messageBox = document.getElementById("status");
    let message = "The game is a tie!";
    messageBox.innerText(message);
  }
  return { makeMove, score, currentPlayer, winningMessage, tiedgameMessage };
};
