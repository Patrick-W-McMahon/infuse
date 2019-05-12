
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


const firstBestMove = board => {
    const moves = [4,0,2,6,8,1,3,5,7];
    moves.forEach(move => {
        if(board[move] === '') {
            return board[move];
        }
    });
};

const bestMove = board => {
    const winnable = [
        '0,1,2','3,4,5','6,7,8',
        '0,3,6','1,4,7','2,5,8',
        '0,4,8','6,4,2'
    ];
    winnable.forEach(test => {
        const cells = test.split(',').map(p => board[p]);
        const move = countLine(cells, 'O');
        if(move > -1) {
            return cells[move];
        }
    });
    winnable.forEach(test => {
        const cells = test.split(',').map(p => board[p]);
        const move = countLine(cells, 'X');
        if(move > -1) {
            return cells[move];
        }
    });
    return firstBestMove(board);
};

const playGameTTT = currentBoard => {
    let newBoard = currentBoard;
    newBoard[bestMove(currentBoard)] = 'O';
    return newBoard; 
}

const postTttMatch = (req, res) => {
    const properties = req.body;
    if(typeof properties.board === 'undefined'){
        return res.status(400).json({ error: "'board' param must not be null" });
    }
    const board = playGameTTT(properties.board);
    return res.json({ board });
};

module.exports = {
    postTttMatch
};