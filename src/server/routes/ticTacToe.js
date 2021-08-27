const { computerFace, rand } = require('../apis/index');

const winnable = [
    '0,1,2', '3,4,5', '6,7,8',
    '0,3,6', '1,4,7', '2,5,8',
    '0,4,8', '6,4,2'
];
const moveOrder = [4, 0, 2, 6, 8, 1, 3, 5, 7];
const players = {
    human: 'X',
    computer: 'O'
};

const avalibleMovesLeft = (board) => {
    let count = 9;
    board.forEach(cell => {
        if (cell !== '') {
            count--;
        }
    });
    return count || 0;
}

const countLine = (cells, player) => {
    let count = 0;
    let spot = -1;
    cells.forEach((cell, index) => {
        if (cell === player) {
            count++;
        }
        if (cell === '') {
            spot = index;
        }
    });
    return count === 2 ? spot : -1;
};

const hasPlayerWon = (board, player) => {
    const winLine = winnable.findIndex(test => {
        let count = 0;
        const cells = test.split(',').map(p => board[p]);
        cells.forEach(t => t === player ? count++ : null);
        return count === 3;
    });
    return winLine > -1 ? { player, winningLine: winLine, winningSet: winnable[winLine] } : false;
};

const AiChoice = ({ board, player, ai }) => {
    let aiMove = false;
    winnable.forEach(test => { //If AI can win this turn make winning move
        const cells = test.split(',').map(p => board[p]);
        const move = countLine(cells, ai);
        if (move > -1) {
            aiMove = test.split(',')[move];
            return aiMove;
        }
    });
    if (!aiMove) {
        winnable.forEach(test => { //If player can win next turn block player
            const cells = test.split(',').map(p => board[p]);
            const move = countLine(cells, player);
            if (move > -1) {
                aiMove = test.split(',')[move];
                return aiMove;
            }
        });
    }
    if (aiMove) {
        return aiMove;
    }
    return moveOrder.find(move => board[move] == '' ? move : false);
};

const setPlayerChoice = (choice, board, player) => {
    const nextBoard = [...board];
    nextBoard[choice] = player;
    return nextBoard;
};

const validateChoice = (choice, board) => board[choice] === '';

const postTttMatch = (req, res) => {
    const { choice, board } = req.body;
    if (typeof choice === 'undefined') {
        return res.status(400).json({ error: "'choice' param must not be null" });
    }
    if (!validateChoice(choice, board)) {
        return res.status(403).json({ error: "invalided selection." });
    }
    let nextBoard = setPlayerChoice(choice, board, players.human);
    const didPlayerWin = hasPlayerWon(nextBoard, players.human);
    if (didPlayerWin) {
        return res.json({ board: nextBoard, winner: didPlayerWin, face: rand(computerFace['win']) });
    }
    const remainingMoves = avalibleMovesLeft(nextBoard);
    if (remainingMoves === 0) {
        const face = rand(computerFace['tie']);
        return res.json({ board: nextBoard, winner: 'tie', face });
    }
    const aiChoice = AiChoice({
        board: nextBoard,
        player: players.human,
        ai: players.computer
    });
    nextBoard = setPlayerChoice(aiChoice, nextBoard, players.computer);
    const winnerTests = {
        player: hasPlayerWon(nextBoard, players.human),
        computer: hasPlayerWon(nextBoard, players.computer)
    };
    const winner = winnerTests.player || winnerTests.computer;
    const faceType = winner ? (winnerTests.computer ? 'lose' : 'win') : 'playing';
    const face = rand(computerFace[faceType]);
    return res.json({ board: nextBoard, winner, face });
};

module.exports = {
    postTttMatch
};