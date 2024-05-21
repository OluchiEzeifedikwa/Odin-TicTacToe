
const gameBoard = [];

const gamers = (function () {
    let id = 0;
    return function(name) {
      return { id: ++id, name

    };
  };
  })();

  const playerOne = gamers('maryann');
  const playerTwo = gamers('naomi');
  console.log(playerOne);
  console.log(playerTwo);
  
  gameBoard.push(playerOne);
  gameBoard.push(playerTwo);
  
  console.log(gameBoard)


function createGameBoard(size) {
  for(let i=0; i < size; i++) {
    const container = document.querySelector('.container');
    const column = document.createElement('div');
    column.classList.add('column');
    column.style.width = '170px';
    
    for(let j = 0; j < size; j++) {
      const row = document.createElement('div');
      row.classList.add('clicker');
      row.style.border = '2px solid black';
      row.style.height = '20px';
      row.style.padding ='50px';
      // row.textContent = (i) + j;
      
      column.appendChild(row);
      container.appendChild(column);
    };
  };
};
createGameBoard(3);



function createInput(player1Name, player2Name) {
  const div = document.createElement('div');
  const player1 = document.createElement('p');
  const player2 = document.createElement('p');
  // const resultDisplay = document.createElement('div')
  

  player1.textContent = player1Name
  player2.textContent = player2Name
  // resultDisplay.textContent = resultDisplayName

  div.appendChild(player1)
  div.appendChild(player2)
  // div.appendChild(resultDisplay)

  const label  = document.getElementById('label');
  label.appendChild(div)

}
createInput();


function checkGameStatus(board) {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (board[a] && board[a] === 
      board[b] && board[b] === board[c] ){
        return `Player ${board[a]} wins!`;
      }
    } 
    if (board.includes('')) {
      return 'Continue playing...';
    } else {
      return 'It is a tie';
    };
};


function addUserInput() {
  const form = document.getElementById('form1');
  const player1 = document.getElementById('player1').value;
  const player2 = document.getElementById('player2').value;
  const startButton = document.getElementById('mySubmit');
  const resultDisplayDiv = document.getElementById('result-display');
  createInput(player1, player2)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const player1 = document.getElementById('player1').value;
    // const player2 = document.getElementById('player2').value;
    const board = [];
    for (let i = 0; i < 9; i++) {
      board[i] = Math.random() < 0.5 ?
      player1 : player2;
    }
    const resultDisplay = checkGameStatus(board);
    resultDisplayDiv.textContent = resultDisplay;
  });
}
addUserInput()


function createRandomText() {
  const rows = document.querySelectorAll('.clicker');
  rows.forEach((row) => {
    let clicks = 0;
    // const button1 = document.getElementById('playerButton');
    const player1Text = ['X', 'O'];
    const player2Text = ['X', 'O'];
    row.addEventListener('click', () => {
      const player1Index = Math.floor(Math.random() * player1Text.length);
      const player2Index = Math.floor(Math.random() * player2Text.length);
      row.textContent = player1Text[player1Index];
      row.textContent = player2Text[player2Index];
    });
  });
};
createRandomText();


function resetGrid() {
  const userInput = document.getElementById('player1');
  const userInput2 = document.getElementById('player2');
  const clearButton = document.getElementById('myButton');
  const resultDisplay = document.getElementById('result-display');
  const rowsToClear = document.querySelectorAll('.clicker');
  
  clearButton.addEventListener('click', () => {
    userInput.value = '';
    userInput2.value = '';
    resultDisplay.textContent = '';
    rowsToClear.forEach((row) => {
      row.textContent ='';
    });
  });
};
resetGrid();




