const palyerXScore = document.getElementById('X');
const playerOScore = document.getElementById('O');
const tieScore = document.getElementById('Ties');
const cells = document.querySelectorAll('.cell')
const X= document.querySelectorAll('.fa-xmark');
const O= document.querySelectorAll('.fa-o');
const x="<i class=\"fa-solid fa-xmark\"></i>"
const o="<i class=\"fa-solid fa-o\"></i>"

let scoreX = 0;
let scoreO = 0;
let scoreTie = 0;
let Turn = x;
let board = ["", "", "", "", "", "", "", "", ""];

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkTie() {
    return board.every(cell => cell !== "");
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    for (let cell of cells) {
        cell.innerHTML = "";
    }
    Turn = x;
}

cells.forEach((cell,index) => {
    cell.addEventListener('click', function() {
        if (board[index] === "") {
            board[index] = Turn;
            cell.innerHTML = Turn;
            if (checkWin()) {
                if (Turn === x) {
                    scoreX++;
                    palyerXScore.textContent = scoreX;
                }
                else {
                    scoreO++;
                    playerOScore.textContent = scoreO;
                }
                resetBoard();
            } else if (checkTie()) {
                scoreTie++;
                tieScore.textContent = scoreTie;
                resetBoard();
            } else {
                Turn = (Turn === x) ? o : x;
            }
        }
        console.log(board)
        console.log(Turn)
        console.log(checkWin())
    });
})


