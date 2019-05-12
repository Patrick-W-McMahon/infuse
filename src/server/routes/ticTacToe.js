
const winnable = [
    '0,1,2','3,4,5','6,7,8',
    '0,3,6','1,4,7','2,5,8',
    '0,4,8','6,4,2'
];
const moveOrder = [4,0,2,6,8,1,3,5,7];
const players = {
    human: 'X',
    computer: 'O'
};

const countLine = (cells,player) => {
    let count = 0;
    let spot = -1;
    cells.forEach((cell,index) => {
        if(cell === '' || cell === player) {
            if(cell === player) {
                count++;
            } else {
                spot = index;
            }
        } else {
            return -1;
        }
    });
    if(count === 2) {
        return spot;
    } else {
        return -1;
    }
};

const hasPlayerWon = (board, player) => {
    winnable.forEach(test => {
        let count = 0;
        const cells = test.split(',').map(p => board[p]);
        cells.forEach(t => {
            if(t === player) {
                count++;
            }
        });
        if(count === 3) {
            return {
                player,
                winningLine: test
            };
        }
    });
    return false;
};

const AiChoice = ({board,player,ai}) => {
    winnable.forEach(test => {
        const cells = test.split(',').map(p => board[p]);
        const move = countLine(cells, ai);
        if(move > -1) {
            return cells[move];
        }
    });
    winnable.forEach(test => {
        const cells = test.split(',').map(p => board[p]);
        const move = countLine(cells, player);
        if(move > -1) {
            return cells[move];
        }
    });
    moveOrder.forEach(move => {
        if(board[move] === '') {
            return board[move];
        }
    });
};

const setPlayerChoice = (choice, board, player) => {
    const nextBoard = [...board];
    nextBoard[choice] = player;
    return nextBoard;
};

const validateChoice = (choice, board) => {
    return board[choice] === '';
};

const postTttMatch = (req, res) => {
    const { choice, board } = req.body;
    if(typeof choice === 'undefined'){
        return res.status(400).json({ error: "'choice' param must not be null" });
    }
    if(validateChoice(choice,board)){
        let nextBoard = setPlayerChoice(choice, board, players.human);
        nextBoard = setPlayerChoice(AiChoice({
            board: nextBoard,
            player: players.human,
            ai: players.computer
        }), nextBoard, players.computer);
        const winnerTests = {
            player: hasPlayerWon(board,players.human),
            computer: hasPlayerWon(board,players.computer)
        };
        const winner = winnerTests.player || winnerTests.computer;
        const face = 'meh';
        return res.json({ board: nextBoard, winner, face });
    } else {
        const winnerTests = {
            player: hasPlayerWon(board,players.human),
            computer: hasPlayerWon(board,players.computer)
        };
        const winner = winnerTests.player || winnerTests.computer;
        const face = 'meh';
        return res.json({ board, winner, face });
    }    
};

module.exports = {
    postTttMatch
};