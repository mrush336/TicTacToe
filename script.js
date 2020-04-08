// Instantiate objects using Factory Functions
const board = {
  top: [1, 2, 3],
  middle: [4, 5, 6],
  bottom: [7, 8, 9],
};

const player = (name, move) => {
  const getName = () => name;
  const move = () => {};
  return { move, getName };
};

const game = (player1, player2) => {
  let display = document.getElementById("gameBoard");
  const render = () => {
    let space = document.createElement("div");
    display.appendChild(space);
  };
  return { render };
};
