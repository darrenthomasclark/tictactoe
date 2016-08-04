// defines the variable state as an an array with three
// more arrays that represent the rows and columns of the tic tac toe board
const state = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
// defines the variable x with a value of 1
const X = 1
// defines the variable o with a value of 2
const O = 2
// defines the variable cellValues as an object
// with key value pairs ex. 0 is the key and the emptry string
// is the value associated with that key
const cellValues = { 0: '', 1: 'X', 2: 'O' }
//defines the global variable playerTurn and initialized it to x that can be accessed anywhere in the program and references whose turn it is
let playerTurn = X
//drawBoard is a function (=> means function) that contains a for loop.  This function draws the board.  i represents rows, j represents columns.
const drawBoard = () => {
//  initializer, condition, incrementer or after thought
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
// the value col is equal to row i column j like x and y coordinates
      const col = state[i][j]
// selects against a css selector in this case refers to the table and table rows the nth child of i+1 and the table data nth child j+1 (represents which cell we are in on the table/tic tac toe board)
      const cell = document.querySelector(
        `table tr:nth-child(${i+1}) td:nth-child(${j+1})`
      )
// the text content will be come the value stored in each cell which is referenced by the col value. if col = 0 we get back an empty string.  if col = 1 we get back an x.  if col = 2 we get back an o.
      cell.textContent = cellValues[col]
    }
  }
//the message that is below our board will be set to whose turn it currently is using string interpolation on the cell values based on the player turns.
  document.querySelector('.message').textContent = `It's ${cellValues[playerTurn]}'s turn.`
}
// play function where we pass in a row, a column, and a player when we call it.  based on the row and column we know exactly where the x a y coordinates are and set = to where that player is.
const play = (row, col, player) => {
  state[row][col] = player
  playerTurn = player === X ? O : X
}
//initialize the first function we call when the DOM is loaded
const init = () => {
// loop through the table rows.
  const rows = document.querySelectorAll('tr')
  for (let i = 0; i < rows.length; i++) {
// loop through table data (cells)
    const cols = rows[i].querySelectorAll('td')
    for (let j = 0; j < cols.length; j++) {
// establishes that we can click on the table data in the current cell
      cols[j].addEventListener('click', () => {
        play(i, j, playerTurn)
// draws x or o in each cell and changes the player's turn
        drawBoard()
      })
    }
  }
  drawBoard()
}

document.addEventListener('DOMContentLoaded', init)
