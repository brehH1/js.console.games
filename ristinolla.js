function ristinolla(){
  let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';
let difficulty = 'medium'; // Voit vaihtaa vaikeustason tähän ('easy', 'medium', 'hard')

function printBoard() {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join(' | '));
        if (i < board.length - 1) {
            console.log('---------');
        }
    }
}

function checkWinner() {
    // Tarkistaa voittajan
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
        if (board[0][i] !== ' ' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[0][i];
        }
    }

    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }

    if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }

    return null;
}

function botAI() {
    if (difficulty === 'easy') {
        // Tee siirto satunnaisesti
        let row, col;
        do {
            row = Math.floor(Math.random() * 3);
            col = Math.floor(Math.random() * 3);
        } while (board[row][col] !== ' ');
        
        board[row][col] = currentPlayer;
    } else if (difficulty === 'medium') {
        // Tee hieman älykkäämpi siirto
        // TODO: Lisää keskivaikean strategia
    } else if (difficulty === 'hard') {
        // Tee vaikein mahdollinen siirto
        // TODO: Lisää vaikean strategia
    }
}

function makeMove(row, col) {
    if (row < 0 || row >= 3 || col < 0 || col >= 3 || board[row][col] !== ' ') {
        console.log('Virheellinen siirto!');
        return;
    }

    board[row][col] = currentPlayer;
    printBoard();

    let winner = checkWinner();
    if (winner) {
        console.log(winner + ' voitti!');
        return;
    }

    let availableMoves = board.flat().filter(move => move === ' ');
    if (availableMoves.length === 0) {
        console.log('Peli päättyi tasapeliin!');
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (currentPlayer === 'O') {
        botAI();
    }
}

printBoard();

// Esimerkkikäyttö
makeMove(1, 1);
makeMove(0, 0);
makeMove(2, 2);
makeMove(0, 2);
makeMove(0, 1);
makeMove(1, 0);
makeMove(1, 2);
makeMove(2, 0);
makeMove(2, 1);
}